import { ACTION } from 'flux/actions';
import { Map, fromJS, List } from 'immutable';

const INITIAL_STATE = Map({ seo: Map(), languages: List(), meta: List() });

export default function SettingsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ACTION.SETTINGS.SET_SEO:
      return state.set('seo', fromJS(action.seo));
    case ACTION.SETTINGS.SET_LANGUAGES:
      return state.set('languages', fromJS(action.languages));
    default:
      return state;
  }
}
