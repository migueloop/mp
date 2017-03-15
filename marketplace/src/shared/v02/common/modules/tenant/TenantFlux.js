import reducer from './TenantReducer';
import Actions from './TenantActions';
import CONSTANTS from './TenantConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
