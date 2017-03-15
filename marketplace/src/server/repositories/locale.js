export default class Locales {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getMessages(language) {
    try {
      return Promise.resolve(require(`locales/default/${language.toLowerCase()}`).default);
    } catch (e) {
      console.log(e);
      return Promise.resolve({});
    }
  }
}
