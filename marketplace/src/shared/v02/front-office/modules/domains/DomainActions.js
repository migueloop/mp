import CONSTANTS from './DomainConstants';
import Repository from './DomainRepository';

export default class DomainActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH,
      payload: this.repository.fetch(),
    };
  }
  fetchOne = (id) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(id),
    };
  }
  fetchProducts = (id) => {
    return {
      type: CONSTANTS.FETCH_PRODUCTS,
      payload: this.repository.fetchProducts(id),
    };
  }
  fetchBundles = (id) => {
    return {
      type: CONSTANTS.FETCH_BUNDLES,
      payload: this.repository.fetchBundles(id),
    };
  }
}
