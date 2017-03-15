import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function HomeCarouselReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.HOME_CAROUSEL.GETALLSLIDES:
      return fromJS(action.slides);
    case ACTION.HOME_CAROUSEL.GETPAGE:
      return fromJS(action.page);
    default:
      return state;
  }
}
