import CONSTANTS from './SettingsConstants';
import Repository from './SettingsRepository';

export default class SettingsActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchAll = () => {
    return {
      type: CONSTANTS.FETCH_ALL,
      payload: this.repository.fetchAll(),
    };
  }
  fetchLatest = (amount) => {
    return {
      type: CONSTANTS.FETCH_LATEST,
      payload: this.repository.fetchLatest(amount),
    };
  }
  fetchOne = (id) => {
    return {
      type: CONSTANTS.FETCH_ONE,
      payload: this.repository.fetchOne(id),
    };
  }
  fetchOffers = (id) => {
    return {
      type: CONSTANTS.FETCH_OFFERS_OF_PRODUCT,
      id,
      payload: this.repository.fetchOffers(id),
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
