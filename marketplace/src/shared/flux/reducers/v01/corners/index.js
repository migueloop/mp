import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function CornersReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.CORNER.SET_ALL:
      return fromJS(action.corners);
    case ACTION.CORNER.UPDATE_BEST_PRODUCT:
      return fromJS(state.toJS().map(corner => {
        if (parseInt(corner.id, 10) === parseInt(action.bestProduct.cornerId, 10)) {
          corner.products = corner.products.reduce((prev, product) => {
            if (parseInt(product.highlight_product, 10) === parseInt(action.bestProduct.position, 10)) {
              product.highlight_product = 0;
            }
            if (parseInt(product.id, 10) === parseInt(action.bestProduct.productId, 10)) {
              product.highlight_product = action.bestProduct.position;
            }
            prev.push(product);
            return prev;
          }, []);
        }
        return corner;
      }));
    case ACTION.CORNER.CREATE:
      return state.push(fromJS(action.corner));
    case ACTION.CORNER.DELETE:
      return state.delete(state.findIndex(c => parseInt(c.get('id'), 10) === parseInt(action.cornerId, 10)));
    case ACTION.CORNER.EDIT:
      return fromJS(state.toJS().map(corner => {
        if (parseInt(corner.id, 10) === parseInt(action.corner.id, 10)) {
          return Object.assign(corner, action.corner);
        }
        return corner;
      }));
    default:
      return state;
  }
}
