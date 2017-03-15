import { cleanObject } from 'helpers';

module.exports = function Bundle(sequelize, DataTypes) {
  return sequelize.define('bundle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baseline: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      field: 'created_by_id',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    createdAt: {
      field: 'creation_date',
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    lastUpdate: {
      field: 'last_update',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    publicationDate: {
      field: 'publication_date',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    stateId: {
      field: 'state_id',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logoId: {
      field: 'logo_id',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  }, {
    tableName: 'bundle',
    instanceMethods: {
      getLogoUrl: function getLogoUrl() {
        const idLogo = this.getDataValue('logoId');
        const resources = this.getDataValue('resources');
        if (!resources || !idLogo) {
          return '/public/images/placeholders/product.png';
        }
        const resource = resources.find(r => r.id === idLogo);
        return `/public/uploads/bundles/${this.getDataValue('id')}/${resource.name}`;
      },
      parseProducts: function parseProducts() {
        if (!this.getDataValue('products')) {
          return [];
        }
        return this.getDataValue('products').map(p => p.parse());
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          logoUrl: this.getLogoUrl(),
          products: this.parseProducts(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
