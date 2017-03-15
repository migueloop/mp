import { ACTION } from 'flux/actions';
import Repository from 'repositories/assignment-order-follow-ups';

export default class AssignmentOrderFollowUps {
  constructor(tenant) {
    this.tenant = tenant;
    this.repository = new Repository(tenant);
  }
  getAll() {
    return this.repository.getAll()
    .then(payload => Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.SET_ALL, payload }));
  }

  create(data) {
    return this.repository.create(data)
    .then(payload => Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.ADD, payload }));
  }

  update(data) {
    return this.repository.update(data)
    .then(payload => Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.UPDATE, payload }));
  }

  completeCurrentStep(idFollowUp, data = {}) {
    return this.repository.completeCurrentStep(idFollowUp, data)
    .then(payload => Promise.resolve({ type: ACTION.ASSIGNMENT_ORDER_FOLLOW_UPS.UPDATE, payload }));
  }
}
