import Restful from './drivers/restful';

const API = new Restful();

export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }

  create(params) {
    return API.post({
      endpoint: 'acl',
      params,
    });
  }

  // TODO: Separate this function in tow (Edit Role-Permission, Edit Role Information [name...])
  update({ role, permission, enabled, ...params }) {
    if (permission) {
      if (enabled) {
        return API.put({
          endpoint: `acl/${role}/${permission}`,
        });
      }
      return API.delete({
        endpoint: `acl/${role}/${permission}`,
      });
    }
    return API.put({
      endpoint: `acl/${role}`,
      params,
    });
  }
  updateRolePermissions({ role, permissions }) {
    return API.put({ endpoint: `acl/permissions/${role}`, params: { permissions } });
  }
}
