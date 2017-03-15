import reducer from './StockReducer';
import Actions from './StockActions';
import CONSTANTS from './StockConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
  current: Map(),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
