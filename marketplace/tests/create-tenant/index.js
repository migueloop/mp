import { expect } from 'chai';
import config from 'config';

const Config = require(`${global.ROOT}/bin/create-tenant/lib/create-config`);
const { AddTenant } = Config;
const createConfig = Config.default;

describe.only('Create new Tenant', () => {
  it.only('create new tenant config file', done => {
    const tenant = 'ignore_test';
    const conf = {
      database: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'marketplace_test',
      },
    };
    createConfig(tenant, conf)
    .then(() => {
      expect(config.get(tenant).database.database).to.equal(conf.database.database);
      done();
    })
    .catch(done);
  });

  it.only('add tenant to the tenant list', done => {
    const tenant = 'ignore_test';
    const hosts = ['local.test', 'test.local'];
    AddTenant(tenant, hosts)
    .then(done).catch(done);
  });
});
