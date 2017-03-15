import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import { SimpleSelect, MultiSelect } from 'react-selectize';
import Actions from 'flux/actions';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import CheckCircleIcon from 'react-icons/lib/fa/check-circle-o';
import CloseIcon from 'react-icons/lib/fa/close';
import { ITEM } from 'helpers/constants/constants-main';
import { Actions as ActionsV02 } from 'v02/flux';
import { FormattedMessage } from 'react-intl';
import LockedIcon from 'react-icons/lib/fa/lock';

const stateToProps = state => {
  return {
    userList: state.get('backoffice').toJS().users.map(u => ({ label: u.name, value: u.id })),
    roleList: state.get('backoffice').toJS().roles.map(r => ({ label: r.name, value: r.id })),
    timelines: state.get('timelines').toJS().filter(tl => tl.type === 'assignment-order').map(tl => Object.assign({}, tl, { value: tl.id, label: tl.name })),
    assignments: state.get('assignments'),
  };
};

class Timeline extends Components {

  constructor(props) {
    super(props);
    const state = Object.assign({}, this.props.product.timeline, { productId: this.props.product.id });
    state.steps = this.getFullTimelineSteps(state.id, state.steps || []);
    this.state = state;
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };


  getFullTimelineSteps = (id, stepsToMerge) => {
    const match = this.getTimelineFromList(id);
    if (!match) {
      return [];
    }
    return match.steps.map(s => {
      const stepToMerge = stepsToMerge.find(stm => stm.id === s.id);
      if (!stepToMerge) {
        return Object.assign({}, s, { roleIds: [], userIds: [], includesProductOwner: false, productId: this.props.product.id });
      }
      return Object.assign({}, s, { roleIds: stepToMerge.roleIds || [], userIds: stepToMerge.userIds || [], includesProductOwner: stepToMerge.includesProductOwner || false, productId: this.props.product.id });
    });
  }

  getTimelineFromList = id => {
    return this.props.timelines.find(tl => parseInt(tl.id, 10) === parseInt(id, 10));
  };

  getTimelineName = id => {
    const match = this.getTimelineFromList(id);
    return match ? match.name : null;
  }

  onChangeTimeline = ({ value: timelineId }) => {
    const match = this.getTimelineFromList(timelineId);
    const productId = this.props.product.id;
    let newState;
    if (this.props.product.timeline && timelineId === parseInt(this.props.product.timeline.id, 10)) {
      newState = Object.assign({}, this.props.product.timeline, { name: this.getTimelineName(this.props.product.timeline.id), productId, steps: this.getFullTimelineSteps(this.props.product.timeline.id, this.props.product.timeline.steps) });
    } else if (match) {
      newState = Object.assign({}, match, { productId });
      newState.steps = this.getFullTimelineSteps(timelineId, []);
    } else {
      newState = { id: null };
    }
    this.setState(newState);
  }

  onChangeUser = stepId => users => {
    const newState = Object.assign({}, this.state);
    const match = this.findById(this.state.steps, stepId);
    if (match) {
      newState.steps[newState.steps.indexOf(match)].userIds = users.map(u => u.value);
    }
    this.setState(newState);
  }

  onChangeRole = stepId => roles => {
    const newState = Object.assign({}, this.state);
    const match = this.findById(this.state.steps, stepId);
    if (match) {
      newState.steps[newState.steps.indexOf(match)].roleIds = roles.map(r => r.value);
    }
    this.setState(newState);
  }

  onClickIncludeProductOwner = e => {
    const stepId = e.target.value;
    const checked = e.target.checked;
    const newState = Object.assign({}, this.state);
    const match = this.findById(this.state.steps, stepId);
    if (match) {
      newState.steps[this.state.steps.indexOf(match)].includesProductOwner = checked;
    }
    this.setState(newState);
  }

  onSave = e => {
    const formattedMessage = this.context.intl.formatMessage;
    new Actions(this.props.tenant).Products.setProductTimeline(this.state)
    .then(action => Promise.resolve(this.props.dispatch(action)))
    .then(() => this.props.notification.add({ message: formattedMessage({ id: 'product_updated' }), level: 'success' }))
    .catch(err => {
      console.log(err);
      console.log(err.message);
      console.log(err.stack);
      return this.props.notification.add({ message: formattedMessage({ id: 'error_updating_product' }), level: 'error' });
    });
  }

  transformProductOwnerCheckbox = disabled => (row, value) => {
    if (!value.manual) {
      return '';
    }
    let checked = false;
    const stepId = value.id;
    if (this.state) {
      const match = this.findById(this.state.steps, stepId);
      checked = match ? match.includesProductOwner : false;
    }
    return <div className="text-center"><input disabled={disabled} value={stepId} type="checkbox" onClick={this.onClickIncludeProductOwner} checked={checked} /></div>;
  }

  transformUserList = disabled => (row, value) => {
    const formattedMessage = this.context.intl.formatMessage;
    if (!value.manual) {
      return '';
    }
    let values = [];
    const stepId = value.id;
    if (this.state) {
      const match = this.findById(this.state.steps, stepId);
      values = match ? this.props.userList.filter(u => match.userIds.indexOf(u.value) !== -1) : [];
    }
    return <MultiSelect disabled={disabled} onValuesChange={this.onChangeUser(stepId)} className="timelineMultiselect" values={values} options={this.props.userList} placeholder={formattedMessage({ id: 'select_user' })} />;
  }

  transformRoleList = disabled => (row, value) => {
    const formattedMessage = this.context.intl.formatMessage;
    if (!value.manual) {
      return '';
    }
    let values = [];
    const stepId = value.id;
    if (this.state) {
      const match = this.findById(this.state.steps, stepId);
      values = match ? this.props.roleList.filter(u => match.roleIds.indexOf(u.value) !== -1) : [];
    }
    return <MultiSelect disabled={disabled} onValuesChange={this.onChangeRole(stepId)} className="timelineMultiselect" values={values} options={this.props.roleList} placeholder={formattedMessage({ id: 'select_role' })} />;
  }

  findById = (list, id) => list.find(i => parseInt(i.id, 10) === parseInt(id, 10));

  transformManual = (row, value) => !!value.manual ? <div className="text-center"><CheckCircleIcon size={30} color="green" /></div> : <div className="text-center"><CloseIcon size={30} color="#ff370f" /></div>;

  transformName = (row, value) => <FormattedMessage id={value.name} />
  render() {
    const timelineFormDisabled = this.props.assignments.toJS().filter(a => a.id_state === ITEM.STATE.VALIDATED)
    .reduce((p, n) => p || n.items.find(i => parseInt(i.id_product, 10) === this.props.product.id) !== undefined, false);
    // const canEditTimeline = this.props.assignments.
    const formattedMessage = this.context.intl.formatMessage;
    const steps = this.state && this.state.steps && this.state.id ? this.state.steps : [];
    const table = (
      <DataTable data={steps} dtStyle="dark" className="product-timeline-steps">
        <DataColumn field="name" title={formattedMessage({ id: 'name' }) } md={2} transform={this.transformName} />
        <DataColumn field="manual" title={formattedMessage({ id: 'assignable' }) } transform={this.transformManual} md={1} />
        <DataColumn field="includeProductOwner" title={formattedMessage({ id: 'include_product_owner' }) } md={1} transform={this.transformProductOwnerCheckbox(timelineFormDisabled)} />
        <DataColumn field="roles" title={formattedMessage({ id: 'roles' }) } md={4} transform={this.transformRoleList(timelineFormDisabled)} />
        <DataColumn field="users" title={formattedMessage({ id: 'users' }) } md={4} transform={this.transformUserList(timelineFormDisabled)} />
        <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
      </DataTable>
    );
    const savedTimeline = this.props.product.timeline;
    const selectTimeline = { label: formattedMessage({ id: 'no_timeline' }), value: 0 };
    const currentTimelineFromList = this.props.timelines.find(tl => tl.id === this.props.product.timeline.id);
    const options = [selectTimeline].concat(this.props.timelines).map(tl => Object.assign({}, tl, { label: `${tl.label}${savedTimeline && tl.value === parseInt(savedTimeline.id, 10) ? ` (${formattedMessage({ id: 'current' })})` : ''}` }));
    const defaultValue = savedTimeline && savedTimeline.id ? { label: `${savedTimeline.name} (${formattedMessage({ id: 'current' })})`, value: savedTimeline.id } : selectTimeline;
    return (
      <div>
        <Row className="row-eq-height">
          <Col md={6}>
            <h1><FormattedMessage id="timeline" /></h1>
            {timelineFormDisabled &&
              <p className="alert alert-warning"><LockedIcon className="ico-left" />
                <FormattedMessage id="product_timeline_locked" />
              </p>
            }
            <SimpleSelect disabled={timelineFormDisabled} onValueChange={this.onChangeTimeline} className="timelineSimpleSelect" defaultValue={defaultValue} options={options} placeholder={formattedMessage({ id: 'select_timeline' })} />
          </Col>
          <Col md={6} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Button bsStyle="primary" disabled={timelineFormDisabled} onClick={this.onSave} ><FormattedMessage id="save" /></Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <h2><FormattedMessage id="steps" /></h2>
          {table}
          </Col>
        </Row>
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
