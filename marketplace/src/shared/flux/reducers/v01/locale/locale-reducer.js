import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case ACTION.LOCALE.SET:
      return fromJS({ language: action.language, messages: action.messages });
    default:
      return state;
  }
}
