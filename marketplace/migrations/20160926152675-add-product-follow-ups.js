'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.createTable(
      'product_follow_ups',
      {
        id_product: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'product', key: 'id' },
          onDelete: 'cascade',
        },
        id_follow_up_task: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        id_timeline: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        id_step: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        include_product_owner: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: 0,
        },
        role_ids: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        user_ids: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('product_follow_ups');
  },
};
