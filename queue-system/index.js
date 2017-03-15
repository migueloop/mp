import config from 'config';
import express from 'express';
import redis from 'redis';
import bluebird from 'bluebird';
import bodyParser from 'body-parser';
bluebird.promisifyAll(redis.RedisClient.prototype);
const client = redis.createClient(config.get('redis'));
const app = express();
const port = 3001;
app.use(bodyParser.json());
client.on('error', err => console.error('Error', err));

// Makes sure that the queue parameter is there
const requiredParams = (req, res, next) => req.query.queue || req.body.queue ? next() : res.status(422).end('Missing parameter: queue');

const authentificationMiddleware = (req, res, next) => req.get('authentication') !== 'slkjhl9834798shdkjfhak8hjlkh' ? res.status(401).end('Unauthorized') : next();

app.get('/', authentificationMiddleware, (req, res) => res.end('Welcome to the Queue System'));

// Removes the next item from the queue and returns it
app.delete('/jobs/next', authentificationMiddleware, requiredParams, (req, res) => {
  const queue = req.body.queue || req.query.queue;
  client.lpopAsync(queue)
  .then(redisRes => redisRes ? res.status(200).json(JSON.parse(redisRes)) : res.status(404).json('Not found'))
  .catch(err => res.status(500).json(err));
});

// Adds a new job
app.post('/jobs', authentificationMiddleware, requiredParams, (req, res) => {
  const queue = req.body.queue || req.query.queue;
  console.log('ATTEMPTING TO ADD JOB TO QUEUE');
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  if (!req.body.payload) {
    return res.status(422).end('Missing parameter: payload');
  }
  client.rpushAsync(queue, JSON.stringify(req.body.payload))
  .then(redisRes => res.status(200).json(req.body.payload))// what to return here? default is length of list
  .catch(err => res.status(500).json(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
