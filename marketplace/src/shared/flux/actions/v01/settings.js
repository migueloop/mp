import { ACTION } from 'flux/actions';
import Repository from 'repositories/settings';


export default class Settings {
  constructor(tenant) {
    this.tenant = tenant;
  }

  get SEO() {
    const repository = new Repository(this.tenant);

    return new Promise((resolve, reject) => {
      repository.getSEO()
        .then(seo => {
          resolve({
            type: ACTION.SETTINGS.SET_SEO,
            seo,
          });
        })
        .catch(reject);
    });
  }

  get Languages() {
    const repository = new Repository(this.tenant);
    return new Promise((resolve, reject) => {
      repository.Languages
        .then(languages => {
          resolve({
            type: ACTION.SETTINGS.SET_LANGUAGES,
            languages,
          });
        })
        .catch(reject);
    });
  }


}
