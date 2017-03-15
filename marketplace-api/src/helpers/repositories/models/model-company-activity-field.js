import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_activity_field', {
    idCompany: {
      field: 'id_company',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idActivityField: {
      field: 'id_activity_field',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'company_activity_field',
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
