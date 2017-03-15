import { cleanObject } from 'helpers';

module.exports = function ArticleKeywords(sequelize, DataTypes) {
  return sequelize.define('article_keyword', {
    idArticle: {
      type: DataTypes.INTEGER(11),
      field: 'id_article',
      allowNull: false,
      primaryKey: true,
    },
    idKeyword: {
      type: DataTypes.INTEGER(11),
      field: 'id_keyword',
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'article_keyword',
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
