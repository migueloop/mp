import { ACTION } from 'flux/actions';
import Repository from 'repositories/stock';

export default class Stock {
  constructor(tenant) {
    this.tenant = tenant;
    this.repo = new Repository(this.tenant);
  }

  getAll() {
    return this.repo.getAll()
    .then(payload => Promise.resolve({ type: ACTION.STOCK.SET_ALL, payload }));
  }

  create(stock) {
    return this.repo.create(stock)
    .then(payload => Promise.resolve({ type: ACTION.STOCK.ADD, payload }));
  }

}
