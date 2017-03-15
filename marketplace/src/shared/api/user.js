import Restful from './drivers/restful';
const API = new Restful();

class Editor {

  all() {
    return API.get({ endpoint: 'users/editors' });
  }

  get(id) {
    return API.get({ endpoint: `user/editor/${id}` });
  }

  update(params) {
    return API.post({ endpoint: `users/editor/${params.filters.id_user}`, params: params.values });
  }

  updateLogo(editor, logo, options) {
    const data = new FormData();
    data.append('logo', logo);
    // data.append('corner',JSON.stringify(corner))
    return API.post({ endpoint: `users/editor/${editor.id_user}/logo`, params: data });
  }

  updateBestProduct(userId, productId, position) {
    return API.post({ endpoint: `users/editor/${userId}/bestProduct`, params: { productId, position } });
  }

  activate(params) {
    return API.post({ endpoint: `users/editor/${params.id_user}/activate` });
  }

  delete(params) {
    return API.post({ endpoint: `users/editor/${params.id_user}/delete` });
  }

}

class Author {
  all() {
    return API.get({ endpoint: 'users/authors' });
  }

  getByAlias(alias) {
    return API.get({ endpoint: `users/author/${alias}` });
  }
}

export default class User {

  getUser(id) {
    return Promise.resolve(`return user of id ${id}`);
  }

  getAll() {
    return API.get({ endpoint: 'users' });
  }

  getCompanies() {
    return API.get({ endpoint: 'companies' });
  }

  getActivityFields() {
    return API.get({ endpoint: 'companies/activityfields' });
  }

  getPlatforms() {
    return API.get({ endpoint: 'companies/platforms' });
  }

  getEditorProfile(id) {
    return API.get({ endpoint: `user/editor/${id}` });
  }

  getCompanyBySiret(siret) {
    return API.get({ endpoint: `companies/${siret}` });
  }

  login(credentials) {
    return API.post({ endpoint: 'auth/local', params: credentials });
  }

  logout() {
    return API.post({ endpoint: 'auth/logout' });
  }

  register(data) {
    return API.post({ endpoint: 'auth/register', params: data });
  }

  convertUserToEditor(user, company) {
    return API.post({ endpoint: 'users/upgrade' });
  }

  get Editor() {
    return new Editor(this.tenant);
  }

  get Author() {
    return new Author(this.tenant);
  }

  create(user) {
    return API.post({ endpoint: 'users/', params: user });
  }

  edit(user) {
    return API.put({ endpoint: `users/${user.id}`, params: user });
  }

  softDelete(userId) {
    return API.delete({ endpoint: `users/${userId}` });
  }

  getUserPermissions(userIds) {
    return API.get({ endpoint: 'users/permissions', params: { userIds } });
  }
}
