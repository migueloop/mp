import CONSTANTS from './BundleConstants';
import Repository from './BundleRepository';


export default class BundleActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchOne = (id) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(id),
    };
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
}
