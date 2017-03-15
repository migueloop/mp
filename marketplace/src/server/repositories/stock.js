import Repository from './drivers/mysql';

export default class StockRepository {

  constructor(tenant) {
    this._repo = new Repository(tenant, 'timeline');
    this.tenant = tenant;
  }

  getAll() {
    return this._repo.query('select * from stock');
  }

  create(stock) {
    const productId = parseInt(stock.productId, 10);
    const count = parseInt(stock.count, 10);
    const createdAt = parseInt(stock.createdAt, 10);
    return this._repo.query('insert into stock (id_product, count, created_at) values (?, ?, ?)', [productId, count, createdAt]);
  }

}
