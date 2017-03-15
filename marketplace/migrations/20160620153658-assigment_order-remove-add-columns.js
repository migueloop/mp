'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log('REMOVE name, logo, alias, description, editor_title, id_owner columns from ASSIGNMENT_ORDER');
    return Promise.all([
      queryInterface.removeColumn('assignment_order', 'name'),
      queryInterface.removeColumn('assignment_order', 'logo'),
      queryInterface.removeColumn('assignment_order', 'alias'),
      queryInterface.removeColumn('assignment_order', 'description'),
      queryInterface.removeColumn('assignment_order', 'editor_title'),
      queryInterface.removeColumn('assignment_order', 'id_owner')])
    .then(() => {
      console.log('ADD timeline_type column to ASSIGNMENT_ORDER');
      return queryInterface.addColumn('assignment_order', 'timeline_type', {
        type: Sequelize.STRING,
        after: 'id_state',
      });
    })
    .then(() => {
      console.log('ADD completed column to ASSIGNMENT_ORDER');
      return queryInterface.addColumn('assignment_order', 'completed', {
        type: Sequelize.BOOLEAN,
        after: 'timeline_type',
        defaultValue: 0,
      });
    })
    .catch(e => {
      console.log('ERROR REMOVING COLUMNS TO assignment_order, ADDING timeline_type and completed: ', e);
      throw e;
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.addColumn('assignment_order', 'name', {
      type: Sequelize.STRING,
      after: 'id',
    })
    .then(() => {
      return queryInterface.addColumn('assignment', 'logo', {
        type: Sequelize.STRING,
        after: 'name',
      });
    })
    .then(() => {
      return queryInterface.addColumn('assignment_order', 'alias', {
        type: Sequelize.STRING,
        after: 'logo',
      });
    })
    .then(() => {
      return queryInterface.addColumn('assignment_order', 'description', {
        type: Sequelize.STRING,
        after: 'alias',
      });
    })
    .then(() => {
      return queryInterface.addColumn('assignment_order', 'editor_title', {
        type: Sequelize.STRING,
        after: 'description',
      });
    })
    .then(() => {
      return queryInterface.addColumn('assignment_order', 'id_owner', {
        type: Sequelize.INTEGER,
        after: 'editor_title',
      });
    })
    .then(() => {
      return queryInterface.removeColumn('assignment_order', 'timeline_type');
    })
    .then(() => {
      return queryInterface.removeColumn('assignment_order', 'completed');
    })
    .catch(e => {
      console.log('DOWN ERROR: ', e);
      throw e;
    });
  },
};
