import axios from 'axios';
import configuration from 'configuration';

export default class GDPDriver {
  constructor(tenant, idUser) {
    this.tenant = tenant;
    this.config = configuration.get(tenant).gdp;
    this.idUser = idUser;
  }

  _call(method, params) {
    const url = this.config.endpoints.api.url;
    const destination = `${url}${params.endpoint}?userId=${this.idUser}`;
    console.log('call to:', destination);
    return axios[method](destination, {
      ...params.data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...this.config.endpoints.api.headers,
      },
      auth: this.config.credentials,
    })
    .then(res => {
      console.log('GDP succesful!!!');
      return Promise.resolve(res.data);
    })
    .catch(err => {
      console.log(`GDP ERROR. The url was ${err.config.url} and the data sent was:\n ${err.config.data} \n
        The response data was ${JSON.stringify(err.response.data, null, 3)  }`);
      if (err.response.status === 302) {
        return Promise.resolve(err.response.data);
      }
      return Promise.reject(err);
    });
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
