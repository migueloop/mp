import { cleanObject } from 'helpers';

module.exports = function ArticleCorner(sequelize, DataTypes) {
  return sequelize.define('article_corner', {
    idArticle: {
      type: DataTypes.INTEGER(11),
      field: 'id_article',
      allowNull: false,
      primaryKey: true,
    },
    idCorner: {
      type: DataTypes.INTEGER(11),
      field: 'id_corner',
      allowNull: false,
      primaryKey: true,
    },
    highlightArticle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'highlight_article',
    },
  }, {
    tableName: 'article_corner',
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
