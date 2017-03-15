import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function AssignmentOrdersReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.ASSIGNMENT_ORDER.SET.ALL:
      return fromJS(action.assignmentOrders);
    case ACTION.ASSIGNMENT_ORDER.UPDATE.ONE:
      const assignmentOrders = state.toJS();
      const newAssignmentOrder = action.assignmentOrder;
      const assignmentOrderMatch = assignmentOrders.find(order => order.id === newAssignmentOrder.id);
      if (!assignmentOrderMatch) { return state;}
      const matchingIndex = assignmentOrders.indexOf(assignmentOrderMatch);
      assignmentOrders[matchingIndex] = newAssignmentOrder;
      return fromJS(assignmentOrders);
    case ACTION.ASSIGNMENT.GDP.GET_ITEM_INFO:
      return state.map(assignmentOrder => {
        const info = action.payload.find(info => +info.item.id === +assignmentOrder.get('id'));
        if (!info) return assignmentOrder;
        return assignmentOrder.set('gdpInfo', fromJS(info.gdpInfo));
      });
    default:
      return state;
  }
}
