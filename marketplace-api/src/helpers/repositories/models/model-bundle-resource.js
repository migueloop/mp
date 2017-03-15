import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bundle_resource', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idBundle: {
      field: 'id_bundle',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idResource: {
      field: 'id_resource',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    showCarousel: {
      field: 'show_carousel',
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
    },
    carouselOrder: {
      field: 'carousel_order',
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    tableName: 'bundle_resource',
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
