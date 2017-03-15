'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn(
      'assignment_order_follow_ups',
      'id_timeline',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
    .then(() => {
      return queryInterface.addColumn(
        'assignment_order_follow_ups',
        'id_current_step',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        }
      );
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'id_current_step'
    )
    .then(() => queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'id_timeline'
    ));
  },
};
