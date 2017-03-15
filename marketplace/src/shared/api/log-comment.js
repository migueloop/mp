import Restful from './drivers/restful';
const API = new Restful();

export default class LogComment {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getAll() {
    return API.get({ endpoint: 'log-comments' });
  }

  create(params) {
    return API.post({ endpoint: 'log-comments', params });
  }
}
