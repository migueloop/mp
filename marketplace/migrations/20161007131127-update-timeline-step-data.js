'use strict';
import timelines from 'helpers/constants/follow-up-timelines';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    const timelineNames = timelines.map(timeline => `'${timeline.id}'`).join(', ');
    console.log('timelineNames', timelineNames);
    return sequelize.query(
      `select * from timeline where \`name\` in(${timelineNames})`,
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
      const timelineIds = rows.map(row => row.id);
      return sequelize.query(
        'delete from timeline where id in(?)',
        {
          replacements: [timelineIds],
          type: sequelize.QueryTypes.DELETE,
        }
      )
      .then(() => {
        return sequelize.query(
          'delete from timeline_steps where id_timeline in(?)',
          {
            replacements: [timelineIds],
            type: sequelize.QueryTypes.DELETE,
          }
        );
      });
    })
    .then(() => {
      const timelineQueries = timelines.map(timeline => {
        const name = timeline.id;
        const type = 'follow-up';
        return sequelize.query(
          'insert into timeline (name, type) values (?,?)',
          {
            replacements: [name, type],
            type: sequelize.QueryTypes.INSERT,
          }
        );
      });
      return Promise.all(timelineQueries)
      .then(insertIds => {
        const stepQueries = insertIds.map((id, index) => {
          const steps = timelines[index].steps;
          const timelineStepQueries = steps.map((step, stepIndex) => {
            const name = step.id;
            const manual = step.manual;
            const order = stepIndex + 1;
            const timelineId = id;

            return sequelize.query(
              'insert into timeline_steps (`name`, `manual`, `order`, `id_timeline`) values (?, ?, ?, ?)',
              { replacements: [name, manual, order, timelineId], type: sequelize.QueryTypes.INSERT }
            );
          });

          return Promise.all(timelineStepQueries);
        });
        console.log('stepQueries', stepQueries);
        return Promise.all(stepQueries);
      });
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    // There's no point doing anything here as the previous mirgration does the same steps
    return Promise.resolve();
  },
};
