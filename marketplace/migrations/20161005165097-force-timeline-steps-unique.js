'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.changeColumn(
      'timeline_steps',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeIndex('timeline_steps', 'name');
  },
};
