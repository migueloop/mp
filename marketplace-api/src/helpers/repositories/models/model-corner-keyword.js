import { cleanObject } from 'helpers';

module.exports = function CornerKeyword(sequelize, DataTypes) {
  return sequelize.define('corner_keyword', {
    idCorner: {
      field: 'id_corner',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idKeyword: {
      field: 'id_keyword',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'corner_keyword',
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
