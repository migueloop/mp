/**
 * Created by cjgm on 7/14/16.
 */
import Restful from './drivers/restful';
const API = new Restful();

export default class Workflow {

  constructor(tenant) {
    this.tenant = tenant;
  }

  create(data) {
    return API.post({ endpoint: 'workflows', params: { data } });
  }

  currentSteps(ids) {
    return API.get({ endpoint: 'workflows/current-steps', params: { ids } });
  }

  dispatch(data) {
    return API.post({ endpoint: 'workflows/dispatch', params: { data } });
  }

}
