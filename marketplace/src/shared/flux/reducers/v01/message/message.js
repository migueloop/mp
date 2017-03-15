import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function MessageReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.MESSAGE.SEND:
      return state.push(fromJS(action.message));
    default:
      return state;
  }
}
