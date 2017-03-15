import Repository from './drivers/mysql';
import workflowRepository from './workflow';
import timelineRepository from './timeline';
import queryString from 'query-string';

export default class AssignmentOrderFollowUpsRepository {

  constructor(tenant) {
    this._repo = new Repository(tenant, 'assignment_order_follow_ups');
    this.tenant = tenant;
  }

  getAll() {
    const workflow = new workflowRepository(this.tenant);
    let returnRows;
    return this._repo.query('select * from assignment_order_follow_ups')
    .then(rows => {
      returnRows = rows;
      const timelineIds = rows.map(row => row.id);
      console.log('timelineIds', timelineIds);
      return workflow.currentSteps(timelineIds);
    })
    .then((currentSteps = []) => {
      console.log('currentSteps', currentSteps);
      const rowsWithCurrentStep = returnRows.map(row => {
        const currentStepMatch = currentSteps.find(step => parseInt(step.id, 10) === row.id);
        if (!currentStepMatch) {
          console.log('No matching timeline found for ', row);
          return Object.assign({}, row, { id_current_step: null });
        }
        return Object.assign({}, row, { id_current_step: currentStepMatch.step });
      });
      return Promise.resolve(rowsWithCurrentStep);
    });
  }

  create(payload) {
    const workflow = new workflowRepository(this.tenant);
    const timelineRepo = new timelineRepository(this.tenant);
    const { followUpTaskId, assignmentOrderId, timelineId, data } = payload;
    const options = queryString.stringify(data);
    const inputData = [followUpTaskId, assignmentOrderId, timelineId, options];
    let currentSteps;
    let timelines;
    let timelineMatch;
    let lastInsertIds = [];
    const insertFollowUpQuery = 'insert into assignment_order_follow_ups (id_follow_up_task, id_assignment_order, id_timeline, options) VALUES (?, ?, ?, ?)';
    return timelineRepo.getAll()
    .then(timelinesRes => {
      timelines = timelinesRes;
      timelineMatch = timelines.find(timeline => timeline.name === timelineId);
      if (!timelineMatch) { throw new Error('No timeline match found to create order follow ups'); }
      const insertFollowUpQueries = [this._repo.query(insertFollowUpQuery, inputData)];
      if (timelineMatch.relatedTimelines.length > 0) {
        timelineMatch.relatedTimelines.forEach(relatedTimelineId => {
          insertFollowUpQueries.push(this._repo.query(insertFollowUpQuery, [followUpTaskId, assignmentOrderId, relatedTimelineId, options]));
        });
      }
      return Promise.all(insertFollowUpQueries);
    })
    .then(responses => Promise.resolve(responses.map(res => res.insertId)))
    .then(insertIds => {
      lastInsertIds = insertIds;
      return Promise.resolve(lastInsertIds);
    })
    .then(insertIds => this._repo.query('select * from assignment_order_follow_ups where id in(?)', [insertIds]))
    .then(rows => {
      const timelinesToCreate = rows.map(row => {
        const definitions = Object.assign({ idFollowUp: row.id }, data || {});
        return {
          label: `${row.id_timeline}`, // need the specific timeline id here
          id: `${row.id}`,
          definitions,
        };
      });
      const workflowData = {
        label: `${followUpTaskId}-${new Date().getTime()}`,
        definitions: {},
        timelines: timelinesToCreate,
      };
      console.log('workflowData', workflowData);
      return workflow.create(workflowData);
    })
    .then(res => {
      console.log('timeline res', res);
      // if null then failed
      if (!res) {
        const errText = '===== WORKFLOW CREATION FAILED =====';
        console.log(errText);
        throw new Error(errText);
      }
      return Promise.resolve(res);
    })
    .then(workflowInstanceId => this._repo.query('update assignment_order_follow_ups set id_workflow_instance=? where id in(?)', [workflowInstanceId, lastInsertIds]))
    .then(() => workflow.currentSteps(lastInsertIds))
    .then(timelineResponse => {
      currentSteps = timelineResponse;
      console.log('currentSteps', currentSteps);
    })
    .then(() => this._repo.query('select * from assignment_order_follow_ups where id in(?)', [lastInsertIds]))
    .then(rows => {
      console.log('rows', rows);
      const returnRows = rows.map(row => {
        const currentStep = currentSteps.find(step => parseInt(step.id, 10) === row.id).step;
        return Object.assign({}, rows[0], { id_current_step: currentStep });
      });
      return Promise.resolve(returnRows);
    })
    .catch(e => {
      console.log('Error creating follow up - deleting row', e, lastInsertIds);
      this._repo.query('delete from assignment_order_follow_ups where id in(?)', [lastInsertIds]);
      throw e;
    });
  }

  completeCurrentStep(idFollowUp, data) {
    const options = data ? queryString.stringify(data) : null;
    const workflow = new workflowRepository(this.tenant);
    // workflow.currentSteps(timelineIds)
    let returnRow;
    return workflow.dispatch(Object.assign({}, { idFollowUp }, data))
    // TODO: perhaps merge data here instead of overwriting
    .then(() => {
      if (!options) { return Promise.resolve(); }
      return this._repo.query('select * from assignment_order_follow_ups where id = ?', [idFollowUp])
      .then(rows => {
        console.log('completeCurrentStep::rows', rows);
        const followUp = rows[0];
        const currentOptions = followUp.options || '';
        const parsedOptions = queryString.parse(currentOptions) || {};
        const parsedNewOptions = queryString.parse(options) || {};
        const newOptions = queryString.stringify(Object.assign({}, parsedOptions, parsedNewOptions));
        console.log('completeCurrentStep::options', options);
        console.log('completeCurrentStep::parsedOptions', parsedOptions);
        console.log('completeCurrentStep::newOptions', newOptions);
        return this._repo.query('update assignment_order_follow_ups SET options = ? where id = ?', [newOptions, idFollowUp]);
      });
    })
    .then(() => this._repo.query('select * from assignment_order_follow_ups where id = ?', [idFollowUp]))
    .then(rows => Promise.resolve(rows[0]))
    .then(row => {
      returnRow = row;
    })
    .then(() => workflow.currentSteps([returnRow.id]))
    .then(res => {
      if (!res) {
        returnRow.id_current_step = null;
      } else {
        returnRow.id_current_step = res[0].step;
      }
      return Promise.resolve(returnRow);
    });
  }

  // update(payload) {
  //   const { id, assignmentOrderId, poSystemId } = payload;
  //   const inputData = [assignmentOrderId, poSystemId, id];
  //   return this._repo.query('update assignment_order_follow_ups SET id_assignment_order = ?, id_po_system = ? WHERE id = ?', inputData)
  //   .then(() => this._repo.query('select * from assignment_order_follow_ups where id = ?', [id]))
  //   .then(rows => Promise.resolve(rows[0]));
  // }
}
