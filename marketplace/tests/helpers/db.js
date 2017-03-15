import Promise from 'bluebird';
import config from 'config';
import { init } from 'repositories/drivers/mysql';

export default class DBTestsHelpers {
  init() {
    return init();
  }
}
