import Restful from 'v02/restful-driver';

export default class Search {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }

  search(query) {
    return this.API.get({
      endpoint: `search?query=${query}`,
      local: true,
    });
  }
}
