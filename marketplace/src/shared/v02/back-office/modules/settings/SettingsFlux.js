import reducer from './SettingsReducer';
import Actions from './SettingsActions';
import CONSTANTS from './SettingsConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  languages: List(),
  seo: Map(),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
