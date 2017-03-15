import axios from 'axios';
import config from 'config';

export default class GDPDriver {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = config.get(tenant).gdp;
  }

  _call(method, params) {
    const url = this.config.endpoints.api.url;
    console.log(`${url}${params.endpoint}`);
    return axios[method](`${url}${params.endpoint}`, {

      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.endpoints.api.headers,
      },
      ...params.data,
    })
    .then(res => Promise.resolve(res.data));
  }

  get(params) {
    return this._call('get', params);
  }
  post(params) {
    return this._call('post', params);
  }
  delete(params) {
    return this._call('delete', params);
  }
  put(params) {
    return this._call('put', params);
  }
}
