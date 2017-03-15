'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log('REMOVE includes_product_owner from product_timeline_step_executors');
    return queryInterface.removeColumn('product_timeline_step_executors', 'includes_product_owner')
    .then(() => {
      console.log('ADD product_owner to EXECUTOR_TYPE column');
      return queryInterface.changeColumn('product_timeline_step_executors', 'executor_type', {
        type: Sequelize.ENUM('user', 'role', 'product_owner'),
        allowNull: false,
      });
    })
    .catch(e => {
      console.log(`product_timeline_step_executors ERROR: ${e}`);
      throw e;
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn('product_timeline_step_executors', 'includes_product_owner', {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true,
    })
    .then(() => {
      return queryInterface.changeColumn('product_timeline_step_executors', 'executor_type', {
        type: Sequelize.ENUM('user', 'role'),
        allowNull: false,
      });
    });
  },
};
