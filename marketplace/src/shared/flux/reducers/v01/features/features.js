/**
 * Created by cjgm on 6/27/16.
 */
import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case ACTION.FEATURES.TENANT:
      return fromJS(action.features);
    default:
      return state;
  }
};
