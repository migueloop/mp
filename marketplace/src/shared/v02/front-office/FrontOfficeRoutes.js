if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }
module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'detail/:id',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/home/components/home-carousel/detail');
            cb(null, Product);
          });
        },
      },
      {
        path: 'disclaimer',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/disclaimer/components/disclaimer');
            cb(null, Product);
          });
        },
      },
      {
        path: 'domain/:alias',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Thematic = require('v02/front-office/modules/domains/components/domain-detail').default.get(tenant);
            cb(null, Thematic);
          });
        },
      },
      {
        path: 'product/:alias',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/front-office/modules/products/components/front-product-sheet').default;
            cb(null, Product);
          });
        },
        childRoutes: require('v02/front-office/modules/products/ProductRoutes').ofTenant(tenant),
      },
      {
        path: 'user-corner/:alias',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const UserCorner = require('v02/front-office/modules/user-corner/components/user-corner');
            cb(null, UserCorner);
          });
        },
      },
      {
        path: 'bundle/:alias',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Bundle = require('v02/front-office/modules/bundles/components/front-bundle').default.get(tenant);
            cb(null, Bundle);
          });
        },
      },
      {
        path: 'catalog*',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Catalog = require('v02/front-office/modules/catalog/components/front-all');
            cb(null, Catalog);
          });
        },
      },
      // TODO: To Refactor
      // todo: remove this and use split to make filters more dynamic later on
      {
        path: 'catalog/keywords/:tags',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Catalog = require('v02/front-office/modules/catalog/components/front-all');
            cb(null, Catalog);
          });
        },
      },
    ];
  },
};
