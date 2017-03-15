'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn(
      'assignment_order_follow_ups',
      'options',
      {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'options',
    );
  },
};
