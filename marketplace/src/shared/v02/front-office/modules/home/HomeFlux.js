import reducer from './HomeReducer';
import Actions from './HomeActions';
import CONSTANTS from './HomeConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  carouselImages: Map({
    all: List(),
    current: Map(),
  }),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
