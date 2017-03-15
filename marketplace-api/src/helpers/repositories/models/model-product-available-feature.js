import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_available_feature', {
    idFeature: {
      field: 'id_feature',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'product_available_feature',
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
    deletedAt: false,  });
};
