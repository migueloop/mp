import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idSubject: {
      field: 'id_subject',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    subjectReference: {
      field: 'subject_reference',
      type: DataTypes.STRING,
      allowNull: false,
    },
    idUser: {
      field: 'id_user',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    viewAt: {
      field: 'view_at',
      type: DataTypes.BIGINT(32),
      allowNull: true,
    },
    clickedAt: {
      field: 'clicked_at',
      type: DataTypes.BIGINT(32),
      allowNull: true,
    },
    hiddenAt: {
      field: 'hidden_at',
      type: DataTypes.BIGINT(32),
      allowNull: true,
    },
    created_at: {
      field: 'created_at',
      type: DataTypes.BIGINT(32),
      allowNull: false,
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.BIGINT(32),
      allowNull: true,
    },
  }, {
    tableName: 'notification',
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
