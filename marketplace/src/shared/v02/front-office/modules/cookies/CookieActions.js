import CONSTANTS from './CookieConstants';

export default class CookieActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  setCookieDisclaimer = (payload) => {
    return {
      type: CONSTANTS.SET,
      payload,
    };
  }
}
