import Analytics from 'v02/common/modules/analytics/AnalyticsFlux';
import Locale from 'v02/common/modules/locale/LocaleFlux';
import Misc from 'v02/common/modules/misc/MiscFlux';
import Seo from 'v02/common/modules/seo/SeoFlux';
import Tenant from 'v02/common/modules/tenant/TenantFlux';
import UserVoice from 'v02/common/modules/user-voice/UserVoiceFlux';
import User from 'v02/common/modules/user/UserFlux';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  analytics: Analytics.INITIAL_STATE,
  locale: Locale.INITIAL_STATE,
  misc: Misc.INITIAL_STATE,
  tenant: Tenant.INITIAL_STATE,
  seo: Seo.INITIAL_STATE,
  user: User.INITIAL_STATE,
  userVoice: UserVoice.INITIAL_STATE,
});

export class Actions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  get Analytics() {
    return new Analytics.Actions(this.tenant);
  }
  get Locale() {
    return new Locale.Actions(this.tenant);
  }
  get Tenant() {
    return new Tenant.Actions(this.tenant);
  }
  get Seo() {
    return new Seo.Actions(this.tenant);
  }
  get UserVoice() {
    return new UserVoice.Actions(this.tenant);
  }
  get Misc() {
    return new Misc.Actions(this.tenant);
  }
  get User() {
    return new User.Actions(this.tenant);
  }
}

export function reducers(previousState, action) {
  return previousState
  .update('analytics', state => Analytics.reducer(state, action))
  .update('tenant', state => Tenant.reducer(state, action))
  .update('seo', state => Seo.reducer(state, action))
  .update('userVoice', state => UserVoice.reducer(state, action))
  .update('misc', state => Misc.reducer(state, action))
  .update('user', state => User.reducer(state, action))
  .update('locale', state => Locale.reducer(state, action));
}

export default {
  Actions,
  reducers,
  INITIAL_STATE,
};
