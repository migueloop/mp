import Restful from 'v02/restful-driver';

export default class Assignments {
  constructor(tenant, token) {
    this.API = new Restful(tenant, token);
  }
  fetch() {
    return this.API.get({
      endpoint: 'assignments',
    });
  }
  fetchOne(id) {
    return this.API.get({
      endpoint: `assignments/${id}`,
    });
  }
  fetchOneExtra(id) {
    return this.API.get({
      endpoint: `assignments/${id}/extra`,
    });
  }
  delete(id) {
    return this.API.delete({
      endpoint: `assignments/${id}`,
    });
  }
  demandValidation(id) {
    return this.API.post({
      endpoint: `assignments/${id}/validate`,
    });
  }
  retire(id) {
    return this.API.delete({
      endpoint: `assignments/${id}/validate`,
    });
  }
  publish(id, userToPublish, employee) {
    return this.API.put({
      endpoint: `assignments/${id}/validate`,
      params: {
        user : userToPublish,
        employee: employee
      },
    }, true);
  }
}
