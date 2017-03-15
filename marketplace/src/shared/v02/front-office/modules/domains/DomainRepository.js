import Restful from 'v02/restful-driver';

export default class DomainRepository {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetch() {
    return this.API.get({
      endpoint: 'domains',
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `domain/${id}`,
    });
  }
  fetchProducts(id) {
    return this.API.get({
      endpoint: `domain/${id}/products`,
    });
  }
  fetchBundles(id) {
    return this.API.get({
      endpoint: `domain/${id}/bundles`,
    });
  }
}
