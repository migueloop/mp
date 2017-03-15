import { cleanObject } from 'helpers';

module.exports = function UserProfile(sequelize, DataTypes) {
  return sequelize.define('user_profile', {
    idUser: {
      field: 'id_user',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    title: {
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
    lastUpdate: {
      field: 'last_update',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    validatedBy: {
      field: 'validated_by',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
    },
    idCompany: {
      field: 'id_company',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'user_profile',
    instanceMethods: {
      getLogoUrl: function getLogoUrl() {
        const image = this.getDataValue('image');
        if (!image) {
          return '/public/images/placeholders/product.png';
        }
        // TODO: In the future group user images in folders instead on directly on the user root upload folder
        // Example public/uploads/users/12/images.png for user with id 12
        return `/public/uploads/users/${image}`;
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
