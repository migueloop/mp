import CONSTANTS from './UserVoiceConstants';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SET_INTERCOM_APP_ID:
      return state.set('intercomAppId', action.payload);
    case CONSTANTS.SET_USER_PRIVATE_KEY:
      return state.set('userPrivateKey', action.payload);
    default:
      return state;
  }
}
