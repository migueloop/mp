'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('ALTER TABLE `user` DROP FOREIGN KEY `fk_user_role`;')
      .then(() =>
        sequelize.query('ALTER TABLE `user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;')
      ).then(() =>
        sequelize.query('ALTER TABLE `permission_role` ADD CONSTRAINT `fk_role_permissions` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;')
      ).then(() =>
        sequelize.query('ALTER TABLE `user_profile` DROP FOREIGN KEY `fk_user_validated`;')
      ).then(() =>
        sequelize.query('ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;')
      ).then(() =>
        sequelize.query('ALTER TABLE `corner` DROP FOREIGN KEY `fk_corner_created`;')
      ).then(() =>
        sequelize.query('ALTER TABLE `corner` ADD CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;')
      );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('ALTER TABLE `user` DROP FOREIGN KEY `fk_user_role`;')
      .then(() =>
        sequelize.query('ALTER TABLE `user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;')
      ).then(() =>
        sequelize.query('ALTER TABLE `permission_role` DROP FOREIGN KEY `fk_role_permissions`;')
      ).then(() =>
        sequelize.query('ALTER TABLE `user_profile` DROP FOREIGN KEY `fk_user_validated`;')
      ).then(() =>
        sequelize.query('ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_validated` FOREIGN KEY (`validated_by`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;')
      ).then(() =>
        sequelize.query('ALTER TABLE `corner` DROP FOREIGN KEY `fk_corner_created`;')
      ).then(() =>
        sequelize.query('ALTER TABLE `corner` ADD CONSTRAINT `fk_corner_created` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;')
      );
  },
};
