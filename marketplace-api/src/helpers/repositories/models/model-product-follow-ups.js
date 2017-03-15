import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  const Model =  sequelize.define('product_follow_ups', {
    idProduct: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'id_product',
    },
    idFollowUpTask: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'id_follow_up_task',
    },
    idTimeline: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'id_timeline',
    },
    idStep: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'id_step',
    },
    includeProductOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'include_product_owner',
    },
    roleIds: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'role_ids',
    },
    userIds: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'user_ids',
    },
  }, {
    tableName: 'product_follow_ups',
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
  return Model;
};
