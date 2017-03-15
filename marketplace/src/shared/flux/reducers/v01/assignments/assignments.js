/**
 * Created by cjgm on 5/25/16.
 */
import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';
import { clean } from 'helpers/string-utils';

export default function AssignmentsReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.ASSIGNMENT.ADD:
      return state.push(fromJS(action.assignment));
    case ACTION.ASSIGNMENT.COMPLETE:
      return fromJS(state.toJS().map(oAssignment => {
        if (+oAssignment.id === +action.assignment.id) {
          for (const oItem of oAssignment.items) {
            (oItem.id_po_system === action.assignment.id_po_system) && (oItem.completed = 1);
          }
        }
        return oAssignment;
      }));
    case ACTION.ASSIGNMENT.SET.ALL:
      return fromJS(action.assignments);
    case ACTION.ASSIGNMENT.UPDATE:
      return fromJS(state.toJS().map(oAssignment => {
        if (parseInt(oAssignment.id, 10) === parseInt(action.assignment.id, 10)) {
          // if update state because we change it in the assignments list
          if (action.assignment.state) {
            oAssignment.id_state = action.assignment.id_state;
            oAssignment.state = action.assignment.state;
          } else { // else update fields (means that we have edited the assignment)
            Object.keys(action.assignment.oValues).forEach(sKey => {
              // if we are updating the description
              if (sKey === 'description') {
                oAssignment.alias = `${clean(action.assignment.oValues.description)}-${oAssignment.id}`;
              }
              oAssignment[sKey] = action.assignment.oValues[sKey];
            });
          }

          // see if id_workflow_instance
          if (action.assignment.id_workflow_instance) {
            oAssignment.id_workflow_instance = action.assignment.id_workflow_instance;
          }
        }
        return oAssignment;
      }));
    default:
      return state;
  }
}
