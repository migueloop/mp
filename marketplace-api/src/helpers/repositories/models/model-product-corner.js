import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_corner', {
    idProduct: {
      field: 'id_product',
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
    highlight_product: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    tableName: 'product_corner',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
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
