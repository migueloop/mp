import { cleanObject } from 'helpers';

module.exports = function AssignmentOrder(sequelize, DataTypes) {
  return sequelize.define('assignment_order', {
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
    idAssignment: {
      field: 'id_assignment',
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idProduct: {
      field: 'id_product',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idBundle: {
      field: 'id_bundle',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    idState: {
      field: 'id_state',
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    timelineType: {
      field: 'timeline_type',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idGdp: {
      field: 'id_gdp',
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    tableName: 'assignment_order',
    instanceMethods: {
      parseProduct: function parseProduct() {
        if (!this.getDataValue('product')) {
          return [];
        }
        return this.getDataValue('product').parse();
      },
      parseBundle: function parseBundle() {
        if (!this.getDataValue('bundle')) {
          return [];
        }
        return this.getDataValue('bundle').parse();
      },
      parse: function parse() {
        return cleanObject({
          ...this.toJSON(),
          product: this.parseProduct(),
          bundle: this.parseBundle(),
        });
      },
    },
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
    deletedAt: false,
  });
};
