import { cleanObject } from 'helpers';

module.exports = function BundleCorner(sequelize, DataTypes) {
  return sequelize.define('bundle_corner', {
    idBundle: {
      field: 'id_bundle',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idCorner: {
      field: 'id_corner',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'bundle_corner',
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
