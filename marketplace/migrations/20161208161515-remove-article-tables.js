'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('article_resource')
    .then(() => queryInterface.dropTable('article_corner'))
    .then(() => queryInterface.dropTable('article_keyword'))
    .then(() => queryInterface.dropTable('article_link'))
    .then(() => queryInterface.dropTable('article'));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {

  },
};
