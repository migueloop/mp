import axios from 'axios';
import config from 'configuration';

export default class GDPDriver {
  constructor(tenant, user) {
    this.tenant = config.get(tenant).tenantId;
    this.user = user;
    this.config = config.get(tenant).referential;
  }

  _call(method, params) {
    const url = this.config.endpoints.api.url;
    console.log(`${url}tenants/${this.tenant}/${params.endpoint}?userId=${this.user}`);
    return axios[method](`${url}tenants/${this.tenant}/${params.endpoint}?userId=${this.user}`, {

      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.endpoints.api.headers,
      },
      ...params.data,
    }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err));
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
