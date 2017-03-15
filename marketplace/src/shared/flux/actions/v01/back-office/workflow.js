import { ACTION } from 'flux/actions';

export default class Workflow {
  constructor(tenant) {
    this.tenant = tenant;
  }

  fetch(payload) {
    return Promise.resolve({ type: ACTION.WORKFLOW.FETCH, payload });
  }
}
