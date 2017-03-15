import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    baseline: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'created_by',
    },
    creationDate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'creation_date',
    },
    lastUpdate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'last_update',
    },
    publicationDate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'publication_date',
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    logo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    mainPicture: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'main_picture',
    },
    editorInformation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'editor_information',
    },
    type: {
      type: DataTypes.ENUM('Article', 'Interview', 'WhiteBook'),
      allowNull: true,
      defaultValue: 'Article',
    },
    editorHomepage: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'editor_homepage',
    },
    editorLegalMentions: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'editor_legal_mentions',
    },
    editorDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'editor_description',
    },
    editorLogo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'editor_logo',
    },
  }, {
    tableName: 'article',
    instanceMethods: {
      getLogoUrl: function getLogoUrl() {
        const idLogo = this.getDataValue('logo');
        const resources = this.getDataValue('resources');
        if (!resources || !idLogo) {
          return '/public/images/placeholders/product.png';
        }
        const resource = resources.find(r => r.id === idLogo);
        return `/public/uploads/articles/${this.getDataValue('id')}/${resource.name}`;
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          logoUrl: this.getLogoUrl(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
