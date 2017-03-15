'use strict';
module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.createTable(
      'assignment_order_follow_ups',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_assignment_order: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'assignment_order', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        id_po_system: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        state: {
          type: Sequelize.ENUM('in_progress', 'done'),
          defaultValue: 'in_progress',
          allowNull: false,
        },
        created_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: new Date().getTime(),
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
        },
      },
      { charset: 'utf8' }
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('assignment_order_follow_ups');
  },
};
