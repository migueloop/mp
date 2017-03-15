import soap from 'soap';
import config from 'config';

export default class EasyVista {
  constructor(tenant) {
    this.tenant = tenant;
    this.config = config.get(tenant).easyVista;
  }


  _call(method, params) {
    return new Promise((resolve, reject) => {
      soap.createClient(this.config.url, (err, client) => {
        console.log('client: ', client);
        if (params) {
          client[method](params, (error, result, raw, soapHeader) => {
            if (error) {
              console.log('---> ERROR SOAP CALL FROM EASYVISTA: ', error);
              reject(err);
            }
            else {
              resolve(result);
            }
          });
        }
      });
    });
  }


  _getMethodsList() {
    return new Promise((resolve, reject) => {
      soap.createClient(this.config.url, (err, client) => {
        if (err) {
          console.log('---> ERROR SOAP CALL FROM EASYVISTA: ', err);
          reject(err);
        }
        else {
          console.log('--------> CLIENT CONNECTION ESTABLISHED: ', client.WebService.WebServicePort);
          resolve(client.WebService.WebServicePort);
        }
      });
    });
  }


  createRequest(params) {
    return this._call(this.config.endpoints.create_request, params);
  }
}

