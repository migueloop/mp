export default class Mist {
  getCompanies() {
    return API.get({ endpoint: 'companies' });
  }

  getActivityFields() {
    return API.get({ endpoint: 'companies/activityfields' });
  }

  getPlatforms() {
    return API.get({ endpoint: 'companies/platforms' });
  }
}