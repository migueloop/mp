import CONSTANTS from './AnalyticsConstants';
import { Map } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.SET:
      return Map(action.payload);
    default:
      return state;
  }
};
