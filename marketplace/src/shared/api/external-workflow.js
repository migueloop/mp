import Restful from './drivers/restful';
const API = new Restful();

export default class ExternalWorkflow {

  constructor(tenant) {
    this.tenant = tenant;
  }

  getWorkflowsForOrders(orderIds) {
    return API.get({ endpoint: 'external-workflows/for-orders', params: { orderIds } });
  }

}
