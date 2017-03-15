import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  const sortByCreatedAt = (a, b) => b.created_at - a.created_at;
  switch (action.type) {
    case ACTION.USER_NOTIFICATION.SET_ALL:
    case ACTION.USER_NOTIFICATION.VIEW_ALL:
    case ACTION.USER_NOTIFICATION.CLICK_ALL:
      return fromJS(action.payload);
    case ACTION.USER_NOTIFICATION.CREATE_PRODUCT_PUBLICATION_REQUEST_NOTIFICATION:
    case ACTION.USER_NOTIFICATION.CREATE_BUNDLE_PUBLICATION_REQUEST_NOTIFICATION:
    case ACTION.USER_NOTIFICATION.CREATE_ASSIGNMENT_ORDER_ACTION_NOTIFICATION:
    case ACTION.USER_NOTIFICATION.CREATE_ASSIGNMENT_PUBLICATION_REQUEST_NOTIFICATION:
      const currentState = state.toJS();
      const newState = currentState.concat(action.payload).sort(sortByCreatedAt);
      return fromJS(newState);
    case ACTION.USER_NOTIFICATION.ADD:
      return state.push(fromJS(action.payload));
    case ACTION.USER_NOTIFICATION.CLICK:
    case ACTION.USER_NOTIFICATION.VIEW:
      const notifications = state.toJS().slice();
      const index = notifications.indexOf(notifications.find(item => item.id === action.payload.id));
      notifications[index] = action.payload;
      return fromJS(notifications);
    default:
      return state;
  }
};
