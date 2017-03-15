import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function AuthorReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.USER.AUTHOR.SET_ALL:
      return fromJS(action.authors);
    case ACTION.USER.AUTHOR.SET_ONE:
      const exists = state.toJS().findIndex(author => author.id === action.author.id);
      if (exists !== -1) {
        return state.set(exists, fromJS(action.author));
      }
      return state.push(fromJS(action.author));
    default:
      return state;
  }
}
