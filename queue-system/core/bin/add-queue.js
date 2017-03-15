
const Redis = require('ioredis');
const times = require('lodash.times');
const axios = require('axios');

const mailQueueKey = process.argv[3] || 'mailQueue';

if (process.argv.length < 3) {
  console.error('usage: node mail-client.js N_MSGS_TO_QUEUE');
  process.exit(1);
}

const redis = new Redis();
const rPipeline = redis.pipeline();
const nMsgsToQueue = process.argv[2];

function queueMsg(i) {
  axios.post('http://localhost:3005/enqueue/email', {
    payload: {
      from: 'john@intuiteev.io',
      options: {
        from: '"John! 👥" <john.elric@gmail.com>', // sender address
        to: 'john.elric@gmail.com, john.benavides@digitaldimension.es', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: '<b>Hello world 🐴</b>', // html body
      },
    },
  });


}

times(nMsgsToQueue, queueMsg);
rPipeline.exec((err, results) => {
  if (err) { return console.error(err); }
  console.log(`${nMsgsToQueue} messages queued`);
});

redis.quit();