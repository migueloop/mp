import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  const Model = sequelize.define('permission_role', {
    idPermission: {
      field: 'id_permission',
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
    idRole: {
      field: 'id_role',
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true,
    },
  }, {
    tableName: 'permission_role',
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
  Model.removeAttribute('id');
  return Model;

};
