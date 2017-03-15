'use strict';
const winston = require('winston');
const logDir = 'logs';


export default class Log {

  constructor() {
    this.internalLogger = this.buildInternalLogger();
  }

  static get logger() {
    return new Log();
  }

  buildInternalLogger() {
    const config = {
      levels: {
        error: 0,
        debug: 1,
        warn: 2,
        access: 3,
        info: 4,
        verbose: 5,
        silly: 6,
      },
      colors: {
        error: 'red',
        debug: 'blue',
        warn: 'yellow',
        access: 'grey',
        info: 'green',
        verbose: 'cyan',
        silly: 'magenta',
      },
    };
    const tsFormat = () => this.getFormattedCurrentDate();
    const logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({
          timestamp: tsFormat,
          colorize: true,
          level: 'silly',
        }),
        new (winston.transports.File)({
          filename: `${logDir}/mpLog.log`,
          timestamp: tsFormat,
          level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
        }),
      ],
      levels: config.levels,
      colors: config.colors,
    });
    return logger;
  }

  warn(level, message) {
    if (!this.clientLogging(level, message)) {
      this.internalLogger.warn(level, message);
    }
  }

  error(level, message) {
    if (!this.clientLogging(level, message)) {
      this.internalLogger.error(level, message);
    }
  }

  info(level, message) {
    if (!this.clientLogging(level, message)) {
      this.internalLogger.info(level, message);
    }
  }

  access(level, message) {
    if (!this.clientLogging(level, message)) {
      this.internalLogger.access(level, message);
    }
  }

  debug(level, message) {
    if (!this.clientLogging(level, message)) {
      this.internalLogger.debug(level, message);
    }
  }

  clientLogging(level, message) {
    if (!process.stdout) {
      console.log(`${this.getFormattedCurrentDate()} - ${level} ${message}`);
      return true;
    }

    return false;
  }

  getFormattedCurrentDate() {
    const currentdate = new Date();
    // This outputs something like '[10/1/2017@12:3:27]'
    return `[${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}@${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}]`;
  }
}
