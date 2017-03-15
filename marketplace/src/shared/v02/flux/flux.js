import Common from 'v02/common/CommonFlux';
import FrontOffice from 'v02/front-office/FrontOfficeFlux';
import BackOffice from 'v02/back-office/BackOfficeFlux';
import { Map } from 'immutable';

const INITIAL_STATE = Map({
  common: Common.INITIAL_STATE,
  frontOffice: FrontOffice.INITIAL_STATE,
  backOffice: BackOffice.INITIAL_STATE,
});

export class Actions {
  constructor(tenant, token) {
    this.tenant = tenant;
    this.token = token;
  }
  get Common() {
    return new Common.Actions(this.tenant, this.token);
  }
  get FrontOffice() {
    return new FrontOffice.Actions(this.tenant, this.token);
  }
  get BackOffice() {
    return new BackOffice.Actions(this.tenant, this.token);
  }
}

export function reducer(previousState = INITIAL_STATE, action) {
  return previousState
  .update('frontOffice', state => FrontOffice.reducers(state, action))
  .update('backOffice', state => BackOffice.reducers(state, action))
  .update('common', state => Common.reducers(state, action));
}
