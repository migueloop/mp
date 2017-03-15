import CONSTANTS from './DomainConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH:
      return state.set('all', fromJS(action.payload));
    case CONSTANTS.FETCH_ONE:
      return state.set('current', fromJS(action.payload));
    case CONSTANTS.FETCH_PRODUCTS:
      return state.update('current', domain => domain.set('products', fromJS(action.payload)));
    case CONSTANTS.FETCH_BUNDLES:
      return state.update('current', domain => domain.set('bundles', fromJS(action.payload)));
    default:
      return state;
  }
}
