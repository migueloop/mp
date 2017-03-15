import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { getProductType } from 'helpers/product';
import Actions from 'flux/actions';
import { Actions as ActionsV2 } from 'v02/flux';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import getTimelineStepOptionForm from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/get-form';
import Spinner from 'react-spinjs';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('products'),
  user: state.get('v02').get('common').get('user'),
  users: state.get('backoffice').get('users'),
  notification: state.get('notification'),
  timelines: state.get('timelines'),
  assignmentOrder: state.get('v02').get('backOffice').get('assignmentsOrder').get('current'),
  assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
}));

class DatatableDetail extends Components {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      stepOptionsForm: null,
      gdpInfo: {},
      timelineId: null,
      followUpTaskId: null,
    };
  }

  componentDidMount() {
    this._fetchItemInfo(this.props.data.id);
  }


  componentWillReceiveProps(props) {
    if (this.props.data.id !== props.data.id) {
      this._fetchItemInfo(props.data.id);
    }
  }

  /**
   * Call action for the item (product) to retrieve data
   * @private
   */
  _fetchItemInfo = id => {
    this.loading(true)();
    const userId = this.props.user.get('id');
    console.log('_fetchItemInfo::userId', userId);
    const params = { gdp: true, userId };
    const a = new ActionsV2(this.props.tenant, this.props.user.get('token')).BackOffice.AssignmentsOrder.fetchOne(id, params);
    this.props.dispatch(a)
    .then(this.loading(false));
  }

  onCloseFormModal = () => this.setState({ loading: false, showModal: false, stepOptionsForm: null })

  onSubmitOptionForm = data => {
    this.createFollowUp(data);
    this.setState({ loading: false, showModal: false, stepOptionsForm: null });
  }

  onClickCreateFollowUp = followUpData => () => {
    const timelines = this.props.timelines.toJS();
    const timelineId = followUpData.id_timeline;
    const followUpTaskId = followUpData.id_follow_up_task;
    const timeline = timelines.find(tl => tl.name === timelineId);
    if (!timeline || !timeline.steps || timeline.steps.length === 0) {
      return console.log('Timeline data missing for follow up creation');
    }
    const timelineSteps = timeline.steps;
    this.setState({ followUpTaskId, timelineId }, () => {
      const stepOptionsForm = getTimelineStepOptionForm(this.props.tenant, timelineSteps[0].name);
      if (!timelineSteps[0].manual && stepOptionsForm) {
        return this.setState({ stepOptionsForm, showModal: true });
      }
      return this.createFollowUp();
    });
  }

  createFollowUp = (data = {}) => {
    const payload = {
      assignmentOrderId: this.props.data.id,
      followUpTaskId: this.state.followUpTaskId,
      timelineId: this.state.timelineId,
      data: { ...data, idGdp: this.props.assignmentOrder.get('idGdp'), userId: this.props.user.get('id') },
    };
    return new Actions(this.props.tenant).AssignmentOrderFollowUps.create(payload)
    .then(action => this.props.dispatch(action))
    .then(() => this.props.notification.add({ message: this.format({ id: 'follow_up_created' }), level: 'success' }));
  }

  render() {
    // Not quite sure why we have the data object and the order one. We should only need one.
    const order = this.props.assignmentOrder.toJS();
    const data = this.props.data;
    console.log('detail data', data);
    console.log('detail order', order);
    if (this.state.loading || !data || !this.props.assignmentOrder.get('id')) { return <Spinner />; }
    const orderProduct = data.product;
    const users = this.props.users.toJS();
    const assignment = this.props.assignments.toJS().find(a => a.id === data.idAssignment);
    const assignedBy = users.find(user => user.id === assignment.idAssignedBy);
    const assignedTo = users.find(user => user.id === assignment.idAssignedTo);
    const productType = getProductType(orderProduct.type);
    const tasksAndtimelines = [];
    data.product.followUps.forEach(followUp => {
      const { idFollowUpTask, id } = followUp;
      const value = { id_follow_up_task: idFollowUpTask, id_timeline: id };
      // Don't add if already in list
      if (tasksAndtimelines.find(tasksAndtimeline => tasksAndtimeline.id_timeline === followUp.id_timeline && tasksAndtimeline.id_follow_up_task === followUp.id_follow_up_task)) {
        return;
      }
      tasksAndtimelines.push(value);
    });
    console.log('tasksAndtimelines', tasksAndtimelines);
    // TEMP-SNCF
    // const followUpButtons = tasksAndtimelines.filter(taskAndTimeline => taskAndTimeline.id_timeline === 'portability').map(taskAndTimeline => {
    const followUpButtons = tasksAndtimelines.map(taskAndTimeline => {
      const text = (
        <span className="pull-left">
          <FormattedMessage id={taskAndTimeline.id_timeline} />
        </span>
      );
      return (
        <div>
          <Button style={{ width: '100%' }} onClick={this.onClickCreateFollowUp(taskAndTimeline)} className="btn-validate">
            {text}
            <Glyphicon glyph="plus" className="pull-right" />
          </Button>
          <br />
        </div>
      );
    });
    const actionButtons = <Col xs={12}>{followUpButtons}</Col>;
    order.assignedBy = assignedBy;
    order.assignedTo = assignedTo;
    const TimelineStepOptionForm = this.state.stepOptionsForm;
    return (
      <div>
          <div className="container">
            <Row>
              <h3><FormattedMessage id="assignment_order" /></h3>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="N°" /></Col><Col xs={8}>{data.id_po_system}</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="done_on" /></Col>
                <Col xs={8}>
                  <FormattedDate value={new Date(data.createdAt)} />
                </Col>
              </Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="by" /></Col><Col xs={8}>{`${order.assignedBy.name} ${order.assignedBy.order}`}</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_to" /></Col><Col xs={8}>{`${order.assignedTo.name} ${order.assignedTo.order}`}</Col></Row>

            </Row>
            <Row>
              <h3><FormattedMessage id="content" /></h3>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="name" /></Col><Col xs={8}>{orderProduct.name}</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="Type" /></Col><Col xs={8}><FormattedMessage id={productType} /></Col></Row>
              <Row><Col xs={4} className="v-list-label" /><Col xs={8}><Thumbnail src={orderProduct.logoUrl} /></Col></Row>
            </Row>
            {followUpButtons.length > 0 &&
              <Row className="action-buttons">
                <h3><FormattedMessage id="action(s)" /></h3>
                <Row>{actionButtons}</Row>
              </Row>
            }
          </div>
          <Modal show={this.state.showModal} onHide={this.onCloseFormModal} className="timeline-steps-options-modal modal-v2-form" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body>
              <div className="centered">{
                TimelineStepOptionForm &&
                <TimelineStepOptionForm submitTextKey="create_follow_up"
                  assignmentOrder={this.props.assignmentOrder}
                  onSubmit={this.onSubmitOptionForm}
                  loading={this.state.loading} />
                }
              </div>
            </Modal.Body>
          </Modal>
      </div>
    );
  }
}

const _components = {
  default: connector(DatatableDetail),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
