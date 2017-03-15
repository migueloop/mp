'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('insert into timeline (name, type) values("sav_casse_2", "follow-up")', { type: sequelize.QueryTypes.INSERT })
    .then(insertId => {
      // insert all of the timeline steps
      return sequelize.query('insert into timeline_steps (name, manual, `order`, id_timeline) values("sav_en_cours", 0, 1, ?)', { type: sequelize.QueryTypes.INSERT, replacements: [insertId] })
      .then(() => sequelize.query('insert into timeline_steps (name, manual, `order`, id_timeline) values("material_sent", 1, 2, ?)', { type: sequelize.QueryTypes.INSERT, replacements: [insertId] }))
      .then(() => sequelize.query('insert into timeline_steps (name, manual, `order`, id_timeline) values("material_received", 1, 3, ?)', { type: sequelize.QueryTypes.INSERT, replacements: [insertId] }))
      .then(() => sequelize.query('insert into timeline_steps (name, manual, `order`, id_timeline) values("repair_status", 1, 4, ?)', { type: sequelize.QueryTypes.INSERT, replacements: [insertId] }));
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('select * from timeline where name = "sav_casse_2"', { type: sequelize.QueryTypes.SELECT })
    .then(rows => {
      if (!rows.length > 0) { throw new Error('Cannot find timeline with name "sav_casse_2"'); }
      const timelineId = rows[0].id;
      return sequelize.query('delete from timeline_steps where id_timeline = ?', { replacements: [timelineId] })
      .then(() => sequelize.query('delete from timeline where id = ?', { replacements: [timelineId] }));
    });
  },
};
