import CONSTANTS from './FeatureConstants';
import { fromJS } from 'immutable';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SET_ALL:
      console.log('CONSTANTS.SET_ALL::action', action);
      return state.set('all', fromJS(action.payload));
    default:
      return state;
  }
}
