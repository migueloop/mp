import { ACTION } from 'flux/actions';
import Repository from 'repositories/billing';

export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }

  fetch() {
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository
      .fetch()
      .then(payload => resolve({ type: ACTION.BILLING.FETCH, payload }))
      .catch(reject);
    });
  }
}
