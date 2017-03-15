import Repository from './drivers/mysql';
import Referential from './drivers/referential';
import crypto from 'crypto';
import config from 'config';
import Restful from 'v02/restful-driver';

export default class UserRepository {

  static sha256(str) {
    const sum = crypto.createHash('sha256');
    sum.update(str);
    return sum.digest('hex');
  }

  constructor(tenant, loggedUser) {
    this._repo = new Repository(tenant, 'user');
    this.tenant = tenant;
    this.API = new Restful(tenant);
    this.referential = new Referential(tenant, loggedUser);
  }

  get(id) {
    const endpoint = `tenants/${this.referential.tenant}/accounts/${id}`;
    return this.referential.get({ endpoint })
    .then(this._parse.bind(this))
    .catch(e => console.log('UserRepository::get::error', e));
  }

  getAll() {
    const endpoint = `tenants/${this.referential.tenant}/applications/${config.get(this.tenant).appId}/accounts`;
    return this.referential.get({ endpoint })
    .then(users => Promise.all(users.map(this._parse.bind(this))));
  }

  _parse(user) {
    const configurations = config.get(this.tenant);
    const applicationRoles = user.applicationRoles.find(r => r.applicationId === configurations.appId) || { roles: [] };
    if (applicationRoles.roles.length === 0) {
      applicationRoles.roleIds[0] = -1;
    }
    const idRole = applicationRoles.roleIds[0];
    const query = 'select GROUP_CONCAT(id_permission) as permissions from permission_role where id_role = ? group by id_role ';
    return this._repo.query(query, [idRole])
    .then(permissions => {
      // quck fix: https://github.com/mysqljs/mysql/issues/883
      // There should be no db logi in Marketplace. Need to go via API.
      const parsedUser = {
        id: parseInt(user.id, 10),
        name: user.firstName,
        lastname: user.lastName,
        email: user.email,
        groups: user.groups,
        id_role: idRole,
        role: applicationRoles.roles[0],
        tenant: this.tenant,
        activated: true,
        permissions: permissions.length > 0 ? permissions[0].permissions.split(',') : [],
      };
      return Promise.resolve(parsedUser);
    })
    .catch(e => console.log('ERROR PARSING USER', e));
  }
}
