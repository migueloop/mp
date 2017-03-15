if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }
// For some reason all of these components need to be Redux connected
module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'products',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Products = require('v02/back-office/modules/content/tabs/products').default;
            cb(null, Products);
          });
        },
      },
      {
        path: 'bundles',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const BundleList = require('v02/back-office/modules/content/tabs/bundles').default.get(tenant);
            cb(null, BundleList);
          });
        },
      },
      {
        path: 'stock',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Stock = require('v02/back-office/modules/content/tabs/stock').default.get(tenant);
            cb(null, Stock);
          });
        },
      },
    ];
  },
};
