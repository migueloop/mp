import CONSTANTS from './BundleConstants';
import { fromJS } from 'immutable';

export default function (state = '', action = {}) {
  switch (action.type) {
    case CONSTANTS.FETCH_ALL:
      return state.set('all', fromJS(action.payload));
    case CONSTANTS.FETCH_ONE:
      return state.set('current', fromJS(action.payload));
    case CONSTANTS.CREATE:
      return state.set('current', fromJS(action.payload));
    case CONSTANTS.UPDATE:
      return state.set('current', fromJS(action.payload));
    default:
      return state;
  }
}
