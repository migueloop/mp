import CONSTANTS from './SearchConstants';
import Repository from './SearchRepository';

export default class AssignmentActions {
  constructor(tenant, token) {
    this.repository = new Repository(tenant, token);
  }
  search = (query) => {
    return {
      type: CONSTANTS.SEARCH,
      payload: this.repository.search(query),
    };
  }
}
