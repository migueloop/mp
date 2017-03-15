import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('general_setting', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'general_setting',
    classMethods: {
      parse: function parse(settings) {
        return settings.reduce((parsed, settingObj) => {
          const setting = settingObj.toJSON();
          const key = setting.key.split(':')[1];
          if (key) {
            parsed[key] = setting.value;
          }
          return parsed;
        }, {});
      },
    },
    instanceMethods: {
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
