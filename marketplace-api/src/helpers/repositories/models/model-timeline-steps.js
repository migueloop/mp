import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeline_steps', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1',
    },
    idTimeline: {
      field: 'id_timeline',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'timeline_steps',
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
