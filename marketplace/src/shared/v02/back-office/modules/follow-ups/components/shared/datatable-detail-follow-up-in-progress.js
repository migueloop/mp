import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ActionButtonCmpt from 'v02/back-office/generic-components/buttons/action-small';
import moment from 'moment';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage } from 'react-intl';
import { getProductType } from 'helpers/product';
import Actions from 'flux/actions';
import Modal from 'react-bootstrap/lib/Modal';
import getTimelineStepOptionForm from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/get-form';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import queryString from 'query-string';
import { LongDate } from 'v02/back-office/generic-components/dates';
import Spinner from 'react-spinjs';

import { Actions as ActionsV2 } from 'v02/flux';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('products'),
  user: state.get('v02').get('common').get('user'),
  users: state.get('backoffice').get('users'),
  notification: state.get('notification'),
  timelines: state.get('timelines'),
  assignmentOrderFollowUp: state.get('v02').get('backOffice').get('assignmentsOrderFollowUps').get('current'),
  assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
}));

class DatatableDetail extends Components {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showModal: false,
      gdpInfo: {},
      stepOptionsForm: null,
    };
  }

  // componentDidMount() {
  //   this._fetchItemInfo();
  // }
  //
  // componentWillReceiveProps(props) {
  //   if (!props.data || this.props.data.id === props.data.id) {
  //     return;
  //   }
  //   this._fetchItemInfo(props);
  // }

  /**
   * Call action for the item (product) to retrieve data
   * @private
   */
  // _fetchItemInfo = props => {
  //   props = props || this.props;
  //   console.log('_fetchItemInfo::props', props);
  //   // const productId = this.props.data.assignmentOrder.product.id
  //   const params = { userId: this.props.user.get('id') };
  //   console.log('_fetchItemInfo::params', params);
  //   const followUpId = props.data.id;
  //   const authorisedActions = new ActionsV2(this.props.tenant, this.props.user.get('token'));
  //   this.props.dispatch(authorisedActions.BackOffice.Assignments.fetch());
  //   this.props.dispatch(authorisedActions.BackOffice.AssignmentsOrderFollowUps.fetchOne(followUpId, params));
  // };

  onClickCompleteCurrentStep = () => {
    const optionsForm = getTimelineStepOptionForm(this.props.tenant, this.props.data.id_current_step);
    if (optionsForm) {
      return this.setState({ showModal: true });
    }
    this.completeCurrentStep();
  }

  completeCurrentStep = (optionalData = {}) => {
    this.setState({ loading: true }, () => {
      const id = this.props.data.id;
      new Actions(this.props.tenant).AssignmentOrderFollowUps.completeCurrentStep(id, optionalData)
      .then(action => this.props.dispatch(action))
      .then(() => this.props.notification.add({ message: this.format({ id: 'follow_up_updated' }), level: 'success' }))
      .then(() => this.setState({ loading: false, showModal: false, stepOptionsForm: null }));
    });
  }

  onSubmitOptionForm = data => {
    this.completeCurrentStep(data);
    this.setState({ loading: false, showModal: false, stepOptionsForm: null });
  }

  onCloseFormModal = () => this.setState({ loading: false, showModal: false, stepOptionsForm: null })
  render() {
    const data = this.props.data;
    console.log('data', data);
    if (!data.id) { return <Spinner />; }
    const followUpTimelines = this.props.timelines.toJS().filter(timeline => timeline.type === 'follow-up');
    const timelineMatch = followUpTimelines.find(timeline => timeline.name === this.props.data.id_timeline);
    if (!timelineMatch) {
      throw new Error('No matching timeline found!');
    }
    // TODO: this whole section needs to be updated for V02
    const stepMatch = timelineMatch.steps.find(step => step.name === data.id_current_step);
    if (!stepMatch) {
      throw new Error('No matching step found!');
    }
    const [ActionButton] = [ActionButtonCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const userCanCompleteStep = data.userCanCompleteStep;
    const completeStepButtonDisabled = this.state.loading || !userCanCompleteStep;
    const users = this.props.users.toJS();
    console.log('users', users);
    const TimelineStepOptionForm = getTimelineStepOptionForm(this.props.tenant, this.props.data.id_current_step);
    const assignedBy = users.find(user => user.id === data.assignment.id_assigned_by);
    const assignedTo = users.find(user => user.id === data.assignment.id_assigned_to);
    console.log('assignedBy', assignedBy);
    console.log('assignedTo', assignedTo);
    // id_assignment is V01 => should be idAssignment
    return (
      <div>
          <div className="container">
            <Row>
              <h3><FormattedMessage id="assignment_order" /></h3>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="N°" /></Col><Col xs={8}>{data.assignmentOrder.id_po_system}</Col></Row>
              <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="done_on" /></Col>
                <Col xs={8}>
                  <LongDate date={data.assignment.assigned_at} />&nbsp;&nbsp;
                  { moment(data.assignment.assigned_at).format('hh:mm:ss') }
                </Col>
              </Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_by" /></Col><Col xs={8}>{ `${assignedBy.name} ${assignedBy.lastname}` }</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_to" /></Col><Col xs={8}>{ `${assignedTo.name} ${assignedTo.lastname}` }</Col></Row>
            </Row>

            <Row>
              <h3><FormattedMessage id="content" /></h3>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="name" /></Col><Col xs={8}>{data.assignmentOrder.product.name}</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="Type" /></Col><Col xs={8}><FormattedMessage id={data.assignmentOrder.product.type} /></Col></Row>
              <Row><Col xs={4} className="v-list-label" /><Col xs={8}><Thumbnail src={data.assignmentOrder.product.logoUrl} /></Col></Row>
            </Row>
            <Row className="action-buttons">
              <h3><FormattedMessage id="action(s)" /></h3>
              <Row><Col xs={12}>
                <ActionButton type="detail" onClick={() => this.props.onClickTimeline(data)} />
                <ActionButton type="purchase-order" onClick={() => this.props.onClickPurchaseOrder(data)} />
                <Button disabled={completeStepButtonDisabled} onClick={this.onClickCompleteCurrentStep} className="btn-ico-left">
                  <Glyphicon glyph="flag" className="ico ico-left" />
                  <FormattedMessage id={this.props.data.id_current_step} />
                </Button>
              </Col>
              </Row>
            </Row>
          </div>
          <Modal show={this.state.showModal} onHide={this.onCloseFormModal} className="timeline-steps-options-modal modal-v2-form" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body>
              <div className="centered">
                { TimelineStepOptionForm &&
                  <TimelineStepOptionForm followUp={this.props.assignmentOrderFollowUp}
                                          onSubmit={this.onSubmitOptionForm} /> }
              </div>
            </Modal.Body>
          </Modal>
      </div>
    );
  }
}
// onSubmit={this.onSubmitDeviceForm} loading={this.state.fetchingData}
// <TimelineStepOptionLineForm onSubmit={this.onSubmitLineForm} loading={this.state.fetchingData} />
const _components = {
  default: connector(DatatableDetail),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
