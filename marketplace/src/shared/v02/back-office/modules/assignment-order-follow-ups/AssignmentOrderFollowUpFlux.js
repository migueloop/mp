import reducer from './AssignmentOrderFollowUpReducer';
import Actions from './AssignmentOrderFollowUpActions';
import CONSTANTS from './AssignmentOrderFollowUpConstants';
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
