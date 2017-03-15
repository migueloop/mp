import reducer from './UserVoiceReducer';
import Actions from './UserVoiceActions';
import CONSTANTS from './UserVoiceConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({
  intercomAppId: null,
  userPrivateKey: null,
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
