import reducer from './AssignmentOrderReducer';
import Actions from './AssignmentOrderActions';
import CONSTANTS from './AssignmentOrderConstants';
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
