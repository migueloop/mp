import { cleanObject } from 'helpers';

module.exports = function CompanyPlatform(sequelize, DataTypes) {
  return sequelize.define('company_platform', {
    idCompany: {
      field: 'id_company',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    idPlatform: {
      field: 'id_platform',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
  }, {
    tableName: 'company_platform',
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
