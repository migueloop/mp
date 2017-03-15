import { ACTION } from 'flux/actions';
import { Map, fromJS } from 'immutable';
export default function UserReducer(state = null, action = {}) {
  switch (action.type) {
    case ACTION.USER.LOGIN:
      // FIXME: Convert directly using fromJs is not working
      console.log('ACTION.USER.LOGIN', action.user);
      return fromJS(Map(action.user).toJS());
    case ACTION.USER.LOGOUT:
      return Map();
    case ACTION.BACKOFFICE.USER.EDIT:
      if (state.get('id') === parseInt(action.user.id, 10)) {
        console.log('update');
        return fromJS({
          ...state.toJS(),
          ...action.user,
        });
      }
      return state;
    case ACTION.BACKOFFICE.ACL.UPDATE:
      const user = state.toJS();
      const permissionToChange = action.payload.permission;
      const actionRole = action.payload.role;
      const userCopy = Object.assign(user);
      if (user.id_role === actionRole) {
        const permissionIndexOfUser = user.permissions.indexOf(permissionToChange);
        const userHasPermission = permissionIndexOfUser !== -1;
        if (userHasPermission && !action.payload.enabled) {
          // remove permission
          delete userCopy.permissions[permissionIndexOfUser];
        } else if (!userHasPermission && action.payload.enabled) {
          // add permission
          userCopy.permissions.push(permissionToChange);
        }
      }
      return fromJS(userCopy);
      // FIXME: Convert directly using fromJs is not working
    default:
      return state;
  }
}
