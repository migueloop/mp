import { ACTION } from 'flux/actions';

export default class Seo {
  constructor(tenant) {
    this.tenant = tenant;
  }

  set(payload) {
    return Promise.resolve({
      type: ACTION.SEO.SET,
      payload,
    });
  }

  setUrl(url) {
    return Promise.resolve({
      type: ACTION.SEO.SET_URL,
      url,
    });
  }

  setFBId(id) {
    return Promise.resolve({
      type: ACTION.SEO.SET_FB_ID,
      id,
    });
  }
}
