import Repository from 'repositories/user';
import { ACTION } from 'flux/actions';
import Promise from 'bluebird';

class Editor {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get All() {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).Editor.all()
      .then(editors => resolve({ type: ACTION.USER.EDITOR.SET_ALL, editors }))
      .catch(reject);
    });
  }

  Activate(params) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).Editor.activate(params)
      .then(editor => resolve({ type: ACTION.USER.EDITOR.ACTIVATE, editors: editor }))
      .catch(reject);
    });
  }

  Delete(params) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).Editor.delete(params)
      .then(editor => resolve({ type: ACTION.USER.EDITOR.DELETE, editor }))
      .catch(reject);
    });
  }
}

class Author {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get All() {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).Author.all()
      .then(authors => resolve({ type: ACTION.USER.AUTHOR.SET_ALL, authors }))
      .catch(reject);
    });
  }

  GetByAlias(alias) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).Author.getByAlias(alias)
      .then(author => resolve({ type: ACTION.USER.AUTHOR.SET_ONE, author }))
      .catch(reject);
    });
  }
}

export default class Users {
  constructor(tenant, user) {
    this.tenant = tenant;
    this.user = user;
  }

  Login(credentials) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant, this.user).login(credentials)
      .then(user => resolve({ type: ACTION.USER.LOGIN, user }))
      .catch(reject);
    });
  }

  Logout() {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).logout()
      .then(() => resolve({ type: ACTION.USER.LOGOUT }))
      .catch(reject);
    });
  }

  Register(data) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).register(data)
      .then(user => resolve({ type: ACTION.USER.LOGIN, user }))
      .catch(reject);
    });
  }

  Create(user) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).create(user)
      .then(u => resolve({ type: ACTION.BACKOFFICE.USER.CREATE, user: u }))
      .catch(reject);
    });
  }

  ConvertUserToEditor(user, company, activated) {
    return new Promise((resolve, reject) => {
      new Repository(this.tenant).convertUserToEditor(user, company, activated)
      .then(u => resolve({ type: ACTION.USER.CONVERT_EDITOR, user: u, company }))
      .catch(reject);
    });
  }

  get Editor() {
    return new Editor(this.tenant);
  }
  get Author() {
    return new Author(this.tenant);
  }
}
