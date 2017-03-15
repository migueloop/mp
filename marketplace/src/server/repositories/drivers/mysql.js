import config from 'config';
import mysql from 'mysql';
import Logs from 'logs';

const pools = {};

// TODO: Init must receive configuration parameters (tenants and every tenant configuration)
export function init() {
  for (let i = 0, j = config.tenants.length; i < j; i++) {
    // if (config.tenants[i] === 'default') { continue; }
    // quck fix: https://github.com/mysqljs/mysql/issues/883
    // There should be no db logi in Marketplace. Need to go via API.
    pools[config.tenants[i]] = mysql.createPool({ ...config.getDatabase(config.tenants[i]), acquireTimeout: 100000 });
  }
  return pools;
}
export default class Mysql {
  constructor(tenant, table) {
    this.tenant = tenant;
    this.table = table;
  }

  insert(obj, ignoreErrors) {
    return this.query(`INSERT INTO ${this.table} SET ?`, obj, ignoreErrors);
  }

  update(obj, ignoreErrors) {
    return this.query(`update ${this.table} SET ? where ?`, [obj.values, obj.filters], ignoreErrors);
  }

  delete(filters, ignoreErrors) {
    return this.query(`delete from ${this.table}  where ?`, filters, ignoreErrors);
  }

  find(filters, ignoreErrors) {
    return this.query(`select * from ${this.table} where ?`, filters, ignoreErrors);
  }

  query(query, params, ignoreErr) {
    return new Promise((resolve, reject) => {
      if (!pools[this.tenant]) {
        pools[this.tenant] = mysql.createPool(config.getDatabase(this.tenant));
      }
      pools[this.tenant].getConnection((error, connection) => {
        // Use the connection
        if (error) { return reject(error); }
        connection.query(query, params, (err, rows) => {
          connection.release();
          if (err) {
            console.error('QUERY ERROR', err);
            if (!ignoreErr || ignoreErr.indexOf(err.code) === -1) {
              Logs.logger.error(`ERROR in query ${query} ${JSON.stringify(params)} ${err.toString()}`, query, params, err);
            }
            return reject(err);
          }
          return resolve(rows);
        });
      });
    });
  }

}
