import Repository from './drivers/mysql';

export default class Acl {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'role');
  }


  fetch(id = null) {
    let where = '';
    if (id) {
      where = 'where id = ?';
    }
    return this._repo.query(`
      select id, name, COALESCE(GROUP_CONCAT(permission_role.id_permission),'')  as permissions
        from role
        left JOIN permission_role on permission_role.id_role = role.id ${where}
        group by role.id
      `, [id]).then(roles => (
        roles.map(role => ({
          ...role,
          permissions: !!role.permissions ? role.permissions.split(',') : [],
        }))
      ));
  }

  // Clone permissions from role idRoleFrom to the role idRoleto Overriting the existing permissions
  clone(idRoleFrom, idRoleTo) {
    return this._repo.query('delete from permission_role where id_role = ?', idRoleTo)
    .then(() => (
      this._repo.query('insert into permission_role  (select id_permission, ? as id_role from permission_role where id_role = ?)', [idRoleTo, idRoleFrom])
    ));
  }

  create({ name, cloneRole }) {
    return this._repo.query('insert into role (`name`) values (?)', [name])
      .then(result => Promise.resolve({
        id: result.insertId,
        name,
        permissions: [],
      }))
      .then(role => {
        if (!cloneRole) {
          return Promise.resolve(role);
        }
        return this.clone(cloneRole, role.id).then(() => this.fetch(role.id)).then(roles => Promise.resolve(roles[0]));
      });
  }

  update({ role, permission, enabled, ...params }) {
    if (permission) {
      if (enabled) {
        return this._repo.query('insert into permission_role (id_permission, id_role) values (?,?)', [permission, role]);
      }
      return this._repo.query('delete from permission_role where id_permission = ? and id_role = ?', [permission, role]);
    }
    console.log(params);
    if (Object.keys(params).length > 0) {
      console.log('update role set ? where id = ?', [params, role]);
      return this._repo.query('update role set ? where id = ?', [params, role]);
    }
    return Promise.resolve();
  }

  updateRolePermissions({ role, permissions }) {
    const insertQuery = `insert into permission_role (id_permission, id_role) values ${permissions.map(p => '(?, ?)').join(', ')}`;
    console.log('insertQuery', insertQuery);
    return this._repo.query('delete from permission_role where id_role = ?', [role])
    .then(() => permissions.length > 0 ? this._repo.query(insertQuery, permissions.reduce((p, n) => p.concat([n, role]), [])) : Promise.resolve());
  }
}
