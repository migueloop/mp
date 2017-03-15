import CONSTANTS from './HomeConstants';
import Repository from './HomeRepository';

export default class ProductActions {
  constructor(tenant) {
    this.repository = new Repository(tenant);
  }
  fetchCarouselImages = () => {
    return {
      type: CONSTANTS.FETCH_CAROUSEL_IMAGES,
      payload: this.repository.fetchCarouselImages(),
    };
  }
}
