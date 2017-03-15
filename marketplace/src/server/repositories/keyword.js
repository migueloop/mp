
import { clean } from 'helpers/utils';
import Repository from './drivers/mysql';
import { _ } from 'underscore';

export default class KeywordRepository {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'keyword');
  }

  _getWhere(where, params) {
    if (where.length > 0) {
      where = ` where ${where}`;
    }
    return this._repo.query(`select id, name from keyword ${where}`, params);
  }

  getAll() {
    return this.self._getWhere();
  }
}
