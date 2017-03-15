/**
 * Created by cjgm on 7/14/16.
 */
import Restful from './drivers/restful';
const API = new Restful();

export default class Stock {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getAll() {
    return API.get({ endpoint: 'stock' });
  }

  create(stock) {
    return API.post({ endpoint: 'stock', params: { stock } });
  }
}
