import CONSTANTS from './SeoConstants';
import { fromJS } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.SET_URL:
      return state.set('url', action.payload);
    case CONSTANTS.SET_FB_ID:
      return state.set('fb_id', action.payload);
    case CONSTANTS.SET_SITE:
      return state.set('site', fromJS(action.payload));
    case CONSTANTS.SET_PAGE:
      return state.set('page', fromJS(action.payload));
    default:
      return state;
  }
};
