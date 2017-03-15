import connector, { success, error } from './lib/connector';
import axios from 'axios';

function processor(payload, data) {
  const { webhook, method, endpoint, params, headers, options } = payload;
  console.log('process', { method, url: endpoint, data: params, webhook });
  return axios(Object.assign({ method, url: endpoint, data: params, headers }, options))
    .then(res => {
      console.log('processed!!', { method, url: endpoint, data: params, webhook });
      if (webhook) {
        console.log('CALL Webhook', webhook.endpoint);
        axios({
          method: webhook.method,
          url: webhook.endpoint,
          data: { response: res.data, params: webhook.params, request: params },
        });
      }
      success(data);
    })
    .catch(err => {
      console.log('error processing', err);
      return error(err, data);
    });
}
connector(processor);
