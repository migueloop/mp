import { cleanObject } from 'helpers';
import WorkflowRepository from 'helpers/repositories/workflow';

module.exports = function Assignment(sequelize, DataTypes) {
  return sequelize.define('assignment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idPoSystem: {
      field: 'id_po_system',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idAssignedTo: {
      field: 'id_assigned_to',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idAssignedBy: {
      field: 'id_assigned_by',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idState: {
      field: 'id_state',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idWorkflowInstance: {
      field: 'id_workflow_instance',
      type: DataTypes.STRING,
      allowNull: true,
    },
    assignedAt: {
      field: 'assigned_at',
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'assignment',
    instanceMethods: {
      parseItems: function parseItems() {
        if (!this.getDataValue('items')) {
          return [];
        }
        const idPoSystem = this.getDataValue('idPoSystem');
        const parsedItems = this.getDataValue('items').map(p => p.parse())
        .map(p => {
          p.assignmentPoSystemId = idPoSystem;
          return p;
        });
        return parsedItems;
      },
      parse: function parse() {
        const cleanedObject = cleanObject({
          ...this.toJSON(),
          items: this.parseItems(),
        });
        return cleanedObject;
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
