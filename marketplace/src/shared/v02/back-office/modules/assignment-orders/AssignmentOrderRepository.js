import Restful from 'v02/restful-driver';

export default class AssignmentOrder {
  constructor(tenant, token) {
    this.API = new Restful(tenant, token);
  }
  fetchAll() {
    return this.API.get({
      endpoint: 'assignments-order',
    });
  }
  fetchOne(id, params = {}) {
    console.log('fetchOne::params', params);
    return this.API.get({
      endpoint: `assignments-order/${id}`,
      params,
    });
  }
}
