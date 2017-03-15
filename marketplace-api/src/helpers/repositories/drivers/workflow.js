import axios from 'axios';
import configuration from 'configuration';

export default class WorkflowDriver {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = configuration.get(tenant).workflow;
  }

  _call(method, params, xmlHttpRequest) {
    const url = this.config.endpoint.api.url;
    console.log('WORKFLOW Marketplace-API call to:', `${method} ${url}${params.endpoint}`);

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if(xmlHttpRequest){
      headers["X-Requested-With"] = 'XMLHttpRequest';
    }

    return axios[method](`${url}${params.endpoint}`, {
      ...params.data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      auth: this.config.credentials,
    }).then(res => Promise.resolve(res.data))
    .catch(err => {
      console.log("[FATAL] Error calling Workflow API: ", JSON.stringify(err, null, 3));
      Promise.reject(err);
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
    return this._call('put', params, true);
  }
}
