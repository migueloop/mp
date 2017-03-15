import Restful from './drivers/restful';

const API = new Restful();

export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get Languages() {
    return API.get({
      endpoint: 'settings/languages',
    });
  }

  getSEO() {
    return API.get({
      endpoint: 'settings/seo',
    });
  }

  setSEO(params) {
    return API.put({
      endpoint: 'settings/seo',
      params,
    });
  }
}
