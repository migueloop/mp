import { cleanObject } from 'helpers';

module.exports = function BundleComponent(sequelize, DataTypes) {
  return sequelize.define('bundle_component', {
    idBundle: {
      field: 'id_bundle',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idComponent: {
      field: 'id_component',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    showOrder: {
      field: 'show_order',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true,
    },
  }, {
    tableName: 'bundle_component',
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
