import CONSTANTS from './AssignmentOrderFollowUpConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH:
      return state.set('all', fromJS(action.payload));
    case CONSTANTS.FETCH_CURRENT:
      return state.set('current', fromJS(action.payload));
    default:
      return state;
  }
}
