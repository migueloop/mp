import GDPDriver from './drivers/gdp';
import { PRODUCT } from 'helpers/constants';

export default class GDPRepository {
  constructor(tenant, idUser) {
    this.api = new GDPDriver(tenant, idUser);
  }

  getProductInformation(idGdp, type) {
    let endpoint;
    switch (type) {
      case PRODUCT.TYPE.DEVICE:
        endpoint = 'devices';
        break;
      case PRODUCT.TYPE.LINE:
        endpoint = 'lines';
        break;
      default:
        endpoint = null;
        break;
    }

    if (!endpoint) {
      return Promise.resolve({});
    }
    return this.api.get({
      endpoint: `${endpoint}/${idGdp}`,
    });
  }

  createAssignment(data) {
    return this.api.post({
      endpoint: 'associationsmarketplace',
      data,
    });
  }
}
