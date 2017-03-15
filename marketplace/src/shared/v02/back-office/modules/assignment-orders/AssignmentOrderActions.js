import CONSTANTS from './AssignmentOrderConstants';
import Repository from './AssignmentOrderRepository';

export default class AssignmentActions {
  constructor(tenant, token) {
    this.repository = new Repository(tenant, token);
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
  fetchOne = (id, extra) => {
    return {
      type: CONSTANTS.FETCH_CURRENT,
      payload: this.repository.fetchOne(id, extra),
    };
  }
}
