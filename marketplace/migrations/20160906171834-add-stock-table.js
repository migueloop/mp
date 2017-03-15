'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    const now = new Date().getTime() / 1000;
    return queryInterface.createTable(
      'stock',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_product: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'product', key: 'id' },
          onDelete: 'cascade',
        },
        count: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: now,
          allowNull: false,
        },
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('stock');
  },
};
