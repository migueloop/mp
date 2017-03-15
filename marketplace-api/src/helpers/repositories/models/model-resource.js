import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idProduct: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'id_product',
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeOrder: {
      field: 'home_order',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    isHidden: {
      field: 'is_hidden',
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    originalName: {
      field: 'original_name',
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      field: 'creation_date',
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameCustom: {
      field: 'name_custom',
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'resource',
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
