import { Router } from 'express';
import Repository from 'repositories/acl';
import aclMiddlewareFactory from 'middleware/acl-middelware-factory';
import Actions from 'flux/actions';
import { validatePermissionList } from 'helpers/permissions';
import { PERMISSIONS } from 'helpers/constants';


const router = Router();

router.post('/', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  new Actions(tenant).BackOffice.Acl
    .create(req.body)
    .then(action => {
      res.json(action.payload);
    });
});

router.put('/permissions/:role', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const role = req.params.role;
  const permissions = req.body.permissions;
  const permissionObjects = permissions.map(id => PERMISSIONS[id]);
  const permissionValidation = validatePermissionList(permissionObjects);
  if (!permissionValidation.valid) {
    const e = new Error('Invalid permissions');
    e.errors = permissionValidation.errors;
    next(new Error('Invalid permissions'));
  }
  new Actions(tenant).BackOffice.Acl.updateRolePermissions({ role, permissions })
  .then(action => res.end());
});

router.put('/:role', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  // TODO: Check that Role and Permission Exists
  new Actions(tenant).BackOffice.Acl.update({
    role: parseInt(req.params.role, 10),
    ...req.body,
  })
  .then(action => {
    res.end();
  });
});

router.put('/:role/:permission', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  // TODO: Check that Role and Permission Exists
  new Actions(tenant).BackOffice.Acl.update({
    role: req.params.role,
    permission: req.params.permission,
    enabled: true,
  })
  .then(action => {
    res.end();
  });
});

router.delete('/:role/:permission', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  // TODO: Check that Role and Permission Exists
  new Actions(tenant).BackOffice.Acl.update({
    role: req.params.role,
    permission: req.params.permission,
    enabled: false,
  })
  .then(action => {
    res.end();
  });
});

export default router;
