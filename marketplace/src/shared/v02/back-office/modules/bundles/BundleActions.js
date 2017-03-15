import CONSTANTS from './BundleConstants';
import Repository from './BundleRepository';

const getId = alias => {
  return parseInt(alias.split('-').pop(), 10);
};

export default class BundleActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchOne = (params, query) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(params.id || getId(params.alias)),
    };
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
  Create = (oBundle) => {
    return {
      type: CONSTANTS.CREATE,
      payload: this.repository.create(oBundle)
    };
  }
  Update = (oBundle) => {
    return {
      type: CONSTANTS.UPDATE,
      payload: this.repository.update({ values: Object.assign({}, oValues), filters: { id } })
    }
  }
}
