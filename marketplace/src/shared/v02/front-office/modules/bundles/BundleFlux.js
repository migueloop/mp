import reducer from './BundleReducer';
import Actions from './BundleActions';
import CONSTANTS from './BundleConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
  current: Map({
    keywords: List(),
    domains: List(),
    resources: List(),
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
