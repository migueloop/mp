import Restful from './drivers/restful';

const API = new Restful();

export default class Billing {
  constructor(tenant) {
    this.tenant = tenant;
  }

  fetch() {
    return API.get({
      endpoint: 'billing',
    });
  }

  getOffersOfProduct(idBilling) {
    return API.get({
      endpoint: `products/${idBilling}/offers`,
    });
  }
}
