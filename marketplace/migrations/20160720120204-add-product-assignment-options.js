'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn('assignment_order', 'options', { type: Sequelize.TEXT, after: 'completed', defaultValue: null })
    .then(() => {
      return queryInterface.addColumn('product', 'id_assignment_option_form', { type: Sequelize.INTEGER, after: 'id_timeline', defaultValue: null });
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn('product', 'id_assignment_option_form')
    .then(() => queryInterface.removeColumn('assignment_order', 'options'));
  },
};
