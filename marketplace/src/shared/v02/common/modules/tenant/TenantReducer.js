import CONSTANTS from './TenantConstants';

export default function (state, action) {
  switch (action.type) {
    case CONSTANTS.SET_NAME:
      return state.set('name', action.payload);
    default:
      return state;
  }
}
