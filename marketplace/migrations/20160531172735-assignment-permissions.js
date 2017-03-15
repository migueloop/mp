'use strict';
import PERMISSIONS from 'helpers/constants/permissions';
import { USER } from 'helpers/constants/constants-main';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log(`[${tenant}]`,'Migrate create Fleet Manager Role');
    return sequelize.query('insert into role (name) values (?)',
      {
        replacements: [
          USER.ROLE.KEY.FLEET_MANAGER,
        ],
        type: sequelize.QueryTypes.INSERT,
      })
      .then((id_role) => {
        console.log('Fleet Manager Role created with ID:', id_role);
        const inserts = [
          PERMISSIONS.CREATE_ASSIGNMENT.id,
          PERMISSIONS.EDIT_ASSIGNMENT_OWN.id,
          PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT_OWN.id,
          PERMISSIONS.CANCEL_PENDING_ASSIGNMENT_OWN.id,
          PERMISSIONS.VALIDATE_ASSIGNMENT.id,
          PERMISSIONS.CANCEL_PENDING_ASSIGNMENT.id,
          PERMISSIONS.ASSIGNMENTS_LIST_ALL_INFO.id,
        ]
        .map(permission => ({
          id_role,
          permission,
        }))
        .concat([
          PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id,
        ].map(permission => ({
          id_role: USER.ROLE.CUSTOMER,
          permission,
        })));


        return Promise.all(inserts.map(permission => (
          sequelize.query('insert into permission_role (id_permission, id_role) values (?,?)',
            {
              replacements: [
                permission.permission,
                permission.id_role,
              ],
              type: sequelize.QueryTypes.INSERT,
            })
        )));
      });
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('delete from role where name = ?', {
      replacements: [USER.ROLE.KEY.FLEET_MANAGER],
      type: sequelize.QueryTypes.DELETE,
    });
  },
};
