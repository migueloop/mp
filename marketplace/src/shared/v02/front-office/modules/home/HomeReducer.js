import CONSTANTS from './HomeConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_CAROUSEL_IMAGES:
      return state.setIn(['carouselImages', 'all'], fromJS(action.payload));
    default:
      return state;
  }
}
