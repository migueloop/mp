import Restful from './drivers/restful';

const API = new Restful();

export default class HomeCarousel {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getPage(pageId) {
    return API.get({
      endpoint: `detail/${pageId}`,
    });
  }

}
