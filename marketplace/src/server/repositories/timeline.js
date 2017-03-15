import Repository from './drivers/mysql';
import { groupBy } from 'helpers/utils';
import workflowRepository from './workflow';

export default class TimelinesRepository {

  constructor(tenant) {
    this._repo = new Repository(tenant, 'timeline');
    this.tenant = tenant;
    this._wfRepository = new workflowRepository(tenant);
  }

  getAll() {
    let groupedByRelatedTimelines;
    return this._repo.query('select trt.parent_id, tl.name child_id from timeline_related_timelines trt inner join timeline tl on trt.child_id = tl.id')
    .then(rows => {
      groupedByRelatedTimelines = rows.reduce((prev, next) => {
        if (!prev[next.parent_id]) {
          prev[next.parent_id] = [];
        }
        prev[next.parent_id].push(next.child_id);
        return prev;
      }, {});
      return Promise.resolve();
    })
    .then(() => this._repo.query('SELECT t.id as timelineId, t.name as timelineName, t.type as type, ts.id as stepId, ts.name as stepName, ts.manual as manual, ts.order as stepOrder FROM timeline as t, timeline_steps as ts WHERE t.id = ts.id_timeline'))
    .then(res => {
      const groupedByTl = groupBy(res, 'timelineId');
      // now parse object timeline
      const aTimelines = [];
      if (groupedByTl && Object.keys(groupedByTl).length > 0) {
        for (const tl in groupedByTl) {
          if ({}.hasOwnProperty.call(groupedByTl, tl)) {
            const timeline = {};
            timeline.id = +tl;
            timeline.name = groupedByTl[tl][0].timelineName;
            timeline.type = groupedByTl[tl][0].type;
            timeline.steps = groupedByTl[tl].map(s => {
              const tmpStep = {
                id: s.stepId,
                name: s.stepName,
                manual: s.manual,
              };
              return tmpStep;
            });
            timeline.relatedTimelines = groupedByRelatedTimelines[timeline.id] || [];
            aTimelines.push(timeline);
          }
        }
      }
      return Promise.resolve(aTimelines);
    });
  }

  getItemCurrentTimelineStep(payload) {
    // this must receive and array of timelines
    return this._wfRepository.currentSteps(payload.timelines);
  }
}
