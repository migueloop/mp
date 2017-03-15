'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('user_profile')
    .then(() => queryInterface.dropTable('user'));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return Promise.resolve();
  },
};
