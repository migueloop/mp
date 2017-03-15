import Repository from './drivers/mysql';

export default class ExternalworkflowRepository {

  constructor(tenant) {
    this.tenant = tenant;
  }

  // TODO: add the api for this.
  getWorkflowsForOrders = (orderIds = []) => {
    // console.log('orderIds', orderIds);
    if (orderIds.length === 0) {
      return Promise.resolve([]);
    }
    const repo = new Repository(this.tenant, 'external_workflows');
    return repo.query('SELECT * from external_workflows WHERE id_assignment_order IN(?)', [orderIds])
    .then(data => Promise.resolve(data.map(row => {
      return {
        orderId: row.id_assignment_order,
        externalId: row.id_external,
        workflowId: row.id_workflow,
      };
    })));
  }

}
