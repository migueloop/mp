if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'summary',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/summary').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'features',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/features').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'resources',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/resources').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'editor',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/editor').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'timeline',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/timeline').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'settings',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/settings').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'line-options',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/line-options').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'assignment-options',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/assignment-options').default.get(tenant);
            cb(null, Product);
          });
        },
      },
      {
        path: 'follow-up-timelines',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit/tabs/follow-up-timelines').default.get(tenant);
            cb(null, Product);
          });
        },
      },
    ];
  },
};
