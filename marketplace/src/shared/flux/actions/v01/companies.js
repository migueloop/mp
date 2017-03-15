import Repository from 'repositories/misc';
import { ACTION } from 'flux/actions';
import Promise from 'bluebird';

export default class Companies {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get ActivityFields() {
    const self = this;
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository.getActivityFields()
        .then(items => {
          resolve({
            type: ACTION.MISC.SET_ACTIVITY_FIELDS,
            activityFields: items,
          });
        })
        .catch(reject);
    });
  }

  get Platforms() {
    const self = this;
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository.getPlatforms()
        .then(items => {
          resolve({
            type: ACTION.MISC.SET_PLATFORMS,
            platforms: items,
          });
        })
        .catch(reject);
    });
  }

  get All() {
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository.getCompanies()
        .then(companies => {
          resolve({
            type: ACTION.MISC.SET_COMPANIES,
            companies,
          });
        })
        .catch(reject);
    });
  }
}
