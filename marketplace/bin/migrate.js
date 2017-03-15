const Sequelize = require('sequelize');
const Umzug = require('umzug');
require('babel-register');
const Config = require('config').default;
const tenants = Config.tenants.filter(tenant => tenant !== 'default');
const fs = require('fs');
const moment = require('moment');

const fileName = `${moment().format('YYYYMMDDHHmmSS')}-${process.argv[3] || `migration-${Math.random().toString()}`}.js`;

const tenantMigrations = tenants.map(tenant => {
  console.log("Tenant ", tenant, "...");

  //If no config, continue
  if(!Config.get(tenant) || !Config.get(tenant).database){
    if(!Config.get(tenant)){
      console.log(`No config for tenant ${tenant}`);
    }
    else{
      console.log(`No database for tenant ${tenant}.`);
    }
    return;
  }
  const config = Config.get(tenant).database;

  console.log("Config: ", JSON.stringify(config, null, 3));

  const sequelize = new Sequelize(config.database, config.user, config.password, {
    dialect: 'mysql',
    host: config.host,
    logging: null,
    port: config.port || 3306,
  });

  return {
    tenant,
    migration: new Umzug({
      storage: 'sequelize',
      storageOptions: {
        sequelize,
      },
      migrations: {
        params: [sequelize.getQueryInterface(), Sequelize, sequelize, tenant],
      },
    }),
  };
});

switch (process.argv[2]) {
  case 'create':
    console.log("Creating migration...");
    fs.writeFile(`migrations/${fileName}`,
`'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {

  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {

  },
};
`,
      (err) => {
        if (err) {
          console.log(`Error creating migration: `, err);
          throw err;
        }
        console.log(`Migration created at ${fileName}`);
        process.exit(0);
      });
    break;
  case 'pending':
  console.log("tenantMigrations: ", tenantMigrations);
    Promise.all(
      tenantMigrations.filter(migration => (
        !process.argv[3] || !migration || migration.tenant === process.argv[3]
      )).map((data) => {
        if(!data){
          return;
        }
        const migration = data.migration;
        const tenant = data.tenant;

        //console.log(`Running migrations ${JSON.stringify(data, null, 3)} on tenant ${tenant}...`);
        return migration.pending().then(migrations =>
          {
            console.log(`Running migrations ${JSON.stringify(migrations, null, 3)} on tenant ${tenant}...`);
            return Promise.resolve({ tenant, migrations });
        });
      })
    ).then(response => {
      response.forEach(res => console.log('==============>', res.tenant.toUpperCase(), '\n', res.migrations.map((m,i) => (i + '.-' + m.file)), '\n'));
      process.exit(0);
    });
    break;
  case 'rollback':
    Promise.all(
      tenantMigrations.filter(migration => (!process.argv[3] || migration.tenant === process.argv[3]))
      .map(data => {
        if(!data){
          return;
        }
        const migration = data.migration;
        const tenant = data.tenant;
        return migration.down().then(migrations => Promise.resolve({ tenant, migrations }));
      })
    )
    .then(response => {
      response.forEach(res => console.log(res.tenant, res.migrations.length));
      process.exit(0);
    })
    .catch(e => console.log(e));
    break;
  default:
    Promise.all(
      tenantMigrations.filter(migration => (!process.argv[2] || !migration || migration.tenant === process.argv[2]))
      .map(data => {
        if(!data){
          return;
        }
        const migration = data.migration;
        const tenant = data.tenant;
        return migration.up().then(migrations => {
          return Promise.resolve({ tenant, migrations });
        });
      })
    )
    .then(response => {
      response.forEach(res => console.log(res.tenant, res.migrations.length));
      process.exit(0);
    })
    .catch(err => {
      console.log('error', err.stack);
      process.exit(-1);
    });
}