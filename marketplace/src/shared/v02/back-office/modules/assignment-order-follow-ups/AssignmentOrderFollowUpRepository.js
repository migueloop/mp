import Restful from 'v02/restful-driver';

export default class AssignmentOrderFollowUp {
  constructor(tenant, token) {
    this.API = new Restful(tenant, token);
  }
  fetch() {
    return this.API.get({
      endpoint: 'assignments-order-follow-up',
    });
  }
  fetchOne(id, params = {}) {
    console.log('AssignmentOrderFollowUp::fetchOne::params', params);
    return this.API.get({ endpoint: `assignments-order-follow-up/${id}`, params });
  }
}
