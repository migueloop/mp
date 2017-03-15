'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log('PRODUCT_TIMELINE: Create table timeline');
    return queryInterface.createTable(
      'timeline',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      })
    .then(() => {
      console.log('PRODUCT_TIMELINE: Add id_timeline to product table');
      return queryInterface.addColumn('product', 'id_timeline', {
        type: Sequelize.INTEGER,
        after: 'billing_token',
        defaultValue: null,
        allowNull: true,
        references: { model: 'timeline', key: 'id' },
        onDelete: 'set null',
      });
    })
    .then(() => {
      console.log('PRODUCT_TIMELINE: Create table timeline_steps');
      return queryInterface.createTable(
        'timeline_steps',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          manual: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
            allowNull: false,
          },
          order: {
            type: Sequelize.INTEGER,
            defaultValue: -1,
            allowNull: false,
          },
          id_timeline: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'timeline', key: 'id' },
            onDelete: 'cascade',
          },
        });
    })
    .then(() => {
      console.log('PRODUCT_TIMELINE: Create table timeline_step_executors');
      return queryInterface.createTable(
        'product_timeline_step_executors',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          executor_type: {
            type: Sequelize.ENUM('user', 'role'),
            allowNull: false,
          },
          id_executor: {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          id_timeline_step: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'timeline_steps', key: 'id' },
            onDelete: 'cascade',
          },
          id_product: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'product', key: 'id' },
            onDelete: 'cascade',
          },
          includes_product_owner: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
            allowNull: false,
          },
        });
    })
    .catch(e => {
      console.log(`PRODUCT_TIMELINE ERROR: ${e}`);
      throw e;
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('product_timeline_step_executors')
    .then(() => queryInterface.dropTable('timeline_steps'))
    .then(() => queryInterface.removeColumn('product', 'id_timeline'))
    .then(() => queryInterface.dropTable('timeline'));
  },
};
