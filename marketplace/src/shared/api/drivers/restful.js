import axios from 'axios';

// logger
import Logs from '../../../server/logs';

export default class Restful {
  constructor() {
    this.api = '/api/v01/';
  }

  get(request) {
    Logs.logger.warn('GET (V01 API)', `${this.api}${request.endpoint}`);
    return new Promise((resolve, reject) => {
      axios.get(`${this.api}${request.endpoint}`, {
        params: request.params,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
      .then(res => resolve(res.data))
      .catch(reject);
    });
  }

  post(request) {
    Logs.logger.warn('POST (V01 API)', `${this.api}${request.endpoint}`);
    return new Promise((resolve, reject) => {
      axios.post(`${this.api}${request.endpoint}`, request.params, {
        // headers: { 'X-Requested-With': 'XMLHttpRequest', 'socket-guid': window.guid },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        progress: request.options ? request.options.progress : undefined,
      })
      .then(res => resolve(res.data))
      .catch(reject);
    });
  }

  delete(request) {
    Logs.logger.warn('DELETE (V01 API)', `${this.api}${request.endpoint}`);
    return new Promise((resolve, reject) => {
      axios.delete(`${this.api}${request.endpoint}`, {
        // headers: { 'X-Requested-With': 'XMLHttpRequest', 'socket-guid': window.guid },
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        progress: request.options ? request.options.progress : undefined,
      })
      .then(res => resolve(res.data))
      .catch(reject);
    });
  }

  put(request) {
    Logs.logger.warn('PUT (V01 API)', `${this.api}${request.endpoint}`);
    return new Promise((resolve, reject) => {
      axios.put(`${this.api}${request.endpoint}`, request.params, {
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'socket-guid': window.guid },
        progress: request.options ? request.options.progress : undefined,
      })
      .then(res => resolve(res.data))
      .catch(reject);
    });
  }
}
