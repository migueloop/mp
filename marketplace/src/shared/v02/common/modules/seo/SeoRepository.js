import Restful from 'v02/restful-driver';

export default class Misc {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetch() {
    return this.API.get({ endpoint: 'seo' });
  }
}
