import Repository from './UserRepository';
import CONSTANTS from './UserConstants';

export default class UserActions {
  constructor(tenant, token) {
    this.repository = new Repository(tenant, token);
  }
  // TODO: remove this getter
  get All() {
    return {
      type: CONSTANTS.SET_ALL,
      payload: this.repository.getAll(),
    };
  }
  // TODO: all methods need to be bound
  fetchAll = () => {
    return {
      type: CONSTANTS.SET_ALL,
      payload: this.repository.getAll(),
    };
  }
}
