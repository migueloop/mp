/**
* Queue driver/interface
* This is the public interface to the queue system. If you want to create functionality to addEmail
* something to the queue, it should be here.
*/
import { QUEUE } from 'helpers/constants';
// import queueFactory from '../../../bin/queue/queue-factory';
import Logs from 'logs';
export default function factory(tenant) {
  // const queue = queueFactory(tenant);
  // const add = (type, payload) => queue.create(type, payload)
  //   .save(err => err ? Logs.queue.error(err) : Logs.queue.trace(`ADDING JOB TYPE ${type}`, payload));

  const addEmail = payload => Promise.resolve();
  const addApiQueue = payload => Promise.resolve();
  return { addEmail, addApiQueue };
}
