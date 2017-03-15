import PermissionsRepository from 'repositories/permission';
import { PERMISSIONS } from 'helpers/constants';
// TODO:
export default function newMiddleware(requiredPermissions) {
  return (req, res, next) => {
    if (!Array.isArray(requiredPermissions)) {
      return res.status(500).end('"requiredPermissions" must be an array.');
    }
    const { id: userId, permissions } = req.user;
    const userPermissionMatch = requiredPermissions.find(p => permissions.indexOf(p) !== -1);
    if (!userPermissionMatch) {
      return res.status(401).end('Unauthorized 1');
    }
    if (!PERMISSIONS[userPermissionMatch]) {
      return res.status(500).end(`Unknown permission type: ${userPermissionMatch}`);
    }
    const itemId = req.params.id || req.body.id;
    const tenant = req.store.getState().get('tenant');
    const permissionsRepository = new PermissionsRepository(tenant);
    const permissionChecks = [];
    const category = PERMISSIONS[userPermissionMatch].category;
    if (PERMISSIONS[userPermissionMatch].requiresOwnership) {
      permissionChecks.push(permissionsRepository.checkOwnership({ userId, itemId, category }));
    }
    if (permissionsRepository.validation[userPermissionMatch]) {
      permissionChecks.push(permissionsRepository(tenant).validation[userPermissionMatch](req));
    }
    Promise.all(permissionChecks)
    .then(() => next())
    .catch(err => {
      console.log(err);
      res.status(401).end('Unauthorized 2');
    });
  };
}
