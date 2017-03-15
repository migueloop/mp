'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log("Removing products fk_product_editor");
    return sequelize.query('ALTER TABLE `product` DROP FOREIGN KEY `fk_product_editor`;');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {

  },
};
