import reducer from './FeatureReducer';
import Actions from './FeatureActions';
import CONSTANTS from './FeatureConstants';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  all: Map(),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
