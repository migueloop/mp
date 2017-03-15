import reducer from './ProductReducer';
import Actions from './ProductActions';
import CONSTANTS from './ProductConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  latest: List(),
  all: List(),
  current: Map({
    keywords: List(),
    domains: List(),
    resources: List(),
    bundles: List(),
    offers: List(),
  }),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
