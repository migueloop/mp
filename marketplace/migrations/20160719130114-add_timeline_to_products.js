'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log('ADD_TIMELINE_TO_PRODUCT: Select all timelines availables');
    return sequelize.query('SELECT * FROM timeline',
      { type: sequelize.QueryTypes.SELECT }
    )
    .then(timelines => {
      console.log('ADD_TIMELINE_TO_PRODUCT: Update product table, column id_timeline with first timeline that we have found');
      const timelineId = +timelines[0].id;
      if (timelines && timelines.length > 0) {
        return sequelize.query('UPDATE product SET id_timeline = ?', { replacements: [timelineId] });
      }
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('UPDATE product SET id_timeline = null');
  },
};
