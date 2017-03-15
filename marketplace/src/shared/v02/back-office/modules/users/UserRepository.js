import Restful from 'v02/restful-driver';

export default class User {
  constructor(tenant, token) {
    this.API = new Restful(tenant, token);
  }

  getAll() {
    return this.API.get({ endpoint: 'users' });
  }

  get(id) {
    return this.API.get({ endpoint: `user/${id}` });
  }

  connect(token) {
    return this.API.post({ endpoint: 'user/connect', params: { token } });
  }
}
