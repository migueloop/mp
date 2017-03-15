// Create assignment, Create assignment_item, Insert role
import { ITEM } from 'helpers/constants/constants-main';
import { PRODUCT_AVAILABLE_FEATURES } from 'helpers/constants/features';

module.exports = {
  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    console.log(`[${tenant}]`, 'Start Create table product_available_feature');
    return queryInterface.createTable(
      'product_available_feature',
      {
        id_feature: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
        },
        id_product: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: { model: 'product', key: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
      { charset: 'utf8' }
    )
    .then(() => {
      console.log(`[${tenant}]`, 'Select all products ids ot insert them in product_available_feature');
      return sequelize.query('SELECT id FROM product', { type: sequelize.QueryTypes.SELECT });
    })
    .then((aProducts) => {
      const aProductFeatures = [];

      if (aProducts && (aProducts.length > 0)) {
        aProducts.forEach(p => {
          for(const k in PRODUCT_AVAILABLE_FEATURES) {
            aProductFeatures.push({
              id_feature: PRODUCT_AVAILABLE_FEATURES[k].id,
              id_product: p.id,
            });
          }
        });
      }

      return Promise.all(aProductFeatures.map(pf => (
        sequelize.query('insert into product_available_feature (id_feature, id_product) values (?,?)',
          {
            replacements: [
              pf.id_feature,
              pf.id_product,
            ],
            type: sequelize.QueryTypes.INSERT,
          })
      )));
    });
  },
  down: function down(queryInterface, Sequelize, sequelize) {
    return queryInterface.dropTable('product_available_feature');
  },
};

