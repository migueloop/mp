import CONSTANTS from './AssignmentOrderFollowUpConstants';
import Repository from './AssignmentOrderFollowUpRepository';

export default class AssignmentActions {
  constructor(tenant, token) {
    this.repository = new Repository(tenant, token);
  }
  fetch = () => {
    return {
      type: CONSTANTS.FETCH,
      payload: this.repository.fetch(),
    };
  }
  fetchOne = (id, params = {}) => {
    return {
      type: CONSTANTS.FETCH_CURRENT,
      payload: this.repository.fetchOne(id, params),
    };
  }
}
