'use strict';


// return sequelize.query(
//   'insert into timeline (`name`, `type`) values (?, ?)',
//   { replacements: ['portability', 'follow-up'], type: sequelize.QueryTypes.INSERT }
// )

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    const updateQuery = 'update timeline_steps set `order` = ? where `name` = ? and `id_timeline` = ?';
    let timelineId;
    return sequelize.query('select * from timeline where name = "sav_casse"', { type: sequelize.QueryTypes.SELECT })
    .then(rows => {
      if (!rows.length > 0) { throw new Error('Cannot find timeline with name "sav_casse"'); }
      timelineId = rows[0].id;
    })
    .then(() => sequelize.query(updateQuery, { replacements: [1, 'device_diagnostic', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [2, 'device_repair', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [4, 'device_ready', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [5, 'sc_device_delivery', timelineId] }))
    .then(() => sequelize.query('insert into timeline_steps (name, manual, `order`, id_timeline) values (?, ?, ?, ?)', { replacements: ['gfn_validation', 1, 3, timelineId] }));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    const updateQuery = 'update timeline_steps set `order` = ? where `name` = ? and `id_timeline` = ?';
    let timelineId;
    return sequelize.query('select * from timeline where name = "sav_casse"', { type: sequelize.QueryTypes.SELECT })
    .then(rows => {
      if (!rows.length > 0) { throw new Error('Cannot find timeline with name "sav_casse"'); }
      timelineId = rows[0].id;
    })
    .then(() => sequelize.query(updateQuery, { replacements: [1, 'device_diagnostic', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [2, 'device_repair', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [3, 'device_ready', timelineId] }))
    .then(() => sequelize.query(updateQuery, { replacements: [4, 'sc_device_delivery', timelineId] }))
    .then(() => sequelize.query('delete from timeline_steps where name = ? and id_timeline = ?', { replacements: ['gfn_validation', timelineId] }));
  },
};
