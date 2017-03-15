import axios from 'axios';
import config from 'config';
import Logs from 'logs';

export default class WorkflowDriver {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = config.get(tenant).workflow;
  }

  _call(method, params) {
    const baseUrl = this.config.endpoint.api.url;
    console.log('call timeline-api', `${baseUrl}${params.endpoint}`, 'with', JSON.stringify(params.data));
    return axios[method](`${baseUrl}${params.endpoint}`, params.data).then(res => {
      return Promise.resolve(res.data);
    })
    .catch(err => {
      // console.log('--------------- WORKFLOW CALL ERROR -------------');
      Logs.logger.error(__filename, err);
      // console.log('--------------------------------------------------');
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
