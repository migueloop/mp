import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bundle_keyword', {
    idBundle: {
      field: 'id_bundle',
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
    tableName: 'bundle_keyword',
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
