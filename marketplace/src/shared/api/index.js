import Restful from './drivers/restful';

const API = new Restful();

export default class Api {
  reloadStore() {
    return API.get({
      endpoint: 'all',
    });
  }

  reloadStoreBackoffice() {
    return API.get({
      endpoint: 'admin/all',
    });
  }
}
