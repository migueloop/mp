'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('ALTER TABLE product MODIFY COLUMN type ENUM("MobileApp","SaaS","MaterialNDevice","Service", "Line");');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('ALTER TABLE product MODIFY COLUMN type ENUM("MobileApp","SaaS","MaterialNDevice","Service");');
  },
};
