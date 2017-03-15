/**
 * Created by cjgm on 5/19/16.
 */
import { ACTION } from 'flux/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTION.USERVOICE.SET_INTERCOM_APP_ID:
      return state.set('intercom_app_id', action.intercom_app_id);
    case ACTION.USERVOICE.SET_USER_PRIVATE_KEY:
      return state.set('user_private_key', action.userPrivateKey);
    default:
      return state;
  }
};
