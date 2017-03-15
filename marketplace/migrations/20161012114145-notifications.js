'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.createTable(
      'notifications',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        id_subject: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        subject_reference: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        id_user: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true,
          references: { model: 'user', key: 'id' },
          onDelete: 'set null',
          onUpdate: 'cascade',
        },
        viewed_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
        },
        clicked_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
        },
        hidden_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
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
    return queryInterface.dropTable('notifications');
  },
};
