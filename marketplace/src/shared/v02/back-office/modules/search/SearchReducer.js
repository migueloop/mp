import CONSTANTS from './SearchConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SEARCH:
      return state.set('all', fromJS(action.payload));
    default:
      return state;
  }
}
