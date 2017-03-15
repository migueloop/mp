/**
 * Created by cjgm on 7/14/16.
 */
import Restful from './drivers/restful';
const API = new Restful();

export default class Itsm {

  constructor(tenant) {
    this.tenant = tenant;
  }

  createRequest(order) {
    return API.post({ endpoint: 'itsm', params: { order } });
  }

}
