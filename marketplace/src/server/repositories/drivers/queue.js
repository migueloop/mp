// import kue from 'kue';
import config from 'config';
import Logs from 'logs';
import { QUEUE } from 'helpers/constants';
import _ from 'underscore';

// Queue factory function
export default class QueueDriver {
  /* constructor(tenant) {
    this.tenant = tenant;
    const kueOptions = { redis: config.get(tenant).redis };
    this.queue = kue.createQueue(kueOptions);
    let errorCount = 0;
    const { maxErrors } = kueOptions;
    // If we don't have this and Redis fails then our app will crash.
    this.queue.on('error', err => errorCount < maxErrors ? Logs.queue.error(err) : errorCount += 1);
    // this.queue.watchStuckJobs();
  }

  add(type, payload) {
    // Check the type first
    const types = Object.keys(QUEUE.TYPES).map((key) => QUEUE.TYPES[key]);
    if (!_.contains(types, type)) {
      throw new Error(`Invalid queue type ${type}`);
    }
    this.queue.create(type, payload)
    .save(err => err ? Logs.queue.error(err) : Logs.queue.trace(`ADDING JOB TYPE ${type}`, payload));
  }

  addEmail(payload) {
    this.add(QUEUE.TYPES.EMAIL, payload);
  }
  addApiQueue(payload) {
    this.add(QUEUE.TYPES.API, payload);
  }*/
}
