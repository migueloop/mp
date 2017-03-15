'use strict';
import config from 'config';
import mysql from 'mysql';
import fs from 'fs';

module.exports = {
  up: function up(queryInterface, Sequelize, p, tenant) {
    return new Promise((resolve, reject) => {
      console.log(tenant, config.get(tenant).database);
      const connection = mysql.createConnection({ ...config.get(tenant).database, multipleStatements: true });
      connection.connect();
      console.log('test');
      try {
        const query = fs.readFileSync(`${__dirname}/patch/bundle-up.sql`).toString();
        connection.query(query, err => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          resolve();
        });
      } catch (e) {
        console.log(e);
      }
      resolve();
    });
  },
  down: function down(queryInterface, Sequelize, p, tenant) {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({ ...config.get(tenant).database, multipleStatements: true });
      connection.connect();
      console.log('test');
      try {
        const query = fs.readFileSync(`${__dirname}/patch/bundle-down.sql`).toString();
        connection.query(query, err => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          resolve();
        });
      } catch (e) {
        console.log(e);
      }
      resolve();
    });
  },
};
