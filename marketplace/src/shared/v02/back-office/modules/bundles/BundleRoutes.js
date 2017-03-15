if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'summary',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Bundle = require('v02/back-office/modules/bundles/components/edit/tabs/summary').default.get(tenant);
            cb(null, Bundle);
          });
        },
      },
      {
        path: 'composition',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Bundle = require('v02/back-office/modules/bundles/components/edit/tabs/composition').default.get(tenant);
            cb(null, Bundle);
          });
        },
      },
    ];
  },
};
