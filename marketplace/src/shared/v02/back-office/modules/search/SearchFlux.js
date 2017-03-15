import reducer from './SearchReducer';
import Actions from './SearchActions';
import CONSTANTS from './SearchConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
  current: Map({}),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
