/**
 * Created by cjgm on 7/14/16.
 */
import Restful from './drivers/restful';
const API = new Restful();

export default class Timeline {
  constructor(tenant) {
    this.tenant = tenant;
  }

  getAll() {
    return API.get({
      endpoint: 'timelines',
    });
  }

  getItemCurrentTimelineStep(payload) {
    return API.get({ endpoint: 'timelines/itemcurrenttimelinestep', params: { payload } });
  }
}
