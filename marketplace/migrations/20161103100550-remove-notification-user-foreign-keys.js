'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    // return sequelize.query('ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_ibfk_1`;');
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('ALTER TABLE `notifications` ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;');
  },
};
