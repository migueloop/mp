import Assignments from 'v02/back-office/modules/assignments/AssignmentFlux';
import Users from 'v02/back-office/modules/users/UserFlux';
import AssignmentOrders from 'v02/back-office/modules/assignment-orders/AssignmentOrderFlux';
import AssignmentsOrderFollowUps from 'v02/back-office/modules/assignment-order-follow-ups/AssignmentOrderFollowUpFlux';
import Search from 'v02/back-office/modules/search/SearchFlux';
import Products from 'v02/back-office/modules/products/ProductFlux';
import Domains from 'v02/back-office/modules/domains/DomainFlux';
import Bundles from 'v02/back-office/modules/bundles/BundleFlux';
import Settings from 'v02/back-office/modules/settings/SettingsFlux';
import Features from 'v02/back-office/modules/features/FeatureFlux';
import { Map } from 'immutable';

export class Actions {
  constructor(tenant, token) {
    this.tenant = tenant;
    this.token = token;
  }
  get Assignments() {
    return new Assignments.Actions(this.tenant, this.token);
  }
  get AssignmentsOrder() {
    return new AssignmentOrders.Actions(this.tenant, this.token);
  }
  get AssignmentsOrderFollowUps() {
    return new AssignmentsOrderFollowUps.Actions(this.tenant, this.token);
  }
  get Search() {
    return new Search.Actions(this.tenant, this.token);
  }
  get Users() {
    return new Users.Actions(this.tenant, this.token);
  }
  get Products() {
    return new Products.Actions(this.tenant);
  }
  get Domains() {
    return new Domains.Actions(this.tenant);
  }
  get Bundles() {
    return new Bundles.Actions(this.tenant);
  }
  get Settings() {
    return new Settings.Actions(this.tenant);
  }
  get Features() {
    return new Features.Actions(this.tenant);
  }
}

export function reducers(previousState, action) {
  return previousState
  .update('assignments', state => Assignments.reducer(state, action))
  .update('assignmentsOrder', state => AssignmentOrders.reducer(state, action))
  .update('assignmentsOrderFollowUps', state => AssignmentsOrderFollowUps.reducer(state, action))
  .update('searchResults', state => Search.reducer(state, action))
  .update('users', state => Users.reducer(state, action))
  .update('products', state => Products.reducer(state, action))
  .update('bundles', state => Bundles.reducer(state, action))
  .update('domains', state => Domains.reducer(state, action))
  .update('settings', state => Settings.reducer(state, action))
  .update('features', state => Features.reducer(state, action));
}

export const INITIAL_STATE = Map({
  assignments: Assignments.INITIAL_STATE,
  assignmentsOrder: AssignmentOrders.INITIAL_STATE,
  assignmentsOrderFollowUps: AssignmentsOrderFollowUps.INITIAL_STATE,
  searchResults: Search.INITIAL_STATE,
  users: Users.INITIAL_STATE,
  products: Products.INITIAL_STATE,
  bundles: Bundles.INITIAL_STATE,
  domains: Domains.INITIAL_STATE,
  settings: Settings.INITIAL_STATE,
  features: Features.INITIAL_STATE,
});

export default {
  Actions,
  reducers,
  INITIAL_STATE,
};
