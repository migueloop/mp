'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    let inserts = ['line', 'device'];
    let aTimelines = [];

    console.log('POPULATE_TIMELINE_STEPS: Insert timelines LINE and DEVICE');
    /* return sequelize.query('insert into timeline (name) values (?)',
      {
        replacements: inserts,
        type: sequelize.QueryTypes.INSERT,
      } */
    return Promise.all(inserts.map(tl => (sequelize.query('insert into timeline(name) values (?)',
      {
        replacements: [tl],
        type: sequelize.QueryTypes.INSERT,
      })
    )))
    .then((res) => {
      console.log('POPULATE_TIMELINE_STEPS: Insert steps of LINE in timeline_steps ');
      aTimelines = res;
      inserts = [
        {
          name: 'tl_step_bdc_sent',
          manual: 0,
          order: 1,
        },
        {
          name: 'tl_step_released_sim_to_user',
          manual: 1,
          order: 2,
        },
        {
          name: 'tl_step_activated_line',
          manual: 1,
          order: 3,
        },
        {
          name: 'tl_step_fleet_updated_line_1',
          manual: 1,
          order: 4,
        },
      ];

      /* return sequelize.query('insert into timeline_steps (name, manual, order, id_timeline) values (?,?,?,(select id from timeline where name = "line" limit 1))',
        {
          replacements: inserts,
          type: sequelize.QueryTypes.INSERT,
        }); */

      return Promise.all(inserts.map(ts => (sequelize.query('insert into timeline_steps (name, manual, \`order\`, id_timeline) values (?,?,?,?)',
        {
          replacements: [
            ts.name,
            ts.manual,
            ts.order,
            aTimelines[0],
          ],
          type: sequelize.QueryTypes.INSERT,
        })
      )));
    })
    .then(() => {
      console.log('POPULATE_TIMELINE_STEPS: Insert steps of DEVICE in timeline_steps');
      inserts = [
        {
          name: 'tl_step_bdc_envoye',
          manual: 0,
          order: 1,
        },
        {
          name: 'tl_step_fleet_updated_device_1',
          manual: 0,
          order: 2,
        },
        {
          name: 'tl_step_order_received',
          manual: 1,
          order: 3,
        },
        {
          name: 'tl_step_fleet_updated_device_2',
          manual: 1,
          order: 4,
        },
        {
          name: 'tl_step_intregation_request',
          manual: 1,
          order: 5,
        },
        {
          name: 'tl_step_integration_achieved',
          manual: 1,
          order: 6,
        },
        {
          name: 'tl_step_released_terminal_to_user',
          manual: 1,
          order: 7,
        },
        {
          name: 'tl_step_user_confirms_reception',
          manual: 1,
          order: 8,
        },
      ];

      return Promise.all(inserts.map(ts => (sequelize.query('insert into timeline_steps (name, manual, \`order\`, id_timeline) values (?,?,?,?)',
        {
          replacements: [
            ts.name,
            ts.manual,
            ts.order,
            aTimelines[1],
          ],
          type: sequelize.QueryTypes.INSERT,
        })
      )));
    })
    .catch(e => console.log('---------> ERROR POPULATE_TIMELINE_STEPS: ', e));
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('DELETE from timeline_steps where id_timeline in (select id from user where name = "device")',
      { type: sequelize.QueryTypes.DELETE })
    .then(() => sequelize.query('DELETE from timeline_steps where id_timeline in (select id from user where name = "line")',
        { type: sequelize.QueryTypes.DELETE }))
    .then(() => sequelize.query('DELETE from timeline where name="line"', { type: sequelize.QueryTypes.DELETE }))
    .then(() => sequelize.query('DELETE from timeline where name="device"', { type: sequelize.QueryTypes.DELETE }));
  },
};
