import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import { SimpleSelect, MultiSelect } from 'react-selectize';
import Actions from 'flux/actions';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
// ICONS
import CheckCircleIcon from 'react-icons/lib/fa/check-circle-o';
import CloseIcon from 'react-icons/lib/fa/close';
import ArrowRightIcon from 'react-icons/lib/fa/arrow-right';
import DeleteIcon from 'react-icons/lib/fa/trash-o';
import { Actions as ActionsV02 } from 'v02/flux';

const stateToProps = state => {
  // TODO: move filter/mapping logic out of this function
  return {
    userList: state.get('backoffice').toJS().users.map(u => ({ label: u.name, value: u.id })),
    roleList: state.get('backoffice').toJS().roles.map(r => ({ label: r.name, value: r.id })),
    timelines: state.get('timelines').toJS().filter(timeline => timeline.type === 'follow-up')
    .map(timeline => {
      const copy = _.cloneDeep(timeline);
      copy.steps = copy.steps.map(step => {
        return {
          name: step.name,
          manual: step.manual,
          roleIds: [],
          userIds: [],
          includesProductOwner: false,
        };
      });
      return copy;
    }),
    assignments: state.get('assignments'),
  };
};

class Timeline extends Components {

  constructor(props) {
    super(props);
    const productFollowUps = props.product.followUps || [];
    const followUpTaskIds = [];
    productFollowUps.forEach(followUp => {
      const id = followUp.id_follow_up_task;
      if (followUpTaskIds.indexOf(id) === -1) {
        followUpTaskIds.push(id);
      }
    });
    this.state = {
      currentTimeline: null,
      followUpTaskIds,
      productFollowUps,
    };
    this.state.followUpTasks = this.getFollowUpTasks();
  }

  getFollowUpTasks = () => {
    const followUpTasks = this.state.followUpTaskIds.map(followUpTaskId => {
      const productFollowUpMatches = this.state.productFollowUps.filter(productFollowUp => productFollowUp.id_follow_up_task === followUpTaskId);
      const fullTask = { id: followUpTaskId, timeline: null };
      if (productFollowUpMatches.length === 0) {
        return fullTask;
      }
      productFollowUpMatches.forEach(followUpMatch => {
        if (!fullTask.timeline) {
          const timelineMatch = this.props.timelines.find(timeline => timeline.name === followUpMatch.id_timeline);
          fullTask.timeline = _.cloneDeep(timelineMatch);
        }
        const stepMatch = fullTask.timeline.steps.find(step => step.name === followUpMatch.id_step);
        if (!stepMatch) {
          return fullTask;
        }
        const stepMatchIndex = fullTask.timeline.steps.indexOf(stepMatch);
        fullTask.timeline.steps[stepMatchIndex].roleIds = followUpMatch.role_ids || [];
        fullTask.timeline.steps[stepMatchIndex].userIds = followUpMatch.user_ids || [];
        fullTask.timeline.steps[stepMatchIndex].includesProductOwner = followUpMatch.include_product_owner;
      });
      return fullTask;
    });
    return followUpTasks;
  }

  onChangeUser = row => users => {
    const stepId = row.name;
    const newState = Object.assign({}, this.state);
    const match = this.findByName(this.state.currentTimeline.steps, stepId);
    if (match) {
      newState.currentTimeline.steps[newState.currentTimeline.steps.indexOf(match)].userIds = users.map(u => u.value);
    }
    this.setState(newState);
  }

  onChangeRole = row => roles => {
    const stepId = row.name;
    const newState = Object.assign({}, this.state);
    const match = this.state.currentTimeline.steps.find(i => i.name === stepId);
    if (match) {
      newState.currentTimeline.steps[newState.currentTimeline.steps.indexOf(match)].roleIds = roles.map(r => r.value);
    }
    this.setState(newState);
  }

  onClickIncludeProductOwner = row => e => {
    const stepId = row.name;
    const newState = Object.assign({}, this.state);
    const match = this.findByName(this.state.currentTimeline.steps, stepId);
    if (match) {
      newState.currentTimeline.steps[this.state.currentTimeline.steps.indexOf(match)].includesProductOwner = !newState.currentTimeline.steps[this.state.currentTimeline.steps.indexOf(match)].includesProductOwner;
    }
    this.setState(newState);
  }

  onSave = e => {
    const payload = {
      productId: this.props.product.id,
      followUpTasks: this.state.followUpTasks,
    };
    new Actions(this.props.tenant).Products.setFollowUpTasks(payload)
    .then(action => Promise.resolve(this.props.dispatch(action)))
    .then(() => this.props.notification.add({ message: this.format({ id: 'product_updated' }), level: 'success' }))
    .catch(err => {
      console.log(err);
      console.log(err.message);
      console.log(err.stack);
      return this.props.notification.add({ message: this.format({ id: 'error_updating_product' }), level: 'error' });
    });
  }

  transformProductOwnerCheckbox = disabled => (value, row) => {
    if (!row.manual) {
      return '';
    }
    let checked = false;
    const stepId = row.name;
    if (this.state) {
      const match = this.findByName(this.state.currentTimeline.steps, stepId);
      checked = match ? match.includesProductOwner : false;
    }
    return <div className="text-center"><input disabled={disabled} value={stepId} type="checkbox" onClick={this.onClickIncludeProductOwner(row)} checked={checked} /></div>;
  }

  transformUserList = disabled => (value, row) => {
    if (!row.manual) {
      return '';
    }
    let values = [];
    const stepId = row.name;
    if (this.state) {
      const match = this.findByName(this.state.currentTimeline.steps, stepId);
      values = match ? this.props.userList.filter(u => match.userIds.indexOf(u.value) !== -1) : [];
    }
    return <MultiSelect disabled={disabled} onValuesChange={this.onChangeUser(row)} className="timelineMultiselect" values={values} options={this.props.userList} placeholder={this.format({ id: 'select_user' })} />;
  }

  transformRoleList = disabled => (value, row) => {
    if (!row.manual) {
      return '';
    }
    let values = [];
    const stepId = row.name;
    if (this.state) {
      const match = this.findByName(this.state.currentTimeline.steps, stepId);
      values = match ? this.props.roleList.filter(u => match.roleIds.indexOf(u.value) !== -1) : [];
    }
    return <MultiSelect disabled={disabled} onValuesChange={this.onChangeRole(row)} className="timelineMultiselect" values={values} options={this.props.roleList} placeholder={this.format({ id: 'select_role' })} />;
  }

  transformTimelineList = (value, row) => {
    // TEMP-SNCF
    const timelineOptions = this.props.timelines.filter(timeline => timeline.name === 'portability').map(timeline => {
      const newTimeline = Object.assign(timeline, { label: `${this.format({ id: timeline.name })}`, value: timeline.name });
      return newTimeline;
    });
    const defaultValue = row.timeline ? { label: this.format({ id: row.timeline.name }), value: row.timeline.name } : null;
    return <SimpleSelect defaultValue={defaultValue} onValueChange={this.onChangeFollowUpTimeline(row)} className="timelineMultiselect" options={timelineOptions} placeholder={this.format({ id: 'select_timeline' })} />;
  }

  transformTimelineViewButton = (value, row) => {
    return <Button onClick={this.onClickViewTimeline(row)} ><ArrowRightIcon /></Button>;
  }

  transformTimelineDeleteButton = (value, row) => {
    return <Button onClick={this.onClickDeleteTimeline(row)} ><DeleteIcon /></Button>;
  }

  transformTimelineActions = (value, row) => {
    // return this.transformTimelineViewButton;
  }

  onClickViewTimeline = followUpTaskRow => () => {
    this.setState({ currentTimeline: followUpTaskRow.timeline });
  }

  onClickDeleteTimeline = followUpTaskRow => () => {
    const followUpTasks = this.state.followUpTasks.concat([]);
    const followUpTaskMatch = this.findById(followUpTasks, followUpTaskRow.id);
    const matchIndex = followUpTasks.indexOf(followUpTaskMatch);
    this.setState({
      followUpTasks: this.state.followUpTasks.pop(matchIndex),
    });
    console.log(matchIndex);
  }

  onChangeFollowUpTimeline = followUpTask => timeline => {
    const followUpTasks = this.state.followUpTasks.concat([]);
    const followUpTaskMatch = this.findById(followUpTasks, followUpTask.id);
    const matchIndex = followUpTasks.indexOf(followUpTaskMatch);
    followUpTaskMatch.timeline = Object.assign({}, timeline);
    followUpTasks[matchIndex] = followUpTaskMatch;
    this.setState({ currentTimeline: timeline, followUpTasks });
  }

  findById = (list, id) => list.find(i => i.id === id);
  findByName = (list, name) => list.find(i => i.name === name);

  transformManual = (row, value) => !!value.manual ? <div className="text-center"><CheckCircleIcon size={30} color="green" /></div> : <div className="text-center"><CloseIcon size={30} color="#ff370f" /></div>;

  transformName = value => <FormattedMessage id={value} />

  getFollowUpTasksTable = () => {
    const followUpTasks = this.state.followUpTasks;
    console.log('followUpTasks', followUpTasks);
    const table = (
      <DataTable data={followUpTasks} dtStyle="dark" className="product-timeline-steps" pagination={false}>
        <DataColumn field="id" title="id" />
        <DataColumn field="id" title="timelines" transform={this.transformTimelineList} />
        <DataColumn field="id" title="View" transform={this.transformTimelineViewButton} />
        <Pagination itemPerPage={5} ellipsis={false} style={{ display: 'none' }} />
      </DataTable>
    );
    return table;
  }

  onClickAddFollowUp = () => {
    if (this.state.newFollowUp === '' || !this.state.newFollowUp) {
      return;
    }
    const followUpToAdd = this.state.newFollowUp;
    this.setState({
      followUpTaskIds: this.state.followUpTaskIds.concat([followUpToAdd]),
      newFollowUp: '',
      followUpTasks: this.state.followUpTasks.concat([{ id: followUpToAdd, timeline: null }]),
    });
  }


  render() {
    const timelineTable = this.getFollowUpTasksTable();
    const timelineFormDisabled = false;
    const steps = this.state.currentTimeline && this.state.currentTimeline.steps ? this.state.currentTimeline.steps : [];
    const table = (
      <DataTable data={steps} dtStyle="dark" className="product-timeline-steps">
        <DataColumn field="name" title={this.format({ id: 'name' }) } md={1} transform={this.transformName} />
        <DataColumn field="manual" title={this.format({ id: 'assignable' }) } transform={this.transformManual} md={1} />
        <DataColumn field="roles" title={this.format({ id: 'roles' }) } md={1} transform={this.transformRoleList(timelineFormDisabled)} />
        <DataColumn field="users" title={this.format({ id: 'users' }) } md={1} transform={this.transformUserList(timelineFormDisabled)} />
        <Pagination maxButtons={3} itemPerPage={5} ellipsis={false} style={{ display: 'none' }} />
      </DataTable>
    );
    return (
      <div>
        <Row style={{ marginTop: '120px' }}>
          <Col md={9}><Input type="text" value={this.state.newFollowUp} onChange={({ target }) => this.setState({ newFollowUp: target.value })} /></Col>
          <Col md={3}>
            <Button onClick={this.onClickAddFollowUp} style={{ width: '100%' }}><FormattedMessage id="create_a_follow_up" /></Button>
            <Button bsStyle="primary" disabled={timelineFormDisabled} onClick={this.onSave} style={{ width: '100%', marginTop: '30px' }}>
              <FormattedMessage id="save" />
            </Button>
          </Col>

          <Row style={{ width: '1144px', maxWidth: '135%', float: 'left' }} >
            <Col md={5}>
              <div className="table-followup-timelines">
              <h2><FormattedMessage id="follow_up_timelines"/></h2>
              {timelineTable}
              </div>
            </Col>
            <Col md={7} >
              <div className="table-style-light table-followup-steps" style={{ marginLeft: '30px' }}>
                <h2><FormattedMessage id="steps" /></h2>
                {table}
              </div>
            </Col>
          </Row>

        </Row>
        <Row><Col md={12} style={{ paddingTop: '40px' }}></Col></Row>
      </div>
    );
  }
}



const _components = { default: connect(stateToProps)(Timeline) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
