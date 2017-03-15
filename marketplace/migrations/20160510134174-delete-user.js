'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'user',
      'deleted_at',
      {
        type: Sequelize.DATE,
        allowNull: true,
      }
    );
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('user', 'deleted_at');
  },
};
