import { cleanObject } from 'helpers';

module.exports = function ArticleResources(sequelize, DataTypes) {
  return sequelize.define('article_resource', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idArticle: {
      field: 'id_article',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idResource: {
      field: 'id_resource',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'article_resource',
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
