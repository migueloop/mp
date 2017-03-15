import reducer from './AssignmentReducer';
import Actions from './AssignmentActions';
import CONSTANTS from './AssignmentConstants';
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
