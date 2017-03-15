'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(
      'update product_follow_ups set id_step="ls_request_in_progress" where id_timeline = ? and id_step = ?',
      {
        replacements: ['line_suspension', 'request_in_progress'],
        type: sequelize.QueryTypes.UPDATE,
      }
    )
    // todo: update this:
    .then(() => {
      return sequelize.query(
        'update product_follow_ups set id_step="sc_device_delivery" where id_timeline = ? and id_step = ?',
        {
          replacements: ['sav_casse', 'device_delivery'],
          type: sequelize.QueryTypes.UPDATE,
        }
      );
    });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(
      'update product_follow_ups set id_step="device_delivery" where id_timeline = ? and id_step = ?',
      {
        replacements: ['sav_casse', 'sc_device_delivery'],
        type: sequelize.QueryTypes.UPDATE,
      }
    )
    .then(() => {
      return sequelize.query(
        'update product_follow_ups set id_step="request_in_progress" where id_timeline = ? and id_step = ?',
        {
          replacements: ['line_suspension', 'ls_request_in_progress'],
          type: sequelize.QueryTypes.UPDATE,
        }
      );
    });
  },
};
