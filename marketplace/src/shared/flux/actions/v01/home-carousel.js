import { ACTION } from 'flux/actions';
import Repository from 'repositories/home-carousel';
import Promise from 'bluebird';

export default class HomeCarousel {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getPage(pageId) {
    const repository = new Repository(this.tenant);

    return new Promise((resolve, reject) => {
      repository.getPage(pageId)
        .then(page => {
          resolve({
            type: ACTION.HOME_CAROUSEL.GETPAGE,
            page,
          });
        })
        .catch(reject);
    });
  }

  getAllSlides() {
    const repository = new Repository(this.tenant);

    return new Promise((resolve, reject) => {
      repository.getAllSlides()
        .then(slides => {
          resolve({
            type: ACTION.HOME_CAROUSEL.GETALLSLIDES,
            slides,
          });
        })
        .catch(reject);
    });
  }

}
