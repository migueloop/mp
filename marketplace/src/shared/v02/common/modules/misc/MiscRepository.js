import Restful from 'v02/restful-driver';

export default class Misc {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetchCompanies() {
    return this.API.get({ endpoint: 'misc/companies' });
  }
  fetchKeywords() {
    return this.API.get({ endpoint: 'misc/keywords' });
  }
  fetchPlatforms() {
    return this.API.get({ endpoint: 'misc/platforms' });
  }
}
