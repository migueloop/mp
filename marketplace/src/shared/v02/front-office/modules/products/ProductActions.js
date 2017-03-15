import CONSTANTS from './ProductConstants';
import Repository from './ProductRepository';

const getId = alias => {
  return parseInt(alias.split('-').pop(), 10);
};
export default class ProductActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchAll = (params, query) => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
  fetchLatest = (params, query) => {
    const amount = 5;
    return {
      type: CONSTANTS.FETCH_LATEST,
      payload: this.repository.fetchLatest(amount),
    };
  }
  fetchOne = (params, query) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(getId(params.alias)),
    };
  }
  fetchOffers = (params, query) => {
    return {
      type: CONSTANTS.FETCH_OFFERS_OF_PRODUCT,
      payload: this.repository.fetchOffers(getId(params.alias)),
    };
  }
  update = (product) => {
    return {
      type: CONSTANTS.UPDATE,
      payload: this.repository.update(product),
    };
  }
  // TODO: this should have a payload
  edit = (id, values, product) => {
    return {
      type: CONSTANTS.PRODUCT.EDIT,
      product,
    };
  }
}
