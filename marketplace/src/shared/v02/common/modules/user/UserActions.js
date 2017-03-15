import CONSTANTS from './UserConstants';
import Repository from './UserRepository';

export default class UserActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  login = (payload) => {
    return {
      type: CONSTANTS.LOGIN,
      payload: new Repository(this.tenant).login(payload),
    };
  }

  logout(payload) {
    return {
      type: CONSTANTS.LOGOUT,
      payload: new Repository(this.tenant).logout(payload),
    };
  }
}
