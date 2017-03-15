import { ACTION } from 'flux/actions';
import { Map } from 'immutable';

export default function SocketsReducer(state = Map(), action = {}) {
  switch (action.type) {
    case ACTION.LISTEN:
      return state.set(action.guid, action.events);
    case ACTION.UNLISTEN:
      return state.delete(action.guid);
    default:
      return state;
  }
}
