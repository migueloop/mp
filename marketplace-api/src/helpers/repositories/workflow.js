import WorkflowDriver from './drivers/workflow';

export default class GDPRepository {
  constructor(tenant, idUser) {
    this.api = new WorkflowDriver(tenant, idUser);
  }

  create(data) {
    return this.api.post({
      endpoint: 'workflow/create',
      data,
    });
  }

  get(id, data) {
    return this.api.get({ endpoint: `workflow/${id}`, data });
  }

  getActiveSteps(activeSteps) {
    return this.api.get({
      endpoint: `timeline/${activeSteps}/activeStep`,
    });
  }
}
