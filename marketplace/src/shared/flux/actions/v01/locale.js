import { ACTION } from 'flux/actions';
import Repository from 'repositories/locale';

export default class Locale {
  constructor(tenant) {
    this.tenant = tenant;
  }

  setLocale(language) {
    return new Repository(this.tenant).getMessages(language)
      .then(messages => {
        return {
          type: ACTION.LOCALE.SET,
          language,
          messages,
        };
      });
  }


}
