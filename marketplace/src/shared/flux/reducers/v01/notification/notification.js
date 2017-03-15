import { ACTION } from 'flux/actions';

export default function NotificationReducer(state = {}, action = {}) {
  switch (action.type) {
    case ACTION.NOTIFICATE:
      return { add: action.notification.addNotification, remove: action.notification.removeNotification };
    default:
      return state;
  }
}
