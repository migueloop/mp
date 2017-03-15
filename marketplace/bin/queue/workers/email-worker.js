import queueFactory from '../queue-factory';
import { QUEUE } from 'helpers/constants';
import Logs from 'logs';
import nodemailer from 'nodemailer';
const queue = queueFactory();
queue.process(QUEUE.TYPES.EMAIL, (job, done) => {
  const transporter = nodemailer.createTransport(job.data.transport);
  if (!transporter.verify) {
    return done(new Error('Transport has no "verify" method. Please check it is set up correctly.'));
  }
  transporter.verify((e, success) => {
    if (e) {
      console.log('***** TRANSPORTER ERROR *****', e);
      Logs.email.error(e);
      return done(e);
    }
    console.log('TRANSPORTER READY');
    Logs.queue.trace(`PROCESSING ${job.type} JOB WITH ID: ${job.id}`);
    console.log('job.data.options', JSON.stringify(job.data.options, null, 2));
    transporter.sendMail(job.data.options)
    .then(info => {
      console.log('EMAIL SENT OK');
      console.log('***** INFO *****', info);
      done();
    })
    .catch(err => {
      console.log('***** ERROR *****');
      console.log(err.message);
      console.log(err.stack);
      Logs.email.error(err);
      done(err);
    });
  });
});
