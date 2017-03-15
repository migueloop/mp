'use strict';

const config = require('config').default;
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const roles = [
  {
    from: 17,
    to: 25,
  },

  {
    from: 5,
    to: 24,
  },
  {
    from: 19,
    to: 23,
  },
  {
    from: 16,
    to: 22,
  },
  {
    from: 4,
    to: 21,
  },
  {
    from: 20,
    to: 20,
  },
  {
    from: 18,
    to: 19,
  },
  {
    from: 2,
    to: 17,
  },
  {
    from: 6,
    to: 16,
  },
  {
    from: 3,
    to: 15,
  },
  {
    from: 1,
    to: 18,
  },
];
const users = [
  {
    from: 2,
    to: 34,
  },
  {
    from: 1,
    to: 33,
  },
  {
    from: 3,
    to: 35,
  },
  {
    from: 4,
    to: 37,
  },
  {
    from: 5,
    to: 38,
  },
  {
    from: 6,
    to: 39,
  },
  {
    from: 7,
    to: 40,
  },
  {
    from: 8,
    to: 41,
  },
  {
    from: 9,
    to: 42,
  },
  {
    from: 10,
    to: 43,
  },
  {
    from: 12,
    to: 44,
  },
  {
    from: 13,
    to: 45,
  },
  {
    from: 14,
    to: 46,
  },
];

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    if (tenant !== 'sncf') {
      return Promise.resolve();
    }
    const connection = mysql.createConnection({ multipleStatements: true, ...config.getDatabase(tenant) });
    this.updateUser = user => () => (
      sequelize.query('update user set id = ? where id = ?', {
        replacements: [user.to, user.from],
        type: sequelize.QueryTypes.UPDATE,
      })
    );

    this.updateRole = role => () => (
      sequelize.query('update role set id = ? where id = ?', {
        replacements: [role.to, role.from],
        type: sequelize.QueryTypes.UPDATE,
      })
    );

    return new Promise((resolve, reject) => {
      connection.connect(err => {
        if (err) reject(err);
        const sql = fs.readFileSync(path.join(__dirname, '/sql//20161027144064-sncf-sync-users.sql')).toString();
        console.log(sql.slice(0, 50));
        connection.query(sql, (err, result) => {
          if (err) reject(err);
          connection.end();
          resolve();
        });
      });
    })
      .then(() =>(
        sequelize.query('update user_profile set validated_by = 2 where validated_by = null', {
          type: sequelize.QueryTypes.UPDATE,
        })
      ))
      .then(() =>
        sequelize.query('update user_profile set validated_by = null where id_user = validated_by', {
          type: sequelize.QueryTypes.UPDATE,
        })
      )
      .then(this.updateUser(users[0]))
      .then(this.updateUser(users[1]))
      .then(this.updateUser(users[2]))
      .then(this.updateUser(users[3]))
      .then(this.updateUser(users[4]))
      .then(this.updateUser(users[5]))
      .then(this.updateUser(users[6]))
      .then(this.updateUser(users[7]))
      .then(this.updateUser(users[8]))
      .then(this.updateUser(users[9]))
      .then(this.updateUser(users[10]))
      .then(this.updateUser(users[11]))
      .then(this.updateUser(users[12]))
      .then(this.updateRole(roles[0]))
      .then(this.updateRole(roles[1]))
      .then(this.updateRole(roles[2]))
      .then(this.updateRole(roles[3]))
      .then(this.updateRole(roles[4]))
      .then(this.updateRole(roles[5]))
      .then(this.updateRole(roles[6]))
      .then(this.updateRole(roles[7]))
      .then(this.updateRole(roles[8]))
      .then(this.updateRole(roles[9]))
      .then(this.updateRole(roles[10]))
      .then(() =>
        sequelize.query('select * from product_timeline_step_executors', {
          type: sequelize.QueryTypes.SELECT,
        })
      )
      .then(result => {
        return Promise.all(result.map(executor => {
          switch (executor.executor_type) {
            case 'role':
              const updatedRole = roles.find(role => role.from === executor.id_executor);
              if (!updatedRole) {
                return sequelize.query('delete from product_timeline_step_executors where id = ?', {
                  replacements: [executor.id],
                  type: sequelize.QueryTypes.DELETE,
                });
              }
              return sequelize.query('update product_timeline_step_executors set id_executor = ? where id = ?', {
                replacements: [updatedRole.to, executor.id],
                type: sequelize.QueryTypes.DELETE,
              });
            case 'user':
              const updatedUser = users.find(user => user.from === executor.id_executor);
              if (!updatedUser) {
                return sequelize.query('delete from product_timeline_step_executors where id = ?', {
                  replacements: [executor.id],
                  type: sequelize.QueryTypes.UPDATE,
                });
              }
              return sequelize.query('update product_timeline_step_executors set id_executor = ? where id = ?', {
                replacements: [updatedUser.to, executor.id],
                type: sequelize.QueryTypes.UPDATE,
              });
            default:
              return Promise.resolve();
          }

        }));
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    if (tenant !== 'sncf') {
      return Promise.resolve();
    }
    const connection = mysql.createConnection({ multipleStatements: true, ...config.getDatabase(tenant) });
    return new Promise((resolve, reject) => {
      connection.connect(err => {
        if (err) reject(err);
        const sql = fs.readFileSync(path.join(__dirname, '/sql//20161027144064-sncf-sync-users.sql')).toString();
        console.log(sql.slice(0, 50));
        connection.query(sql, (err, result) => {
          if (err) reject(err);
          connection.end();
          resolve();
        });
      });
    });
  },
};
