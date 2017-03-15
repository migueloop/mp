import CONSTANTS from './UserNotificationConstants';
import Repository from './UserNotificationRepository';

export default class UserNotificationActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
  fetchOne = (id) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(id),
    };
  }
}
