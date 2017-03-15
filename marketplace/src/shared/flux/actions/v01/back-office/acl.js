import { ACTION } from 'flux/actions';
import Repository from 'repositories/acl';

export default class Acl {
  constructor(tenant) {
    this.tenant = tenant;
  }

  create(payload) {
    return new Repository(this.tenant).create(payload)
      .then(role => ({
        type: ACTION.BACKOFFICE.ACL.CREATE,
        payload: role,
      }));
  }

  update(payload) {
    return new Repository(this.tenant).update(payload)
      .then(() => ({
        type: ACTION.BACKOFFICE.ACL.UPDATE,
        payload,
      }));
  }

  updateRolePermissions(payload) {
    return new Repository(this.tenant).updateRolePermissions(payload)
    .then(() => ({ type: ACTION.BACKOFFICE.ACL.UPDATE_ROLE_PERMISSIONS, payload }));
  }

  fetch() {
    return new Repository(this.tenant)
      .fetch()
      .then(payload => ({ type: ACTION.BACKOFFICE.ACL.FETCH, payload }));
  }
}
