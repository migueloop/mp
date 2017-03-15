
import Restful from './drivers/restful';
const API = new Restful();

export default class AssignmentOrderFollowUps {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getAll() {
    return API.get({
      endpoint: 'assignment-order-follow-ups',
    });
  }

  create(payload) {
    return API.post({ endpoint: 'assignment-order-follow-ups', params: { payload } });
  }

  update(payload) {
    return API.put({ endpoint: `assignment-order-follow-ups/${payload.id}`, params: { payload } });
  }

  completeCurrentStep(idFollowUp, data = {}) {
    return API.post({ endpoint: `assignment-order-follow-ups/${idFollowUp}/complete-current-step`, params: data });
  }

}
