import { ACTION } from 'flux/actions';
import Repository from 'repositories/timeline';

export default class Timelines {
  constructor(tenant) {
    this.tenant = tenant;
    this.repository = new Repository(tenant);
  }

  get All() {
    return new Promise((resolve, reject) => {
      this.repository.getAll()
      .then(payload => resolve({ type: ACTION.TIMELINES.SET_ALL, timelines: payload }))
      .catch(reject);
    });
  }

  getItemCurrentTimelineStep(payload) {
    return new Promise((resolve, reject) => {
      this.repository.getItemCurrentTimelineStep(payload)
      .then(currentSteps => resolve({ type: ACTION.TIMELINES.SET_ITEM_CURRENT_STEPS, currentSteps }))
      .catch(err => reject(err));
    });
  }
}
