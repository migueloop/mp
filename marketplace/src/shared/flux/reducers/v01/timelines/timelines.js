/**
 * Created by cjgm on 5/19/16.
 */
import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case ACTION.TIMELINES.SET_ALL:
      return fromJS(action.timelines);
    case ACTION.TIMELINES.SET_ITEM_CURRENT_STEPS:
      return state;
    default:
      return state;
  }
};
