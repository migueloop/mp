import { cleanObject } from 'helpers';

module.exports = function BillingAgent(sequelize, DataTypes) {
  return sequelize.define('billing_agent', {
    idUser: {
      field: 'id_user',
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    apiKey: {
      field: 'api_key',
      type: DataTypes.STRING,
      allowNull: true,
    },
    agentKey: {
      field: 'agent_key',
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'billing_agent',
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
