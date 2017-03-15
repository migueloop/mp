if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

module.exports = {
  ofTenant: tenant => {
    return [
      {
        path: 'draft',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Assignment = require('v02/back-office/modules/assignments/components/_common/draft').default.get(tenant);
            cb(null, Assignment);
          });
        },
      },
      {
        path: 'in-progress',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            // TODO: change this to v2 (v02/back-office/modules/assignments/components/_common/in-progress)
            const Assignment = require('v02/back-office/modules/assignments/components/tabs/in-progress').default.get(tenant);
            cb(null, Assignment);
          });
        },
      },
      {
        path: 'done',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Assignment = require('v02/back-office/modules/assignments/components/tabs/done').default.get(tenant);
            cb(null, Assignment);
          });
        },
      },
    ];
  },
};
