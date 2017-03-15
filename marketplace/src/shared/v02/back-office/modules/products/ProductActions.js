import CONSTANTS from './ProductConstants';
import Repository from './ProductRepository';
const getId = alias => {
  return parseInt(alias.split('-').pop(), 10);
};

const requestProducts = () => {
  return {
    type: CONSTANTS.REQUEST_PRODUCTS,
    payload: {
      isFetching: true,
      items: [],
    },
  };
};

const receiveProducts = items => {
  return {
    type: CONSTANTS.RECEIVE_PRODUCTS,
    payload: {
      isFetching: false,
      items,
    },
  };
};

const requestProduct = () => {
  return {
    type: CONSTANTS.REQUEST_PRODUCT,
    payload: {
      isFetching: true,
      item: {},
    },
  };
};

const receiveProduct = item => {
  return {
    type: CONSTANTS.RECEIVE_PRODUCT,
    payload: {
      isFetching: false,
      item,
    },
  };
};

export default class ProductActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }

  fetchAll = (params, query) => {
    return dispatch => {
      dispatch(requestProducts());
      this.repository.fetchAll()
      .then(products => dispatch(receiveProducts(products)));
    };
  }

  fetchOne = (params, query) => {
    const id = params.id || getId(params.alias);
    return dispatch => {
      dispatch(requestProduct());
      this.repository.fetchOne(id)
      .then(product => dispatch(receiveProduct(product)));
    };
  }

  fetchLatest = (amount) => {
    return {
      type: CONSTANTS.FETCH_LATEST,
      payload: this.repository.fetchLatest(amount),
    };
  }

  fetchOffers = (id) => {
    return {
      type: CONSTANTS.FETCH_OFFERS_OF_PRODUCT,
      id,
      payload: this.repository.fetchOffers(id),
    };
  }
  update = product => {
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
