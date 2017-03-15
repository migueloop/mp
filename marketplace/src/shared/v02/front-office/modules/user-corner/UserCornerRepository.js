import Restful from 'v02/restful-driver';

export default class Domains {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetch() {
    return this.API.get({
      endpoint: 'user-corners',
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `user-corner/${id}`,
    });
  }
  fetchProducts(id) {
    return this.API.get({
      endpoint: `user-corner/${id}/products`,
    });
  }
  fetchBundles(id) {
    return this.API.get({
      endpoint: `user-corner/${id}/bundles`,
    });
  }
}
