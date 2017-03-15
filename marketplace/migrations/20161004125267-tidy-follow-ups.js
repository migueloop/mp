'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn(
      'assignment_order_follow_ups',
      'id_current_step',
    )
    .then(() => queryInterface.renameColumn('assignment_order_follow_ups', 'id_po_system', 'id_workflow_instance'));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.renameColumn('assignment_order_follow_ups', 'id_workflow_instance', 'id_po_system')
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
};
