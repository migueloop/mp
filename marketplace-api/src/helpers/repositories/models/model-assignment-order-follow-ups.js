import { cleanObject } from 'helpers';

module.exports = function AssignmentOrder(sequelize, DataTypes) {
  return sequelize.define('assignment_order_follow_ups', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idAssignmentOrder: {
      field: 'id_assignment_order',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idWorkflowInstance: {
      field: 'id_workflow_instance',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    idTimeline: {
      field: 'id_timeline',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idFollowUpTask: {
      field: 'id_follow_up_task',
      type: DataTypes.STRING,
      allowNull: true,
    },
    options: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'assignment_order_follow_ups',
    instanceMethods: {
      parseAssignmentOrder: function parseAssignmentOrder() {
        if (!this.getDataValue('assignmentOrder')) {
          return [];
        }
        return this.getDataValue('assignmentOrder').parse();
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          assignmentOrder: this.parseAssignmentOrder(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
