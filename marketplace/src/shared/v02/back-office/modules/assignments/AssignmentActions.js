import CONSTANTS from './AssignmentConstants';
import Repository from './AssignmentRepository';

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
  fetchOneExtra =(id) => {
    return {
      type: CONSTANTS.FETCH_CURRENT,
      payload: this.repository.fetchOneExtra(id),
    };
  }
  fetchOne = (id) => {
    return {
      type: CONSTANTS.FETCH_CURRENT,
      payload: this.repository.fetchOne(id),
    };
  }
  delete = (id) => {
    return {
      type: CONSTANTS.DELETE,
      payload: this.repository.delete(id),
    };
  }
  demandValidation = (id) => {
    return {
      type: CONSTANTS.DEMAND_VALIDATION,
      payload: this.repository.demandValidation(id),
    };
  }
  retire = (id) => {
    return {
      type: CONSTANTS.RETIRE,
      payload: this.repository.retire(id),
    };
  }
  publish = (id, userToPublish, employee) => {
    return {
      type: CONSTANTS.PUBLISH,
      payload: this.repository.publish(id, userToPublish, employee),
    };
  }
}
