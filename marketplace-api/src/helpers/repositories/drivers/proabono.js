import axios from 'axios';
import configuration from 'configuration';

export default class BillingDriver {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = configuration.get(tenant).billing;
  }

  _call(method, params, fastApi) {
    const url = fastApi ? this.config.endpoint.api : this.config.endpoint.extended;
    console.log('call to:', `${url}${params.endpoint}`, 'with credentials', this.config.credentials)
    return axios[method](`${url}${params.endpoint}`, {
      ...params.options,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      auth: this.config.credentials,
    }).then(res => Promise.resolve(res.data));
  }

  get(params, fastApi = true) {
    return this._call('get', params, fastApi);
  }
  post(params, fastApi = true) {
    return this._call('post', params, fastApi);
  }
  delete(params, fastApi = true) {
    return this._call('delete', params, fastApi);
  }
  put(params, fastApi = true) {
    return this._call('put', params, fastApi);
  }
}
