import reducer from './MiscReducer';
import Actions from './MiscActions';
import CONSTANTS from './MiscConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  keywords: List(),
  companies: List(),
  platforms: List(),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
