'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn(
      'timeline',
      'type',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'assignment-order',
      }
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn('timeline', 'type');
  },
};
