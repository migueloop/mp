import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_language', {
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idLanguage: {
      field: 'id_language',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'product_language',
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
