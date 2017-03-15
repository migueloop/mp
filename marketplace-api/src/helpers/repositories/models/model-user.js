import { cleanObject } from 'helpers';
import crypto from 'crypto';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creation_date: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authProvider: {
      field: 'auth_provider',
      type: DataTypes.ENUM('local', 'facebook', 'linkedin'),
      allowNull: false,
    },
    lastConnection: {
      field: 'last_connection',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    idRole: {
      field: 'id_role',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactMail: {
      field: 'contact_mail',
      type: DataTypes.STRING,
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socialId: {
      field: 'social_id',
      type: DataTypes.STRING,
      allowNull: true,
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'user',
    classMethods: {
      hash: (password) => {
        const sum = crypto.createHash('sha256');
        sum.update(password);
        return sum.digest('hex');
      },
    },
    instanceMethods: {
      getPermissions: function getPermissions() {
        const role = this.toJSON().role;
        if (!role || !role.permissions) {
          return [];
        }
        return cleanObject(role.permissions.map(p => p.idPermission));
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          permissions: this.getPermissions(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
