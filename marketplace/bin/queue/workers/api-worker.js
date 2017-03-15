import queueFactory from '../queue-factory';
import { QUEUE } from 'helpers/constants'; // TODO: Remove this from here..
import Logs from 'logs';
import axios from 'axios';
const queue = queueFactory();

queue.process(QUEUE.TYPES.API, (job, done) => {
  Logs.queue.trace(`PROCESSING ${job.type} JOB WITH ID: ${job.id}`);
  try {
    const data = job.data.data;
    const { webhook } = data;
    delete data.webhook;
    const params = Object.assign({
      method: data.method,
      url: data.endpoint,
      data: data.params,
      headers: data.headers,
    }, data.options);

    axios(params)
    .then(res => {
      if (!webhook) {
        return Promise.resolve();
      }

      return axios({
        method: webhook.method,
        url: webhook.endpoint,
        data: {
          data: res.data,
          params: webhook.params,
        },
      });
    })
    .then(() => done())
    .catch(err => {
      console.error(err, 'ERROR', err.stack);
      done(err);
    });
  } catch (err) {
    // We catch the error and return it as done. This way Kue will know that it failed.
    return done(err);
  }
});
