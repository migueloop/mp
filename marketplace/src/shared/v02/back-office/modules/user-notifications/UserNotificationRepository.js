import Restful from 'v02/restful-driver';

export default class Products {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetchAll() {
    return this.API.get({
      endpoint: 'products',
    });
  }
  fetchLatest(amount) {
    return this.API.get({
      endpoint: `products/latest/${amount}`,
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `products/${id}`,
    });
  }
  fetchOffers(id) {
    return this.API.get({
      endpoint: `products/${id}/offers`,
    });
  }
  update(product) {
    const id = product.id;
    const productCopy = { ...product };
    delete productCopy.id;
    return this.API.patch({ endpoint: `products/${id}`, params: productCopy });
  }
}
