'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    let savCasse1TimelineId;
    let savCasse2TimelineId;
    return queryInterface.createTable(
      'timeline_related_timelines',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        parent_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'timeline', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        child_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'timeline', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
      },
      { charset: 'utf8' }
    )
    .then(() => sequelize.query('select * from timeline where name = "sav_casse"', { type: sequelize.QueryTypes.SELECT }))
    .then(rows => {
      if (!rows.length > 0) { throw new Error('Cannot find timeline with name "sav_casse"'); }
      savCasse1TimelineId = rows[0].id;
    })
    .then(() => sequelize.query('select * from timeline where name = "sav_casse_2"', { type: sequelize.QueryTypes.SELECT }))
    .then(rows => {
      if (!rows.length > 0) { throw new Error('Cannot find timeline with name "sav_casse_2"'); }
      savCasse2TimelineId = rows[0].id;
    })
    .then(() => sequelize.query('insert into timeline_related_timelines (parent_id, child_id) values(?, ?)', { replacements: [savCasse1TimelineId, savCasse2TimelineId] }));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return queryInterface.dropTable('timeline_related_timelines');
  },
};
