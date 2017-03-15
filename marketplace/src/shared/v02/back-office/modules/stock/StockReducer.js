import CONSTANTS from './StockConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    // case CONSTANTS.FETCH_ALL:
    //   return state.set('all', fromJS(action.payload));
    // case CONSTANTS.FETCH_LATEST:
    //   return state.set('latest', fromJS(action.payload));
    // case CONSTANTS.FETCH_ONE:
    //   return state.set('current', fromJS(action.payload));
    // case CONSTANTS.UPDATE:
    //   // Update item in list and current item if necessary.
    //   const indexMatchInAll = state.get('all').findIndex(product => product.get('id') === action.payload.id);
    //   if (indexMatchInAll !== -1) {
    //     state.update(indexMatchInAll, fromJS(action.payload));
    //   }
    //   const matchCurrent = state.get('current').get('id') === action.payload.id;
    //   if (matchCurrent) {
    //     state.set('current', fromJS(action.payload));
    //   }
    //   return state;
    // case CONSTANTS.FETCH_OFFERS_OF_PRODUCT:
    //   return state.update('current', product => {
    //     if (product.get('id') !== action.id) {
    //       return product;
    //     }
    //     return product.set('offers', fromJS(action.payload));
    //   });
    default:
      return state;
  }
}
