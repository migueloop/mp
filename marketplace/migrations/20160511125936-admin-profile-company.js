import mkdirp from 'mkdirp';
import path from 'path';
const ROOT = path.resolve(`${__dirname}/..`);

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(`
      ALTER TABLE bundle
        MODIFY COLUMN alias varchar(110) NULL`, {})
    .then(() =>
      sequelize.query(`
        insert into company (name, siret, created_by) values ("admin", "0998877665451234576345",
        (select id_user from user_profile limit 1))
        `, { type: sequelize.QueryTypes.INSERT })
    )
    .then(result =>
      sequelize.query(`insert into user_profile
        (id_user, title, alias, description, validated_by, activated, id_company)
          (select id as id_user,
            COALESCE(name, 'title') as title,
            COALESCE(concat(name,'-',id),concat('title-',id)) as alias,
            'Lorem Ipsum' as description,
            id as validated_by,
            1 as activated,
            ${result} as id_company
          from user where id_role = 3)`,
        { type: sequelize.QueryTypes.INSERT })
    )
    .then(() =>
      new Promise((resolve, reject) => {
        mkdirp(`${ROOT}/public/uploads/${tenant}/bundles`, (err) => {
          if (err) reject(err);
          resolve();
        });
      })
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query(`
      DELETE from user_profile where id_user in (select id from user where id_role = 3)
      `,
      { type: sequelize.QueryTypes.DELETE })
      .then(() =>
        sequelize.query('delete from company where siret = "0998877665451234576345"', {
          type: sequelize.QueryTypes.DELETE,
        })
    )
      .then(() =>
      sequelize.query(`
        ALTER TABLE bundle
          MODIFY COLUMN alias varchar(110) NOT NULL`, {})
      );
  },
};
