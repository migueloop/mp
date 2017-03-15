import { ACTION } from 'flux/actions';
import cookie from 'react-cookie';

import Promise from 'bluebird';

export default class Cookie {
  constructor(tenant) {
    this.tenant = tenant;
  }

  setCookieDisclaimer(value) {
    return Promise.resolve({
      type: ACTION.ACCEPT_COOKIE,
      value,
    });
  }

}
