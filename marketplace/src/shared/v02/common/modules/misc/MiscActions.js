import CONSTANTS from './MiscConstants';
import Repository from './MiscRepository';

export default class MiscActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchCompanies = () => {
    return {
      type: CONSTANTS.FETCH_COMPANIES,
      payload: this.repository.fetchCompanies(),
    };
  }
  fetchKeywords = () => {
    return {
      type: CONSTANTS.FETCH_KEYWORDS,
      payload: this.repository.fetchKeywords(),
    };
  }
  fetchPlatforms = () => {
    return {
      type: CONSTANTS.FETCH_PLATFORMS,
      payload: this.repository.fetchPlatforms(),
    };
  }
}
