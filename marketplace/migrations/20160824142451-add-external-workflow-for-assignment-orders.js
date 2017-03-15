'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.createTable(
      'external_workflows',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_assignment_order: {
          type: Sequelize.INTEGER,
          references: { model: 'assignment_order', key: 'id' },
          onDelete: 'cascade',
          allowNull: false,
        },
        id_workflow: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        id_external: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('external_workflows');
  },
};
