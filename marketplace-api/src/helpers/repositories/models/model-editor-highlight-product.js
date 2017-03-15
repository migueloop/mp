import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('editor_highlight_product', {
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idUser: {
      field: 'id_user',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    highlightProductOrder: {
      field: 'highlight_product_order',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'editor_highlight_product',
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
