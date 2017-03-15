if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'summary',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/products/components/tabs/front-product-summary').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'features',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/products/components/tabs/front-product-features').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'resources',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/products/components/tabs/front-product-resources').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'editor',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/products/components/tabs/front-product-editor').default.get(tenant);
            cb(null, Product);
          });
        },
      },
    ];
  },
};
