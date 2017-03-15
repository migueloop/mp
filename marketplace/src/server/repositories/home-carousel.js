import Repository from './drivers/mysql';
import { _ } from 'underscore';

export default class HomeCarouselRepository {
  constructor(tenant) {
    this.tenant = tenant;
    this._repo = new Repository(tenant, 'page_detail');
  }

  getContent() {
    return this._get('content');
  }

  getId() {
    return this._get('id');
  }

  getButtonText() {
    this._get('buttonText');
  }

  getLink() {
    this._get('link');
  }

  getMainPicture() {
    return this._get('mainPicture');
  }

  getMainPictureALT() {
    return this._get('mainPictureALT');
  }

  getPage(pageId) {
    return this._get('*', '*');
  }

  getAllSlides() {
    return this._get('*', '*');
  }

  getDetailPagePicture() {
    return this._get('detailPagePicture');
  }

  getDetailPagePictureALT() {
    return this._get('detailPagePictureALT');
  }

  getTitle() {
    return this._get('title');
  }

  setPage(page) { }

  _get(pageElement, id) {
    const sSingleSlide = id !== '*' ? ` AND id = ${id}` : '';
    const sQuery = `SELECT ${pageElement} FROM home_carousel where active = 1 ${sSingleSlide}`;
    return this._repo.query(sQuery);
  }

  addOrModify(pageElement) { }
}
