import CONSTANTS from './UserConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SET_ALL:
      return state.set('all', fromJS(action.payload));
    default:
      return state;
  }
}
