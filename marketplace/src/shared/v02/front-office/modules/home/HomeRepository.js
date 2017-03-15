import Restful from 'v02/restful-driver';

export default class HomeRepository {
  constructor(tenant) {
    this.API = new Restful(tenant);
  }
  fetchCarouselImages() {
    return this.API.get({
      endpoint: 'home-carousel',
    });
  }
}
