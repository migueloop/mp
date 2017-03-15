import CONSTANTS from './AnalyticsConstants';

export default class AnalyticsActions {
  set = (payload) => {
    return {
      type: CONSTANTS.SET,
      payload,
    };
  }
}
