import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case ACTION.LOG_COMMENT.SET_ALL:
      return fromJS(action.payload);
    case ACTION.LOG_COMMENT.ADD:
      return state.push(fromJS(action.payload));
    default:
      return state;
  }
};
