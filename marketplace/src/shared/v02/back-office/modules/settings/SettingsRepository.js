import Restful from 'v02/restful-driver';

export default class SettingsRepository {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetchAll() {
    return this.API.get({
      endpoint: 'settings',
    });
  }
  fetchLatest(amount) {
    return this.API.get({
      endpoint: `settings/latest/${amount}`,
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `settings/${id}`,
    });
  }
  fetchOffers(id) {
    return this.API.get({
      endpoint: `settings/${id}/offers`,
    });
  }
  update(product) {
    const id = product.id;
    const productCopy = { ...product };
    delete productCopy.id;
    return this.API.patch({ endpoint: `settings/${id}`, params: productCopy });
  }
}
