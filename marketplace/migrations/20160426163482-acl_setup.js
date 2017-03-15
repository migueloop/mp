// update db for ACL
import PERMISSIONS from 'helpers/constants/permissions';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize) {
    return queryInterface.createTable(
      'permission_role',
      {
        id_permission: Sequelize.STRING,
        id_role: Sequelize.INTEGER,
      },
      { charset: 'utf8' }
    )
    .then(() => {
      let inserts = [
        PERMISSIONS.EDIT_ARTICLE.id,
        PERMISSIONS.VALIDATE_PUBLICATION_ARTICLE.id,
        PERMISSIONS.UNPUBLISH_ARTICLE.id,
        PERMISSIONS.PUBLISH_ARTICLE.id,
        PERMISSIONS.DELETE_ARTICLE.id,
        PERMISSIONS.EDIT_PRODUCT.id,
        PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id,
        PERMISSIONS.PUBLISH_PRODUCT.id,
        PERMISSIONS.UNPUBLISH_PRODUCT.id,
        PERMISSIONS.DELETE_PRODUCT.id,
        PERMISSIONS.CREATE_BUNDLE.id,
        PERMISSIONS.EDIT_BUNDLE_OWN.id,
        PERMISSIONS.PUBLISH_BUNDLE_OWN.id,
        PERMISSIONS.UNPUBLISH_BUNDLE_OWN.id,
        PERMISSIONS.DELETE_BUNDLE_OWN.id,
        PERMISSIONS.CREATE_CORNER.id,
        PERMISSIONS.EDIT_CORNER.id,
        PERMISSIONS.DELETE_CORNER.id,
        PERMISSIONS.EDIT_USER_CORNER.id,
        PERMISSIONS.CREATE_ROLES.id,
        PERMISSIONS.EDIT_ROLES_PERMISSION.id,
        PERMISSIONS.EDIT_USER_ROLE.id,
        PERMISSIONS.READ_USERS.id,
        PERMISSIONS.READ_USERS_DETAILS.id,
        PERMISSIONS.CREATE_USER.id,
        PERMISSIONS.EDIT_GENERAL_SETTINGS.id,
        PERMISSIONS.EDIT_USER.id,
      ].map(permission => ({
        id_role: 3,
        permission,
      }));

      inserts = inserts.concat([
        PERMISSIONS.CREATE_PRODUCT.id,
        PERMISSIONS.EDIT_PRODUCT_OWN.id,
        PERMISSIONS.REQUEST_PUBLICATION_PRODUCT.id,
        PERMISSIONS.UNPUBLISH_PRODUCT_OWN.id,
        PERMISSIONS.DELETE_PRODUCT_OWN.id,
        PERMISSIONS.EDIT_USER_CORNER_OWN.id,
      ].map(permission => ({
        id_role: 2,
        permission,
      })));

      inserts = inserts.concat([
        PERMISSIONS.CREATE_ARTICLE.id,
        PERMISSIONS.EDIT_ARTICLE_OWN.id,
        PERMISSIONS.REQUEST_PUBLICATION_ARTICLE.id,
        PERMISSIONS.UNPUBLISH_ARTICLE_OWN.id,
        PERMISSIONS.DELETE_ARTICLE_OWN.id,
        PERMISSIONS.EDIT_USER_CORNER_OWN.id,
      ].map(permission => ({
        id_role: 4,
        permission,
      })));

      Promise.all(inserts.map(permission => (
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('permission_role');
  },
};
