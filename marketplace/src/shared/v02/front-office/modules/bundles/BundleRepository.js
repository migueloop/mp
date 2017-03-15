import Restful from 'v02/restful-driver';

export default class Products {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetchAll() {
    return this.API.get({
      endpoint: 'bundles',
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `bundle/${id}`,
    });
  }
}
