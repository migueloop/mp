import kue from 'kue';
import config from 'config';
import Logs from 'logs';
// Queue factory function
export default (tenant = 'default') => {
  const kueOptions = { redis: config.get(tenant).redis };
  let errorCount = 0;
  const { maxErrors } = kueOptions;
  const queue = kue.createQueue(kueOptions);
  // If we don't have this and Redis fails then our app will crash.
  queue.on('error', err => errorCount < maxErrors ? Logs.queue.error(err) : errorCount += 1);
  // queue.watchStuckJobs();
  return queue;
};
