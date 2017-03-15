import Bundles from 'v02/front-office/modules/bundles/BundleFlux';
import Domains from 'v02/front-office/modules/domains/DomainFlux';
import Home from 'v02/front-office/modules/home/HomeFlux';
import UserCorner from 'v02/front-office/modules/user-corner/UserCornerFlux';
import Products from 'v02/front-office/modules/products/ProductFlux';
import Cookie from 'v02/front-office/modules/cookies/CookieFlux';
import { Map } from 'immutable';

export class Actions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  get Products() {
    return new Products.Actions(this.tenant);
  }
  get Domains() {
    return new Domains.Actions(this.tenant);
  }
  get UserCorner() {
    return new UserCorner.Actions(this.tenant);
  }
  get Bundles() {
    return new Bundles.Actions(this.tenant);
  }
  get Cookie() {
    return new Cookie.Actions(this.tenant);
  }
  get Home() {
    return new Home.Actions(this.tenant);
  }
}

export function reducers(previousState, action) {
  return previousState
  .update('bundles', state => Bundles.reducer(state, action))
  .update('domains', state => Domains.reducer(state, action))
  .update('home', state => Home.reducer(state, action))
  .update('userCorner', state => UserCorner.reducer(state, action))
  .update('cookie', state => Cookie.reducer(state, action))
  .update('products', state => Products.reducer(state, action));
}

export const INITIAL_STATE = Map({
  domains: Domains.INITIAL_STATE,
  home: Home.INITIAL_STATE,
  products: Products.INITIAL_STATE,
  userCorner: UserCorner.INITIAL_STATE,
  bundles: Bundles.INITIAL_STATE,
  cookie: Cookie.INITIAL_STATE,
});

export default {
  Actions,
  reducers,
  INITIAL_STATE,
};
