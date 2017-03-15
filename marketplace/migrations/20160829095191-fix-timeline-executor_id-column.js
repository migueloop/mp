'use strict';

// For some reason there was a bug when we created this table originally
// The migration here migrations/20160712125324-product_timeline.js sets the column id_executor as allowNull: true
// However, for some reason the column got set as false. This migration will fix the issue.

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.changeColumn('product_timeline_step_executors', 'id_executor',
      {
        allowNull: true,
        type: Sequelize.INTEGER,
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.changeColumn('product_timeline_step_executors', 'id_executor',
      {
        allowNull: false,
        type: Sequelize.INTEGER,
      });
  },
};
