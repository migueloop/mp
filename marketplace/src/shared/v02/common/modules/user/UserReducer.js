import CONSTANTS from './UserConstants';
import { fromJS, Map, List } from 'immutable';

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN:
      return fromJS(JSON.parse(JSON.stringify(action.payload)));
    case CONSTANTS.LOGOUT:
      return Map();
    case 'UPDATE ALL PERMISSIONS FOR ONE ROLE':
      if (state.get('id_role') === action.payload.role) {
        return state.set('permissions', List(action.payload.permissions));
      }
      return state;
    default:
      return state;
  }
};
