import reducer from './DomainReducer';
import Actions from './DomainActions';
import CONSTANTS from './DomainConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
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
