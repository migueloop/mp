/**
 * Created by johnbenavides on 1/31/16.
 */
require('babel-register');
(() => {
  const path = require('path');
  global.DIR = { ROOT: path.resolve(__dirname, '../../') };
  global.DIR.PUBLIC = path.join(global.DIR.ROOT, 'client');
})();
var Actions = require('Actions').default;

var path = require('path');
var fs = require('fs');
var mysql = require('mysql');
const CONSTANTS = require('helpers/constants');
const utils = require('helpers/utils');
var config = require('config').default;
var _ = require('lodash');

var fileExists = fs.existsSync || function (filePath) {
    try {
      fs.statSync(filePath);
    } catch (e) {
      if (err.code === "ENOENT") {
        return false;
      }
    }
    return true;
  };

var tenant = process.argv[2];

if (tenant) {
  var tenants = config.tenants;
  if (tenants.indexOf(process.argv[2]) === -1) {
    console.log('Tenant', tenant, ' don\'t exists, did you add the tenant configuration file?');
    process.exit(-1)
  }
} else {
  console.log('must provide the tenant name');
  process.exit(0)
}
var tenantConfig = config.get(tenant);
var mysql = require('mysql');
var configDB = config.getDatabase(tenant);

var connection = mysql.createConnection({
  multipleStatements: true,
  "host": configDB.host,
  "user": configDB.user,
  "password": configDB.password
});

var uploadDir = path.join(global.DIR.ROOT, tenantConfig.upload.path, tenant);
if (!fileExists(uploadDir)) {

  fs.mkdirSync(uploadDir);


  fs.mkdirSync(path.join(uploadDir, 'corners'));
  fs.mkdirSync(path.join(uploadDir, 'products'));
  fs.mkdirSync(path.join(uploadDir, 'users'));
  fs.mkdirSync(path.join(uploadDir, 'carousel'));
  fs.mkdirSync(path.join(uploadDir, 'articles'));
}


connection.connect();
var sql = fs.readFileSync(path.join(__dirname, '/Marketplace.sql')).toString();
sql = sql.replace(/%DATABASE%/g, configDB.database);
connection.query(sql, function (err, rows, fields) {
  console.log('Connect db');
  connection.end();
  if (err) {
    console.log(err);
    process.exit(0);
  }

  var users = [{
    "company": {
      "siret": "00000000000000",
      "name": "DD",
      "activity_fields": [],
      "platforms" : [],
      "usecase": ""
    },
    "sex": "F",
    "lastname": "",
    "name": "Bob",
    "display_name": "Bob",
    "email": "bob@intuiteev.io",
    "password": "bobintuiteev",
    "creation_date": new Date().getTime(),
    "auth_provider": "local",
    "last_connection": null
  },
    {
      "sex": "F",
      "lastname": "",
      "name": "Dede",
      "display_name": "Dede",
      "email": "dede@intuiteev.io",
      "password": "dedeintuiteev",
      "creation_date": new Date().getTime(),
      "auth_provider": "local",
      "last_connection": null,
      "id_role": 3
    }];

  var finish = _.after(users.length, () => {
    console.log('Tenant created, remember to add the host names in the tenant.json file');
    process.exit(0)
  });

  users.forEach(user => {
    var company = user.company;
    delete user.company;
    new Actions(tenant).Users.Register(user)
    .then(action => {
      if (company) {
        action.user.id_role = CONSTANTS.USER.ROLE.EDITOR;
        return new Actions(tenant).Users.ConvertUserToEditor(action.user, company, !!company)
      }
      return Promise.resolve()
    })
    .then(() => {
      finish();
    })
    .catch(e => {
      console.log('catch:', e.stack);
      process.exit(1);
    });
  });
});
