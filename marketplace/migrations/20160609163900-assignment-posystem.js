'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log(`[${tenant}] Start Migration POSystem`);
    return queryInterface.addColumn('assignment_order', 'id_owner', {
      type: Sequelize.INTEGER,
      after: 'id',
      allowNull: true,
      references: { model: 'user', key: 'id' },
    })
    .then(() => {
      return queryInterface.addColumn('assignment', 'id_po_system', {
        type: Sequelize.STRING,
        after: 'id',
      });
    })
    .then(() => {
      return queryInterface.addColumn('assignment_order', 'id_po_system', {
        type: Sequelize.STRING,
        after: 'id_owner',
      });
    })
    .catch(e => {
        console.log(e);
        throw e;
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.removeColumn('assignment', 'id_po_system')
    .then(() => {
      return queryInterface.removeColumn('assignment_order', 'id_po_system');
    })
    .then(() => {
      return queryInterface.removeColumn('assignment_order', 'id_owner');
    });
  },
};
