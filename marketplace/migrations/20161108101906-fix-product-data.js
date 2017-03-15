'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('update product set created_by=34 where created_by is null');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return Promise.resolve();
  },
};
