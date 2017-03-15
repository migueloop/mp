import { ACTION } from 'flux/actions';
import { fromJS, Map } from 'immutable';

export default function MiscReducer(state = Map(), action = {}) {
  switch (action.type) {
    case ACTION.MISC.SET_KEYWORDS:
      return state.set('keywords', fromJS(action.keywords));
    case ACTION.MISC.SET_PLATFORMS:
      return state.set('platforms', fromJS(action.platforms));
    case ACTION.MISC.SET_ACTIVITY_FIELDS:
      return state.set('activityFields', fromJS(action.activityFields));
    case ACTION.MISC.SET_COMPANIES:
      return state.set('companies', fromJS(action.companies));
    default:
      return state;
  }
}
