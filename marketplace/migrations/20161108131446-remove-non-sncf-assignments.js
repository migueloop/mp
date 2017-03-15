'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    const sncfUserIds = [33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 985, 1007, 1032, 1067, 1078, 1082, 1113, 1145, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1191, 1224, 1225, 1243, 1253, 1256, 1259, 1265, 1294, 1307, 1308, 1347, 1353, 1362, 1372, 1373, 1383, 1396, 1457, 1459, 1473, 1474, 1511, 1546, 1551, 1575, 1577, 1589, 1590, 1596, 1597, 1622, 1630, 1636, 1667, 1682, 1684, 1687, 1693, 1708, 1710, 1712, 1724, 1735, 1747, 1749, 1750, 1769, 1771, 1781, 1790, 1803, 1809, 1818, 1823, 1828, 1830, 1831, 1835, 1836, 1843, 1848, 1849, 1850, 1851, 1857, 1858];
    return sequelize.query('delete from assignment where id_assigned_to not in(?) or id_assigned_by not in(?)',
      { replacements: [sncfUserIds, sncfUserIds], type: sequelize.QueryTypes.DELETE }
    );
  },
  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return Promise.resolve();
  },
};
