import reducer from './ProductReducer';
import Actions from './ProductActions';
import CONSTANTS from './ProductConstants';
import { Map, List, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  latest: List(),
  all: Map({
    items: List(),
    isFetching: fromJS(false),
  }),
  // TODO: we should have the complete "empty" object here, in case it is used before the data is there
  current: Map({
    item: Map({
      keywords: List(),
      domains: List(),
      resources: List(),
      bundles: List(),
      offers: List(),
      availableFeatures: List(),
      links: List(),
      owner: Map(),
    }),
    isFetching: fromJS(false),
  }),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
