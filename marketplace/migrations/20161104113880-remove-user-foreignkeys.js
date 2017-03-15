'use strict';
module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(`SELECT 
              concat("alter table ",TABLE_NAME," drop foreign key  ", CONSTRAINT_NAME) as query
          FROM
            INFORMATION_SCHEMA.KEY_COLUMN_USAGE
          WHERE
            REFERENCED_TABLE_SCHEMA = '${sequelize.config.database}' AND (
            (REFERENCED_COLUMN_NAME = 'id' AND
            REFERENCED_TABLE_NAME = 'user') OR
          (REFERENCED_COLUMN_NAME = 'id_user' AND
            REFERENCED_TABLE_NAME = 'user_profile')) ORDER BY REFERENCED_TABLE_NAME`, {
        type: sequelize.QueryTypes.SELECT,
      })
      .then(results => {
        return Promise.all(results.map(r => {
          console.log(r.query);
          return sequelize.query(r.query);
        }));
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return Promise.resolve();
  },
};