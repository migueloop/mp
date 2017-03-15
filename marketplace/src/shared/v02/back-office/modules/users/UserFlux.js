import reducer from './UserReducer';
import Actions from './UserActions';
import CONSTANTS from './UserConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
  current: Map(),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
