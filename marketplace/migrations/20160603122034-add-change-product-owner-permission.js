'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log(`[${tenant}] Start Migration feature change owner`);
    return sequelize.query('insert into permission_role (id_permission, id_role) values ("CHANGE_PRODUCT_OWNER", 3)');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('DELETE from permission_role WHERE id_permission = "CHANGE_PRODUCT_OWNER" AND id_role = 3');
  },
};
