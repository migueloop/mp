import { ACTION } from 'flux/actions';

export default function TenantReducer(state = '', action = {}) {
  switch (action.type) {
    // TODO: REMOVE ALL LINK FOR THIS TENANT NOW IT IS ON V02.COMMON.TENANT.NAME
    case ACTION.SET_TENANT:
      return action.tenant;
    case 'SET TENANT NAME V02':
      return action.payload;
    default:
      return state;
  }
}
