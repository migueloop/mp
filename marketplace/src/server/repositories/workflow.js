/**
 * Created by cjgm on 6/16/16.
 */
import config from 'config';
import Workflow from './drivers/workflow';
import { URL } from 'helpers/constants/workflow';

export default class WorkflowRepository {

  constructor(tenant) {
    this.tenant = tenant;
    this.workflowConfig = config.get(this.tenant).workflow;
    this.workflow = new Workflow(this.tenant);
  }

  /**
   * Will make a POST to the workflow instance to create a new one and return the workflow id
   * @param oData
   */
  create(oData) {
    console.log('create::oData', oData);
    if (this.workflowConfig.disable) { return Promise.resolve(null); }
    delete oData.id;
    return this.workflow.post({ endpoint: URL.ENDPOINT.CREATE, data: oData })
    .then(result => Promise.resolve(result ? result.id : null));
  }

  currentSteps(timelineIds) {
    if (timelineIds.length === 0) {
      return Promise.resolve([]);
    }
    const requestData = { endpoint: `${URL.ENDPOINT.TIMELINE.ROOT}/${timelineIds.join()}/${URL.ENDPOINT.TIMELINE.ACTIVE_STEP}` };
    return this.workflow.get(requestData);
  }

  dispatch(oData) {
    console.log('dispatch::oData', oData);
    console.log('dispatch::URL.ENDPOINT.DISPATCH', URL.ENDPOINT.DISPATCH);
    if (this.workflowConfig.disable) { return Promise.resolve(null); }
    delete oData.id;
    return this.workflow.post({ endpoint: URL.ENDPOINT.DISPATCH, data: oData })
    .then(result => Promise.resolve(result || null))
    .catch(err => Promise.reject(err));
  }
}
