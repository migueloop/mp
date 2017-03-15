if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

module.exports = {
  ofTenant: tenant => (
    [
      {
        path: 'summary',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Users = require('v02/back-office/modules/users/components/tabs/summary').default.get(tenant);
            cb(null, Users);
          });
        },
      },
      {
        path: 'pending',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Users = require('v02/back-office/modules/users/components/tabs/pending').default.get(tenant);
            cb(null, Users);
          });
        },
      },
      {
        path: 'create',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Users = require('v02/back-office/modules/users/components/tabs/create').default.get(tenant);
            cb(null, Users);
          });
        },
      },
      {
        path: 'acl',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Roles = require('v02/back-office/modules/users/components/tabs/acl').default.get(tenant);
            cb(null, Roles);
          });
        },
        getIndexRoute: (location, cb) => {
          require.ensure([], require => {
            const Home = require('v02/back-office/modules/users/components/tabs/acl/list').default.get(tenant);
            cb(null, {
              component: Home,
            });
          });
        },
        childRoutes: [
          {
            path: 'edit/:id/:category',
            getComponent: (location, cb) => {
              require.ensure([], require => {
                const Roles = require('v02/back-office/modules/users/components/tabs/acl/permissions').default.get(tenant);
                cb(null, Roles);
              });
            },
          },
        ],
      },
    ]
  ),
};
