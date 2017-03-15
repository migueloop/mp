import reducer from './SeoReducer';
import Actions from './SeoActions';
import CONSTANTS from './SeoConstants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  site: Map({
    title: '',
  }),
  page: Map({
    title: 'Marketplace',
    meta: List(),
  }),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
