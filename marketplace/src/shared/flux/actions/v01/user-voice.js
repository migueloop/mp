/**
 * Created by cjgm on 5/19/16.
 */
import { ACTION } from 'flux/actions';

export default class UserVoice {

  constructor(tenant) {
    this.tenant = tenant;
  }

  setIntercomAppId(intercom_app_id) {
    return Promise.resolve({
      type: ACTION.USERVOICE.SET_INTERCOM_APP_ID,
      intercom_app_id,
    });
  }

  setUserPrivateKey(userPrivateKey) {
    return Promise.resolve({
      type: ACTION.USERVOICE.SET_USER_PRIVATE_KEY,
      userPrivateKey,
    });
  }

}
