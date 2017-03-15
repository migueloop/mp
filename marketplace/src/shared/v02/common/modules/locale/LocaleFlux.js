import reducer from './LocaleReducer';
import Actions from './LocaleActions';
import CONSTANTS from './LocaleConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({
  language: 'en',
  messages: {},
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
