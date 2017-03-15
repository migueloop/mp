if (typeof require.ensure !== 'function') {require.ensure = (d, c) => { c(require); }; }
if (typeof require.include !== 'function') { require.include = () => {}; }

export default class Routes {
  constructor(tenant, store) {
    this.tenant = tenant;
    this.store = store;
  }

  get() {
    return [
      {
        path: '/',
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Layout = require('v02/front-office/modules/layout').default.get(this.tenant);
            cb(null, Layout);
          });
        },
        getIndexRoute: (location, cb) => {
          require.ensure([], require => {
            const Home = require('v02/front-office/modules/home/components').default;
            cb(null, { component: Home });
          });
        },
        childRoutes: require('v02/front-office/FrontOfficeRoutes').ofTenant(this.tenant),
      },
      {
        path: '/admin',
        onEnter: (nextState, replaceState) => {
          const user = this.store.getState().get('v02').get('common').get('user');
          if (!user || !user.toJS().id) {
            console.log('redirect home');
            replaceState({ nextPathname: nextState.location.pathname }, '/');
          }
        },
        getComponent: (location, cb) => {
          require.ensure([], require => {
            const Layout = require('v02/back-office/modules/layout').default.get(this.tenant);
            cb(null, Layout);
          });
        },
        getIndexRoute: (location, cb) => {
          require.ensure([], require => {
            const Home = require('v02/back-office/modules/home/components').default;
            cb(null, { component: Home });
          });
        },
        childRoutes: require('v02/back-office/BackOfficeRoutes').ofTenant(this.tenant, this.store),
      },
    ];
  }
}
