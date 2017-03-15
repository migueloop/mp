if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }
let store = null;

const onEnter = (nextState, replaceState) => {
  const user = store.getState().get('v02').get('common').get('user');
  if (!user || !user.toJS().id) {
    replaceState({ nextPathname: nextState.location.pathname }, '/');
  }
};

module.exports = {
  ofTenant: (tenant, localStore) => {
    store = localStore;
    return [
      {
        path: 'assignments',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/assignments/components/back-office-assignments').default.get(tenant);
            cb(null, Page);
          });
        },
        childRoutes: require('v02/back-office/modules/assignments/AssignmentRoutes').ofTenant(tenant),
      },
      {
        path: 'users',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Users = require('v02/back-office/modules/users/components/users').default.get(tenant);
            cb(null, Users);
          });
        },
        childRoutes: require('v02/back-office/modules/users/UserRoutes').ofTenant(tenant),
      },
      /**
      *
      *              Bundles
      *
      **/
      {
        path: 'bundle/edit/:id',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/bundles/components/edit/edit-bundle').default.get(tenant);
            cb(null, Page);
          });
        },
        childRoutes: require('v02/back-office/modules/bundles/BundleRoutes').ofTenant(tenant),
      },
      {
        path: 'assignment/edit/:id',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/assignments/components/edit-2').default.get(tenant);
            cb(null, Page);
          });
        },
        childRoutes: require('v02/back-office/modules/assignments/AssignmentRoutes').ofTenant(tenant),
      },
      {
        path: 'assignment/detail/:id',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/assignments/components/_common/details').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'assignment/new',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/assignments/components/edit').default.get(tenant);
            cb(null, Page);
          });
        },
        childRoutes: require('v02/back-office/modules/assignments/AssignmentRoutes').ofTenant(tenant),
      },
      {
        path: 'stock/new',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/stock/components/new').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'corners',
        onEnter,
        name: 'corners',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/domains/components').default.get(tenant);
            cb(null, Page);
          });
        },
        getIndexRoute: (location, cb) => {
          require.ensure([], require => {
            const Home = require('v02/back-office/modules/domains/components/thematics').default.get(tenant);
            cb(null, {
              component: Home,
            });
          });
        },
      },
      {
        path: 'editors',
        onEnter,
        name: 'editors',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/domains/components').default.get(tenant);
            cb(null, Page);
          });
        },
        getIndexRoute: (location, cb) => {
          require.ensure([], require => {
            const Home = require('v02/back-office/modules/domains/components/editor-profiles').default.get(tenant);
            cb(null, {
              component: Home,
            });
          });
        },
      },
      {
        path: 'corners/edit/:id',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/domains/components/edit/thematic').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'corners/edit/editor/:id',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/domains/components/edit/editor-profile').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'content',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Contents = require('v02/back-office/modules/content').default.get(tenant);
            cb(null, Contents);
          });
        },
        childRoutes: require('v02/back-office/modules/content/ContentRoutes').ofTenant(tenant),
      },
      {
        path: 'user-notifications',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const UserNotfications = require('v02/back-office/modules/user-notifications/components').default.get(tenant);
            cb(null, UserNotfications);
          });
        },
      },
      {
        path: 'settings',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Settings = require('v02/back-office/modules/settings/components').default.get(tenant);
            cb(null, Settings);
          });
        },
      },
      // Editor Routes
      {
        path: 'mycorner',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/domains/components/edit/editor-profile').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'product/edit/:id',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Product = require('v02/back-office/modules/products/components/edit').default.get(tenant);
            cb(null, Product);
          });
        },
        childRoutes: require('v02/back-office/modules/products/ProductRoutes').ofTenant(tenant),
      },
      {
        path: 'offers',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Offers = require('v02/back-office/modules/external/components/offers').default.get(tenant);
            cb(null, Offers);
          });
        },
      },
      {
        path: 'subscriptions',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Offers = require('v02/back-office/modules/external/components/subscriptions');
            cb(null, Offers);
          });
        },
      },
      {
        path: 'uservoice',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const userVoice = require('v02/back-office/modules/external/components/user-voice').default.get(tenant);
            cb(null, userVoice);
          });
        },
      },
      {
        path: 'follow-ups',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/follow-ups/components/follow-ups').default.get(tenant);
            cb(null, Page);
          });
        },
        childRoutes: require('v02/back-office/modules/follow-ups/FollowUpRoutes').ofTenant(tenant),
      },
      {
        path: 'analytics',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/external/components/bi360').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'gestion',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/external/components/gdp').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'controle',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/external/components/controle').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'incidents',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/external/components/easyvista').default.get(tenant);
            cb(null, Page);
          });
        },
      },
      {
        path: 'help',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Offers = require('v02/back-office/modules/external/components/help').default.get(tenant);
            cb(null, Offers);
          });
        },
      },
      {
        path: 'my-apps',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            cb(null, require('v02/back-office/modules/my-apps/components/my-apps'));
          });
        },
      },
      {
        path: 'dashboard/:id',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            cb(null, require('v02/back-office/modules/dashboard/components'));
          });
        },
      },
      /*
      {
        path: 'search',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Search = require('v02/back-office/modules/components/search').default.get(tenant);
            Search.query = location.query;
            cb(null, Search);
          });
        },
      },
      */
      {
        path: 'search',
        onEnter,
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Page = require('v02/back-office/modules/external/components/search').default.get(tenant);
            cb(null, Page);
          });
        },
      },
    ];
  },
};
