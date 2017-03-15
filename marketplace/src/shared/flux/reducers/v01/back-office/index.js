import { ACTION } from 'flux/actions';
import { fromJS, Map } from 'immutable';

export default function BackOfficeReducer(state = Map(), action = {}) {
  switch (action.type) {
    case ACTION.BACKOFFICE.ACL.FETCH:
      return state.set('roles', fromJS(action.payload));
    case ACTION.BACKOFFICE.ACL.CREATE:
      return state.update('roles', roles => roles.push(fromJS(action.payload)));
    case ACTION.BACKOFFICE.ACL.UPDATE:
      return state.update('roles', roles => roles.map(role => {
        if (role.get('id') === action.payload.role) {
          if (action.payload.permission) {
            if (action.payload.enabled) {
              return role.update('permissions', permissions => permissions.push(action.payload.permission));
            }
            return role.update('permissions', permissions => permissions.filter(permission => permission !== action.payload.permission));
          }
          return fromJS({ ...role.toJS(), ...action.payload });
        }
        return role;
      }));
    case ACTION.BACKOFFICE.ACL.UPDATE_ROLE_PERMISSIONS:
      return state.update('roles', roles => roles.map(role => role.get('id') === action.payload.role ? fromJS({ ...role.toJS(), ...action.payload }) : role));
    case ACTION.BILLING.FETCH:
      return state.set('billing', fromJS(action.payload));
    case ACTION.WORKFLOW.FETCH:
      return state.set('workflow', fromJS(action.payload));
    case ACTION.BACKOFFICE.USER.SET_ALL:
      return state.set('users', fromJS(action.users));
    case ACTION.BACKOFFICE.USER.EDIT:
      return state.update('users', users => (
        users.map(user => user.get('id') === parseInt(action.user.id, 10) ? fromJS({ ...user.toJS(), ...action.user }) : user)
      ));
    case ACTION.BACKOFFICE.USER.SOFT_DELETE:
      return state.update('users', users => (
        users.map(user => {
          if (user.get('id') === parseInt(action.userId, 10)) {
            const userJS = user.toJS();
            userJS.deleted_at = new Date().getTime() / 1000;
            console.log('RETURNING UPDATED USER', userJS);
            return fromJS(userJS);
          }
          return user;
        })
      ));
    case ACTION.USER.EDITOR.ACTIVATE:
      return state.update('users', users =>
          users.map(user => {
            if (user.get('id') !== parseInt(action.editor.id_user, 10)) {
              return user;
            }
            return user.update('editorProfile', profile => profile
            .set('activated', true)
            .set('last_update', new Date().getTime())
            .set('validated_by', action.editor.validated_by));
          })
      );
    case ACTION.BACKOFFICE.USER.EDITOR.EDIT:
      return state.update('users', users =>
          fromJS(users.toJS().map(user => {
            if (user.id === parseInt(action.editorProfile.id_user, 10)) {
              Object.assign(user.editorProfile, action.editorProfile, { last_update: new Date().getTime() });
              return user;
            }
            return user;
          }))
      );
    case ACTION.BACKOFFICE.USER.CREATE:
      return state.update('users', users => users.push(fromJS(action.user)));

    case ACTION.BACKOFFICE.USER.GET_USER_PERMISSIONS:
      const idsAndPermissions = action.idsAndPermissions;
      return state.update('users', users =>
        fromJS(users.toJS().map(originalUser => {
          const match = idsAndPermissions.find(o => o.id === originalUser.id);
          const permissions = match ? match.permissions : [];
          const newUser = Object.assign(originalUser, { permissions });
          return newUser;
        }))
      );

    case ACTION.BACKOFFICE.USER.EDITOR.UPDATE_BEST_PRODUCT:
      return state.update('users', users => (
        fromJS(users.toJS().map(user => {
          if (user.id === action.bestProduct.userId) {
            user.editorProfile.products = user.editorProfile.products.reduce((prev, product) => {
              if (product.highlight_product === action.bestProduct.position) {
                product.highlight_product = 0;
              }
              if (product.id === action.bestProduct.productId) {
                product.highlight_product = action.bestProduct.position;
              }
              prev.push(product);
              return prev;
            }, []);
          }
          return user;
        }))
      ));
    default:
      return state;
  }
}
