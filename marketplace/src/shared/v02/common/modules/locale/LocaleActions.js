import CONSTANTS from './LocaleConstants';
import Repository from 'repositories/locale';

export default class LocaleActions {
  constructor(tenant) {
    this.tenant = tenant;
  }
  fetch = (language) => {
    return {
      type: CONSTANTS.FETCH,
      language,
      payload: new Repository(this.tenant).getMessages(language),
    };
  }
}
