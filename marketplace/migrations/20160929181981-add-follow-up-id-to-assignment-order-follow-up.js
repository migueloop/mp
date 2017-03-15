'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn(
      'assignment_order_follow_ups',
      'id_follow_up_task',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'id_follow_up_task',
    );
  },
};
