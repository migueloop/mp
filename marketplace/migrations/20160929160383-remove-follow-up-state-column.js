'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'state',
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn(
      'assignment_order_follow_ups',
      'state',
      {
        type: Sequelize.ENUM('in_progress', 'done'),
        defaultValue: 'in_progress',
        allowNull: false,
      }
    )
  },
};
