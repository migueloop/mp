import reducer from './UserCornerReducer';
import Actions from './UserCornerActions';
import CONSTANTS from './UserCornerConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  current: Map({
    keywords: List(),
    products: List(),
    bundles: List(),
  }),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
