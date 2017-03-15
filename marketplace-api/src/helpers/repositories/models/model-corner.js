import { cleanObject } from 'helpers';

module.exports = function Corner(sequelize, DataTypes) {
  return sequelize.define('corner', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    createdAt: {
      field: 'creation_date',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lastUpdate: {
      field: 'last_update',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'corner',
    instanceMethods: {
      getLogoUrl: function getLogoUrl() {
        const logo = this.getDataValue('logo');
        if (logo) {
          return `/public/uploads/corners/${logo}`;
        }
        return '/public/images/placeholders/product.png';
      },
      parseProducts: function parseProducts() {
        if (!this.getDataValue('products')) {
          return [];
        }
        return this.getDataValue('products').map(p => p.parse());
      },
      parseArticles: function parseArticles() {
        if (!this.getDataValue('articles')) {
          return [];
        }
        return this.getDataValue('articles').map(p => p.parse());
      },
      parseBundles: function parseBundles() {
        if (!this.getDataValue('bundles')) {
          return [];
        }
        return this.getDataValue('bundles').map(p => p.parse());
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          logoUrl: this.getLogoUrl(),
          products: this.parseProducts(),
          articles: this.parseArticles(),
          bundles: this.parseBundles(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
