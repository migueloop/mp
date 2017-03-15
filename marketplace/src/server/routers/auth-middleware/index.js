import Permissions from 'repositories/permission';
import { USER } from 'helpers/constants';

export default class AuthMiddleware {
  static ensureLogin(req, res, next) {
    const user = req.user;
    if (user) { return next(); }
    next({ code: 401, message: 'AuthMiddleware::ensureLogin login required' });
  }

  static canAccessBackoffice(req, res, next) {
    const tenant = req.store.getState().get('tenant');
    const user = req.user;
    if (!user) {
      return next({ code: 401, message: 'AuthMiddleware::canAccessBackoffice - no user - login required' });
    }
    new Permissions(tenant).canAccessBackoffice(user)
    .then(canAccessBackoffice => {
      if (canAccessBackoffice) { return next(); }
      return next({ code: 401, message: 'AuthMiddleware::canAccessBackoffice - no access - login required' });
    })
    .catch(err => next({ code: 500, message: err }));
  }

  static canUpdate(item) {
    return (req, res, next) => {
      const user = req.user;
      if (!user) {
        return next({ code: 401, message: 'AuthMiddleware::canUpdate login required' });
      }
      if (!req.params.id) {
        return next({ code: 401, message: `${item} id required` });
      }
      console.log(`Check if user ${user.id} can update to ${item} ${req.params.id}`);
      next();
    };
  }

  static canCreate(item) {
    return (req, res, next) => {
      const user = req.user;
      if (!user) {
        return next({ code: 401, message: 'AuthMiddleware::canCreate login required' });
      }
      switch (item) {
        case 'corner':
          if (user.id_role !== USER.ROLE.ADMIN) {
            return next({ code: 401, message: 'user must be an admin to create a corner' });
          }
          break;
        case 'product':
          if (user.id_role !== USER.ROLE.EDITOR) {
            return next({ code: 401, message: 'user must be an editor to create a product' });
          }
          break;
        case 'bundle':
          if (user.id_role !== USER.ROLE.ADMIN) {
            return next({ code: 401, message: 'user must be an admin to create a bundle' });
          }
          break;
        default:
          break;
      }
      console.log(`Check if user ${user.id} can create to ${item} ${req.params.id}`);
      next();
    };
  }
}
