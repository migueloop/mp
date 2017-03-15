import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('home_carousel', {
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
    mainPicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    detailPagePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    buttonText: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'More',
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondaryPictureALT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mainPictureALT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
    }
  }, {
    tableName: 'home_carousel',
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
