import express from 'express';
import { Server } from 'http';
import Socket from 'socket.io';
import Redis from 'ioredis';
import guid from 'node-uuid';
import bodyParser from 'body-parser';
import config from 'config';

const authenticationKey = config.get('authentication_key');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const http = Server(app);

const io = Socket.listen(config.get('socket.port'));

const workerByType = {};
const redisQueues = {};

const redis = new Redis(config.get('redis'));
const redisWriter = redis.duplicate();
const workersTypes = [];
const timeout = 0;
let shuttingDown = false;

function getAvailableSocket(queueType) {
  const workersKeys = Object.keys(workerByType[queueType]);
  const pos = Math.floor(Math.random() * (workersKeys.length));
  const client = workerByType[queueType][workersKeys[pos]];
  if (!client.socket.connected) {
    return getAvailableSocket(queueType);
  }
  return client;
}

function processQueue(queueType) {
  // if no workerByType wait to one to connect
  if (workersTypes.length === 0) {
    return setTimeout(() => {
      process.nextTick(() => processQueue(queueType));
    }, 1000);
  }

  redisQueues[queueType].brpop(queueType, timeout, (err, result) => {
    if (err) {
      if (shuttingDown) return;
      return process.nextTick(() => processQueue(queueType));
    }
    if (!result) {
      return process.nextTick(() => processQueue(queueType));
    }
    const client = getAvailableSocket(queueType);
    client.processes++;
    // send request to worker
    client.socket.emit('process', JSON.parse(result[1]));
    return process.nextTick(() => processQueue(queueType));
  });
}

function shutdown() {
  shuttingDown = true;
  // use disconnect rather than quit since brpop blocks
  redis.disconnect();
  Object.keys(redisQueues).map(r => redisQueues[r].disconnect());
  process.exit(0);
}

process
  .once('SIGINT', shutdown)
  .once('SIGTERM', shutdown);


io.on('connection', (socket) => {
  // create list of clients using the token
  if (authenticationKey !== socket.handshake.query.token) {
    console.log('Auth failed, disconnecting socket');
    socket.disconnect();
    return;
  }

  const queueType = socket.handshake.query.type;
  if (workersTypes.indexOf(queueType) === -1) {
    workersTypes.push(queueType);
    workerByType[socket.handshake.query.type] = {};
    process.nextTick(() => {
      redisQueues[queueType] = redis.duplicate();
      processQueue(queueType);
    });
  }
  const token = guid.v4();

  workerByType[queueType][token] = {
    socket,
    processes: 0,
  };

  socket.on('disconnect', () => {
    delete workerByType[queueType][token];
    // if no workers of this type remove from workers Types
    if (Object.keys(workerByType[queueType]).length === 0) {
      workersTypes.splice(workersTypes.indexOf(queueType), 1);
      redisQueues[queueType].disconnect();
    }
  });

  socket.on('failure', (res) => {
    workerByType[queueType][token].processes--;
    redisWriter.lpush(queueType, JSON.stringify(res.data), (err) => {
      console.log('err', err);
    });
  });

  socket.on('success', () => {
    workerByType[queueType][token].processes--;
  });
});
