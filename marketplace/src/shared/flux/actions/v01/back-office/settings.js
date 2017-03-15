import { ACTION } from 'flux/actions';
import Repository from 'repositories/settings';

export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }

  setSEO(params) {
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository
      .setSEO(params)
      .then(seo => resolve({ type: ACTION.SETTINGS.SET_SEO, seo }))
      .catch(reject);
    });
  }
}
