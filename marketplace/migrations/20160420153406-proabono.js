'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'product',
      'id_billing',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    )
    .then(() => queryInterface.addColumn(
      'product',
      'billing_token',
      {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: Sequelize.UUIDV4,
      }
    ));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'product',
      'id_billing'
    )
    .then(() => queryInterface.removeColumn(
      'product',
      'billing_token'
    ));
  },
};
