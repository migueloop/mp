'use strict';

import syncParse from 'csv-parse/lib/sync';
import fs from 'fs';

const lorem = `'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'`;
module.exports = {

  up: function up(queryInterface, Sequelize, sequelize, tenant) {
    if (tenant !== 'sncf') {
        return Promise.resolve();
    }
    const products = syncParse(fs.readFileSync(`${__dirname}/data/gdp/products.csv`, 'utf8'), { columns: true });
    const assignments = syncParse(fs.readFileSync(`${__dirname}/data/gdp/assignments.csv`, 'utf8'), { columns: true });
    return queryInterface.addColumn('product', 'import_type', { type: Sequelize.STRING, allowNull: true })
    // .then(() => sequelize.query('ALTER TABLE `assignment` DROP FOREIGN KEY `assignment_ibfk_1`;'))
    // .then(() => sequelize.query('ALTER TABLE `assignment` DROP FOREIGN KEY `assignment_ibfk_2`;'))
    .then(() => queryInterface.addColumn('assignment', 'import_type', { type: Sequelize.STRING, allowNull: true }))
    .then(() => queryInterface.addColumn('assignment_order', 'import_type', { type: Sequelize.STRING, allowNull: true }))
    .then(() => sequelize.query(this.getProductsInsertQuery(products)))
    .then(() => sequelize.query('select * from product where import_type="gdp"', { type: sequelize.QueryTypes.SELECT }))
    .then(productRows => {
      productRows.forEach(row => {
        products.find(product => product.name === row.name).id = row.id;
      });
      return Promise.resolve(console.log('updated products:', products));
    })
    .then(() => {
      const timeNow = new Date().getTime();
      const separatedAssignments = this.separateAssignments(assignments, products);
      console.log('separatedAssignments', separatedAssignments);
      const assignmentQueries = separatedAssignments.map(assignmentData => {
        return sequelize.query('insert into assignment (id_assigned_to, id_assigned_by, id_state, created_at, import_type, id_po_system, id_workflow_instance, assigned_at, alias) values(?, ?, 5, ?, "gdp", "dd2560955", "581b3eff708d8c4d0072a39b", ?, "alias")',
          {
            replacements: [assignmentData.userId, assignmentData.userId, timeNow, timeNow],
            type: sequelize.QueryTypes.INSERT
          }
        )
        .then(res => {
          const id_assignment = res;
          const id_product = assignmentData.id_product;
          const completed = 1;
          const id_gdp = assignmentData.id;
          const created_at = timeNow;
          const import_type = 'gdp';
          const id_po_system = 'dd2560955';
          const id_state = 4;
          const insertValues = [id_assignment, id_product, completed, id_gdp, created_at, import_type, id_po_system, id_state];
          console.log('order::insertValues', insertValues);
          return sequelize.query('insert into assignment_order (id_assignment, id_product, completed, id_gdp, created_at, import_type, id_po_system, id_state) values(?, ?, ?, ?, ?, ?, ?, ?)',
            {
              replacements: insertValues,
              type: sequelize.QueryTypes.INSERT
            })
        });
      });
      return Promise.all(assignmentQueries);
    });
  },

  down: function down(queryInterface, Sequelize, sequelize, tenant) {
    return sequelize.query('delete from product where import_type="gdp"')
    .then(sequelize.query('delete from assignment where import_type="gdp"'))
    .then(sequelize.query('delete from assignment_order where import_type="gdp"'))
    .then(sequelize.query('alter table product drop column import_type'))
    .then(sequelize.query('alter table assignment drop column import_type'))
    .then(sequelize.query('alter table assignment_order drop column import_type'));
  },

  getProductsInsertQuery: products => {
    const productsInsertData = products.map(product => {
      const name = `'${product.name}'`;
      const type = `'${product.type}'`;
      const alias = `'${product.name.replace(/ /g, '-')}'`;
      const state = `'published'`;
      const import_type = `'gdp'`;
      const id_timeline = 1;
      const description = lorem;
      return `(${[name, type, alias, state, import_type, id_timeline, description].join()})`;
    });
    const productInsertQuery = `insert into product (name, type, alias, state, import_type, id_timeline, description) values${productsInsertData.join()}`;
    // console.log('productInsertQuery', productInsertQuery);
    return productInsertQuery;
  },

  separateAssignments: (assignments, products) => {
    console.log('separateAssignments::assignments', assignments)
    return assignments.reduce((prev, next) => {
      const assignmentsToAdd = [];
      let productMatch;
      if (next.subscription && next.subscription !== '' && next.subscription !== 'NULL') {
        productMatch = products.find(product => product.name === next.subscription);
        console.log('PRODUCT MATCH::SUB', productMatch);
        assignmentsToAdd.push({
          id: parseInt(next.lineId, 10),
          id_product: parseInt(productMatch.id, 10),
          userId: parseInt(next.userId, 10),
        });
      }
      if (next.model && next.model !== '' && next.model !== 'NULL') {
        productMatch = products.find(product => product.name === next.model);
        console.log('PRODUCT MATCH::DEV', productMatch);
        assignmentsToAdd.push({
          id: parseInt(next.deviceId, 10),
          id_product: parseInt(productMatch.id, 10),
          userId: parseInt(next.userId, 10),
        });
      }
      return prev.concat(assignmentsToAdd);
    }, []);
  },

};
