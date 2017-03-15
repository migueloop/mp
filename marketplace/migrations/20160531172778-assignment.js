// Create assignment, Create assignment_item, Insert role
import { ITEM, USER } from 'helpers/constants/constants-main';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log(`[${tenant}]`, 'Start Migration Assignments');
    return queryInterface.createTable(
      'assignment',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_assigned_to: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true,
          references: { model: 'user', key: 'id' },
          onDelete: 'set null',
          onUpdate: 'cascade',
        },
        id_assigned_by: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true,
          references: { model: 'user', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'set null',
        },
        id_state: {
          type: Sequelize.INTEGER,
          defaultValue: null,
          allowNull: true,
          references: { model: 'item_state', key: 'id' },
          onUpdate: 'cascade',
          onDelete: 'set null',
        },
        id_workflow_instance: {
          type: Sequelize.STRING,
          defaultValue: null,
          allowNull: true,
        },
        assigned_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: null,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.BIGINT(32),
          defaultValue: Sequelize.NOW,
          allowNull: false,
        },
        alias: {
          type: Sequelize.STRING,
          defaultValue: null,
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          defaultValue: null,
          allowNull: true,
        },
      },
      { charset: 'utf8' }
    )
    .then(() => {
      console.log('2')
      return queryInterface.createTable(
        'assignment_order',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          id_assignment: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'assignment', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          id_product: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'product', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          id_bundle: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'bundle', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          id_state: {
            type: Sequelize.INTEGER,
            defaultValue: null,
            allowNull: true,
            references: { model: 'item_state', key: 'id' },
            onUpdate: 'cascade',
            onDelete: 'set null',
          },
          created_at: {
            type: Sequelize.BIGINT(32),
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          alias: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          logo: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          editor_title: {
            type: Sequelize.STRING,
            allowNull: true,
          },
        },
        { charset: 'utf8' }
      );
    })
    .then(() => {
      console.log('3')
      return sequelize.query('insert into item_state (id, state) values (?,?)',
        {
          replacements: [
            ITEM.STATE.VALIDATED,
            ITEM.STATE.KEY.VALIDATED,
          ],
          type: sequelize.QueryTypes.INSERT,
        });
    })
    /* .then(() => {
      const inserts = [
        ITEM.TYPES.ARTICLE,
        ITEM.TYPES.BUNDLE,
        ITEM.TYPES.ASSIGNMENT,
        ITEM.TYPES.PRODUCT,
      ];
      return Promise.all(inserts.map(item => (
        sequelize.query('insert into item (name) values (?)',
          {
            replacements: [
              item,
            ],
            type: sequelize.QueryTypes.INSERT,
          })
      )));
    })*/;
  },
  down: function down(queryInterface, Sequelize, sequelize) {
    return queryInterface.dropTable('assignment_order')
    // .then(() => queryInterface.dropTable('item'))
    .then(() => queryInterface.dropTable('assignment'))
    .then(() => {
      return sequelize.query('delete from role where name = ?', {
        replacements: [USER.ROLE.KEY.FLEET_MANAGER],
        type: sequelize.QueryTypes.DELETE,
      });
    })
    .then(() => {
      return sequelize.query('delete from item_state where state = ?', {
        replacements: [ITEM.STATE.KEY.VALIDATED],
        type: sequelize.QueryTypes.DELETE,
      });
    });
  },
};
