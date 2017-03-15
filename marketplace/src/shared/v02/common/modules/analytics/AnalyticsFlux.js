import reducer from './AnalyticsReducer';
import Actions from './AnalyticsActions';
import CONSTANTS from './AnalyticsConstants';
import { Map } from 'immutable';

const INITIAL_STATE = Map({
  piwik_site_id: null,
  piwik_instance_url: null,
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
