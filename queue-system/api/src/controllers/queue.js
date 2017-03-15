import config from 'config';
import Redis from 'ioredis';

const redisWriter = new Redis(config.get('redis'));

function _addToQueue(queue, payload) {
  return new Promise((resolve, reject) => {
    try {
      redisWriter.lpush(queue, JSON.stringify({
        payload,
        tries: 0,
      }), (err) => {
        if (err) {
          reject(err);
        }
        resolve('OK');
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function addToQueue(req, res) {
  const queue = req.swagger.params.queueType.value.toLowerCase();
  const payload = req.body.payload;
  _addToQueue(queue, payload)
    .then(response => res.json(response))
    .catch(err => {
      res.status(500).json({
        message: err,
      });
    });
}

export function test(req, res) {
  res.json("OK");
}

export function addEmailToQueue(req, res) {
  console.log('add email')
  const queue = 'email';
  const payload = req.body;
  _addToQueue(queue, payload)
    .then(response => res.json(response))
    .catch(err => {
      res.status(500).json({
        message: err,
      });
    });
}
export function addApiToQueue(req, res) {
  console.log('add api')
  const queue = 'api';
  const payload = req.body;
  _addToQueue(queue, payload)
    .then(response => res.json(response))
    .catch(err => {
      res.status(500).json({
        message: err,
      });
    });
}

/**
 {
  "from": "john.elric",
  "options": {
    "from": "John =) <john.elric@gmail.com>",
    "to": "john.benavides@digitaldimension.es",
    "subject": "Swagger Test",
    "text": "This is Text",
    "html": "<p>This is <b>HTML</b></p>"
  }
}
 */