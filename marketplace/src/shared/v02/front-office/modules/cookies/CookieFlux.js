import reducer from './CookieReducer';
import Actions from './CookieActions';
import CONSTANTS from './CookieConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({
  accepted: false,
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
