'use strict';
// TODO: fill this out

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    let timelineId;
    return sequelize.query(
      'insert into timeline (`name`, `type`) values (?, ?)',
      { replacements: ['portability', 'follow-up'], type: sequelize.QueryTypes.INSERT }
    )
    .then(insertId => {
      console.log('insertId', insertId);
      timelineId = insertId;
      return sequelize.query(
        'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
        { replacements: ['porta_qualif', 0, 1, timelineId], type: sequelize.QueryTypes.INSERT }
      );
    })
    .then(() => {
      return sequelize.query(
        'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
        { replacements: ['porta_ready', 1, 2, timelineId], type: sequelize.QueryTypes.INSERT }
      );
    })
    .then(() => {
      return sequelize.query(
        'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
        { replacements: ['porta_operator', 1, 3, timelineId], type: sequelize.QueryTypes.INSERT }
      );
    })
    .then(() => {
      return sequelize.query(
        'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
        { replacements: ['porta_operator_ok', 1, 4, timelineId], type: sequelize.QueryTypes.INSERT }
      );
    })
    .then(() => {
      return sequelize.query(
        'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
        { replacements: ['porta_closed', 1, 5, timelineId], type: sequelize.QueryTypes.INSERT }
      );
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(
      'select * from timeline where name = "portability"',
      {
        type: sequelize.QueryTypes.SELECT,
      }
    )
    .then(rows => {
      console.log('timeline rows', rows);
      if (rows.length === 0) {
        console.log('No timelines to remove, skipping.');
        return Promise.resolve();
      }
      const timelineId = rows[0].id;
      return sequelize.query(
        'delete from timeline where id = ?',
        {
          replacements: [timelineId],
          type: sequelize.QueryTypes.DELETE,
        }
      )
      .then(() => {
        return sequelize.query(
          'delete from timeline_steps where id_timeline = ?',
          {
            replacements: [timelineId],
            type: sequelize.QueryTypes.DELETE,
          }
        );
      });
    });
  },
};
