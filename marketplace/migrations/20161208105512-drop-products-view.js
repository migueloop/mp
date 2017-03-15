'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('drop view if exists products');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return Promise.resolve();
  },
};
