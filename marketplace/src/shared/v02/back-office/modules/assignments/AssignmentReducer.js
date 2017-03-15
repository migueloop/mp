import CONSTANTS from './AssignmentConstants';
import { fromJS, Map } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH:
      return state.set('all', fromJS(action.payload));
    case CONSTANTS.FETCH_CURRENT:
      return state.set('current', fromJS(action.payload));
    case CONSTANTS.DELETE:
      return state.set('current', Map())
        .update('all', assignments => assignments.filter(assignment => parseInt(assignment.get('id'), 10) !== parseInt(action.payload.id, 10)));
    case CONSTANTS.DEMAND_VALIDATION:
    case CONSTANTS.RETIRE:
    case CONSTANTS.PUBLISH:
      // console.log('REDUCERS:PUBLISH', action);
      const newState = state.update('current', assignment => {
        if (parseInt(assignment.get('id'), 10) !== parseInt(action.payload.id, 10)) {
          return assignment;
        }
        return assignment.merge(fromJS(action.payload));
      })
      .update('all', assignments => assignments.map(assignment => assignment.update(oldAssignment => {
        if (parseInt(oldAssignment.get('id'), 10) !== parseInt(action.payload.id, 10)) {
          return oldAssignment;
        }
        return oldAssignment.merge(fromJS(action.payload));
      })));
      // console.log('newState', newState.toJS());
      return newState;
    default:
      return state;
  }
}
