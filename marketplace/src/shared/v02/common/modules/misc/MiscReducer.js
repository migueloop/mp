import CONSTANTS from './MiscConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMPANIES:
      return state.set('companies', fromJS(action.payload));
    case CONSTANTS.FETCH_KEYWORDS:
      return state.set('keywords', fromJS(action.payload));
    case CONSTANTS.FETCH_PLATFORMS:
      return state.set('platforms', fromJS(action.payload));
    default:
      return state;
  }
}
