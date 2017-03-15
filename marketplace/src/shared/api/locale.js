import Restful from './drivers/restful';

const API = new Restful();

export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }


  getMessages(language) {
    return API.get({
      endpoint: `locale/${language}`,
    });
  }
}
