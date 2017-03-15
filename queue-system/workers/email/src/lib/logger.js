import bunyan from 'bunyan';

const DEFAULT_LOGGER = {
  name: 'APP',
  streams: [
    {
      level: 'debug',
      stream: process.stdout,
      json: false,
    },
  ],
};

export default class Logger {
  constructor(props) {
    this.logger = bunyan.createLogger(props || DEFAULT_LOGGER);
  }

  log(...args) {
    let level = '';
    let message = args[0];
    if (args.length > 1) {
      level = args[0];
      message = args[1];
    }

    switch (level) {
      case 'debug':
        return this.logger.debug(message);
      case 'info':
        return this.logger.info(message);
      case 'warn':
        return this.logger.warn(message);
      case 'error':
        return this.logger.error(message);
      default:
        return this.logger.debug(message);
    }
  }
}

export const logger = new Logger();
