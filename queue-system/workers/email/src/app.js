import connector, { error, success } from './lib/connector';
import config from 'config';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { logger } from './lib/logger';

function sendMail(payload, data) {
  const from = `${payload.from}`;
  const mails = config.get('mails');
  if (!mails[from]) {
    console.warn(`Warn: email ${from} is not on the configuration`)
    return;
  }
  const transporter = nodemailer.createTransport(mails[from]);
  (transporter.verify ?
    transporter.verify() :
    Promise.reject(new Error('Transport has no "verify" method.')))
    .then(() => {
      return transporter.sendMail(payload.options);
    })
    .then(msg => {
      if (payload.webhook) {
        axios({
          method: payload.webhook.method,
          url: payload.webhook.endpoint,
          data: { response: msg, params: payload.webhook.params, request: { from: payload.from, options: payload.options } },
        })
          .then(res => logger.log('debug', JSON.stringify(res.data, null, 2)))
          .catch(err => logger.log('error', err));
      }
      success(data);
    })
    .catch(err => error(err, data));
}

connector(sendMail);

['info', 'debug', 'warn', 'error'].map(lvl => logger.log(lvl, `${lvl} message`))
