import CONSTANTS from './UserVoiceConstants';

export default class UserVoiceActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  setUserPrivateKey = (payload) => {
    return {
      type: CONSTANTS.SET_USER_PRIVATE_KEY,
      payload,
    };
  }
  setIntercomAppId = (payload) => {
    return {
      type: CONSTANTS.SET_INTERCOM_APP_ID,
      payload,
    };
  }
}
