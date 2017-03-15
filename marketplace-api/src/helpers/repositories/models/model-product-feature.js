import { cleanObject } from 'helpers';

export default (sequalize, DataTypes) => {
  const Model = sequalize.define('product_feature', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    createdAt: false,
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
  Model.removeAttribute('id');
  return Model;
};
