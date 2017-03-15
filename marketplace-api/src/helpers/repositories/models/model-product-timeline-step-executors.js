import { cleanObject } from 'helpers';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_timeline_step_executors', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    executorType: {
      field: 'executor_type',
      type: DataTypes.ENUM('user', 'role', 'product_owner'),
      allowNull: false,
    },
    idExecutor: {
      field: 'id_executor',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idTimelineStep: {
      field: 'id_timeline_step',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'product_timeline_step_executors',
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
