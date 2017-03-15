import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_keyword', {
    idProduct: {
      field: 'id_product',
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
    tableName: 'product_keyword',
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
