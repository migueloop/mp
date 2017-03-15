'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.createTable(
      'log_comments',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        body: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        id_user: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true,
          references: { model: 'user', key: 'id' },
          onDelete: 'set null',
          onUpdate: 'cascade',
        },
        id_workflow: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.BIGINT(32),
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
        },
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('log_comments');
  },
};
