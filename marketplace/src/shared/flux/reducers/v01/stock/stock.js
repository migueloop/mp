/**
 * Created by cjgm on 5/19/16.
 */
import { ACTION } from 'flux/actions';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case ACTION.STOCK.SET_ALL:
      return fromJS(action.payload);
    case ACTION.STOCK.ADD:
      console.log('ACTION.STOCK.ADD', action);
      return state.push(fromJS(action.payload));
    default:
      return state;
  }
};
