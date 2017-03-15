'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn('assignment_order', 'id_gdp', {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true,
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn('assignment_order', 'id_gdp');
  },
};
