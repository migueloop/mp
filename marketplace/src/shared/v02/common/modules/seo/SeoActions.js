import CONSTANTS from './SeoConstants';
import Repository from './SeoRepository';

export default class SeoActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  fetchSite = () => {
    return {
      type: CONSTANTS.SET_SITE,
      payload: new Repository(this.tenant).fetch(),
    };
  }

  setPage = (payload) => {
    return {
      type: CONSTANTS.SET_PAGE,
      payload,
    };
  }

  setUrl = (payload) => {
    return {
      type: CONSTANTS.SET_URL,
      payload,
    };
  }

  setFbId = (payload) => {
    return {
      type: CONSTANTS.SET_FB_ID,
      payload,
    };
  }
}
