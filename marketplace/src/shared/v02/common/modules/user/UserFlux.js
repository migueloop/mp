import reducer from './UserReducer';
import Actions from './UserActions';
import CONSTANTS from './UserConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
