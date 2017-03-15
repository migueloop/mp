/**
 * Created by cjgm on 6/12/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import { FormattedMessage } from 'react-intl';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import ModalCompleteActionCmpt from 'v02/back-office/modules/modals/modal-complete-assignment-action';
import getTimelineStepOptionForm from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/get-form';
import Modal from 'react-bootstrap/lib/Modal';
import formSerialize from 'form-serialize';
import querystring from 'querystring';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import { Actions as V02Actions } from 'v02/flux';
import _ from 'underscore';
import DatatableDetailCmpt from 'v02/back-office/modules/assignments/components/_common/table-details/assignment-order';


class InProgress extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const showOnlyActionableOrders = !!props.isNotification || false;
    const showActionableOrdersFilter = !!props.isNotification;
    this.state = {
      aProducts: [],
      modalAssignment: null,
      modalTimeLine: false,
      workflowId: null,
      modalCompleteAction: false,
      completeActionItem: {},
      itemPurchaseOrder: null,
      stateFetched: true,
      fetchingData: false,
      aPendingSteps: {},
      loadingPending: false,
      showTimelineStepOptionsDeviceModal: false,
      showTimelineStepOptionsLineModal: false,
      showOnlyActionableOrders,
      showActionableOrdersFilter,
    };
    this.actions = new Actions(this.props.tenant);
    this.v02Actions = new V02Actions(this.props.tenant, this.props.user.token);
  }

  /*
   * @param tenant
   * @param dispatch
   * @param params
   * @param query
   * @returns {Promise|Promise.<T>}
   */
  static fetchData(tenant, dispatch, params = {}, query = {}) {
    const Action = new Actions(tenant);
    // Insert here the Action to fetch the needed data
    return Promise.all([])
    .then(actions => Promise.resolve(actions))
    .then(() => Action.Seo.set({ type: '', data: {} }))
    .then(action => Promise.resolve(dispatch(action)));
  }

  componentDidMount() {
    console.log('IN PROGRESS::componentDidMount');
    this.actions.AssignmentOrders.All.then(action => this.props.dispatch(action));
    const authorisedActions = new V02Actions(this.props.tenant, this.props.user.token);
    this.props.dispatch(authorisedActions.BackOffice.Assignments.fetch());
    this.props.dispatch(authorisedActions.BackOffice.AssignmentsOrder.fetch());
  }

  getOrders = () => {
    if (!this.props.assignments.length || this.props.assignments.length === 0) {
      return [];
    }
    const actionableOrdersOnly = this.props.location.query.actionable === 'true';
    const assignmentOrderId = parseInt(this.props.location.query.assignmentOrderId, 10);
    let orders = this.props.assignments.reduce((prev, next) => prev.concat(next.items), []);
    if (assignmentOrderId) {
      orders = orders.filter(order => order.id === assignmentOrderId);
    }
    // TODO: get timeline step access data
    // orders = orders.map(order => {
    //   const timelineMatch = this.props.timelines.toJS().find(timeline => timeline.id === order.product.idTimeline);
    //   const users = this.props.users.toJS();
    //   const usersWithAccessToCurrentStep = this.getUsersWithAccessToStep(order.stepName, users, order.product.created_by);
    // })
    orders = orders.filter(order => {
      if (!order.stepName) {
        return false;
      }
      return true;
    });

    orders = orders.map(order => {
      // Access to activate step logic
      // this is duplicated in detail view

      const userId = this.props.user.id;
      const roleId = this.props.user.id_role;

      const currentStepExecutors = this.getCurrentStepExecutors(order);

      const rolesWithAccessToCurrentStep = currentStepExecutors ? currentStepExecutors.roleIds : [];
      const usersWithRolesThatHaveAccessToCurrentStep = this.props.users.toJS().filter(u => rolesWithAccessToCurrentStep.includes(u.id_role)).map(u => u.id);

      const usersWithAccessToCurrentStep = currentStepExecutors ? _.uniq(currentStepExecutors.userIds.concat(usersWithRolesThatHaveAccessToCurrentStep)) : [];

      // If there's no one configured to access the step, then there's no restriction
      const hasAccessToCurrentStep = (rolesWithAccessToCurrentStep.length <= 0 && usersWithAccessToCurrentStep.length <= 0) ||
      rolesWithAccessToCurrentStep.includes(roleId) || usersWithAccessToCurrentStep.includes(userId);

      order.hasAccessToAtLeastOneStep = this.currentUserHasAccessToOneStep(order);
      order.hasAccessToCurrentStep = hasAccessToCurrentStep;
      order.usersWithAccessToCurrentStep = usersWithAccessToCurrentStep;
      return order;
    });

    orders = orders.filter(order => this.orderShouldBeShown(order));

    const sortedOrders = orders
    .sort((a, b) => a.assigned_at - b.assigned_at)
    .sort((a, b) => {
      const userHasAccessToCurrentStep = b.usersWithAccessToCurrentStep.indexOf(this.props.user.id) !== -1;
      return userHasAccessToCurrentStep ? 1 : 0;
    });
    if (this.state.showOnlyActionableOrders || actionableOrdersOnly) {
      const reFilteredOrders = sortedOrders.filter(order => {
        return order.usersWithAccessToCurrentStep.indexOf(this.props.user.id) !== -1;
      });
      return reFilteredOrders;
    }
    return sortedOrders;
  }

  getCurrentStepExecutors(order) {
    const timelineSteps = order.product.timeline && order.product.timeline.timelineSteps || [];
    const currentStep = timelineSteps.find(step => step.name === order.stepName);
    const currentStepId = currentStep && currentStep.id;
    return order.product.timelineStepExecutors.find(executors => executors.idTimelineStep === currentStepId);
  }

  currentUserHasAccessToOneStep(order) {
    const productStepExecutorUserIds = order.product && order.product.timelineStepExecutors && order.product.timelineStepExecutors.userIds || [];
    const productStepExecutorRoleIds = order.product && order.product.timelineStepExecutors && order.product.timelineStepExecutors.roleIds || [];
    return productStepExecutorUserIds.indexOf(this.props.user.id) !== -1 || productStepExecutorRoleIds.indexOf(this.props.user.id_role) !== -1;
  }

  orderShouldBeShown(order) {
    const assignment = this.props.assignments.find(ass => ass.id === order.idAssignment);
    const hasAccessToAtLeastOneStep = order.hasAccessToAtLeastOneStep;
    const isAssignmentCreator = assignment.idAssignedBy === this.props.user.id;
    const isAssignee = assignment.idAssignedTo === this.props.user.id;
    const hasPermissionToEditAllAssignments = this.props.user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id);
    const hasPermissionToViewAllAssignments = this.props.user.permissions.includes(PERMISSIONS.VIEW_ALL_ASSIGNMENTS.id);
    return (hasAccessToAtLeastOneStep || isAssignmentCreator || isAssignee || hasPermissionToEditAllAssignments || hasPermissionToViewAllAssignments);
  }

  /**
   * When the button NEXT STEP of every product is clicked, trigger the action to complete next step
   * @private
   */
  _doNextStep = params => {
    const orders = this.getOrders();
    console.log('_doNextStep::params', params);
    this.setState({ stateFetched: false, fetchingData: true }, () => {
      this.actions.Assignments.CompleteAssignment(this.state.completeActionItem.idAssignment, this.state.completeActionItem.idPoSystem, params)
      .then(action => Promise.resolve(this.props.dispatch(action)))
      // .then(() => this.actions.AssignmentOrders.All.then(action => this.props.dispatch(action)))
      .then(() => this.props.dispatch(this.v02Actions.BackOffice.Assignments.fetch()))
      .then(() => this.actions.UserNotifications.createAssignmentOrderActionNotifications({ assignmentOrders: orders, currentUserId: this.props.user.id }))
      .then(action => this.props.dispatch(action))
      .then(() => Promise.resolve(this.setState({
        stateFetched: true,
        fetchingData: false,
        aPendingSteps: {},
        modalCompleteAction: false,
        showTimelineStepOptionsLineModal: false,
        showTimelineStepOptionsDeviceModal: false,
      })));
    });
  };

  propsToPassDown = {
    onClickNextStep: data => {
      // TODO: Refactor this to be more generic
      if (data.stepName === 'tl_step_fleet_updated_line_1') {
        this.setState({ completeActionItem: data, showTimelineStepOptionsLineModal: true });
      } else if (data.stepName === 'tl_step_fleet_updated_device_2') {
        this.setState({ completeActionItem: data, showTimelineStepOptionsDeviceModal: true });
      } else {
        this.setState({ completeActionItem: data, modalCompleteAction: true });
      }
    },
    onClickPurchaseOrder: data => {
      this.setState({ itemPurchaseOrder: data });
    },
    onClickTimeline: data => {
      this.setState({ workflowId: data.idWorkflowInstance, modalTimeLine: true });
    },
  }

  transform = {
    showDate: date => {
      return `${moment(date).format('D MMM. YYYY').toLowerCase()} ${this.format({ id: 'at' })} ${moment(date).format('hh:mm')}`;
    },
    assignedBy: assignedByInfo => assignedByInfo ? `${assignedByInfo.name} ${assignedByInfo.lastname}` : '',
    assignedTo: assignedToInfo => assignedToInfo ? `${assignedToInfo.name} ${assignedToInfo.lastname}` : '',
    type: product => {
      let text = ITEM.TYPES.SUPPORT;
      const itemType = product.type;
      if (itemType === ITEM.TYPES.MATERIAL) {
        text = ITEM.TYPES.MATERIAL;
      }
      if (itemType === ITEM.TYPES.LINE) {
        text = ITEM.TYPES.LINE;
      }
      return <Label text={text} style={{ textTransform: 'uppercase' }} ><FormattedMessage id={text} /></Label>;
    },
    state: (state = 'state_missing') => <Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label>,
    assignmentId: (id = 'id_missing') => {
      const onClick = () => console.log('click:', id);
      return <Label onClick={onClick} id={id} style={{ textTransform: 'uppercase', cursor: 'pointer' }}>{id}</Label>;
    },
    productName: (field, row) => {
      return row.product.name;
    },
  };

  search = {
    state: (filter, jsxObject, rowData) => filter === rowData.state,
    type: (filter, jsxObject) => filter === jsxObject.props.text,
    assignmentId: (filter, jsxObject) => filter === jsxObject.props.id,
  }


  closeTimelineStepOptionsLineModal = () => {
    this.setState({ showTimelineStepOptionsLineModal: false });
  };


  closeTimelineStepOptionsDeviceModal = () => {
    this.setState({ showTimelineStepOptionsDeviceModal: false });
  };


  onSubmitDeviceForm = e => {
    e.preventDefault();
    const formData = querystring.parse(formSerialize(e.target));
    const imei = formData.imei_number;
    const serialNumber = formData.serial_number;
    const purchaseDate = moment(formData.purchase_date).format();
    const guarantee = formData.guarantee_duration;
    const params = { imei, serialNumber, purchaseDate, guarantee };
    this._doNextStep(params);
  };

  validateDeviceForm(formData) {
    let result = true;

    if (formData.imei_number && (formData.imei_number.length < 14 || formData.sim_number.length > 15 || isNaN(formData.sim_number))) {
      this.props.notification.add({ message: <FormattedMessage id="IMEI_invalid" />, level: 'error' });
      result = false;
    }

    return result;
  }

  onSubmitLineForm = e => {
    e.preventDefault();
    const formData = querystring.parse(formSerialize(e.target));

    if (!this.validateLineForm(formData)) {
      return;
    }

    const phoneNumber = formData.telephone_number;
    const billingAccountId = formData.billing_account;
    const iccid = formData.sim_number;
    const puK1 = formData.puk_code_1;
    const puK2 = formData.puk_code_2;
    const piN1 = formData.pin;
    const rio = formData.rio_number;
    const params = { phoneNumber, billingAccountId, iccid, puK1, puK2, piN1, rio };

    this._doNextStep(params);
  };

  validateLineForm(formData) {
    let result = true;

    if (formData.sim_number && (formData.sim_number.length < 5 || formData.sim_number.length > 20 || isNaN(formData.sim_number))) {
      this.props.notification.add({ message: <FormattedMessage id="ICCID_invalid" />, level: 'error' });
      result = false;
    }

    if (formData.puk_code_1 && formData.puk_code_1.length > 8) {
      this.props.notification.add({ message: <FormattedMessage id="puk_8_chars" />, level: 'error' });
      result = false;
    }

    if (formData.puk_code_2 && formData.puk_code_2.length > 8) {
      this.props.notification.add({ message: <FormattedMessage id="puk_8_chars" />, level: 'error' });
      result = false;
    }

    if (formData.pin && (formData.pin.length < 4 || formData.pin.length > 8 || isNaN(formData.pin))) {
      this.props.notification.add({ message: <FormattedMessage id="pin_invalid" />, level: 'error' });
      result = false;
    }

    return result;
  }

  onCheck = () => this.setState({ showOnlyActionableOrders: !this.state.showOnlyActionableOrders })

  render() {
    const [Datatable, Summary] = [DatatableCmpt, DatatableDetailCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ModalTimeLine, ModalPurchaseOrder, ModalCompleteAction] = [ModalTimeLineCmpt, ModalPurchaseOrderCmpt, ModalCompleteActionCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const TimelineStepOptionDeviceForm = getTimelineStepOptionForm(this.props.tenant, 'tl_step_fleet_updated_device_1');
    const TimelineStepOptionLineForm = getTimelineStepOptionForm(this.props.tenant, 'tl_step_fleet_updated_line_1');
    const data = this.getOrders();
    const assignmentIds = data.reduce((prev, next) => {
      if (prev.indexOf(next.id_po_system_assignment) === -1) {
        prev.push(next.id_po_system_assignment);
      }
      return prev;
    }, [])
    .map(id => ({ value: id, title: id }));
    return (
      <div className="row">
        { this.state.showActionableOrdersFilter &&
        <div className="" style={{ padding: '0px 0px 10px 0px' }}>
            <Input id="actionable_orders" type="checkbox" checked={this.state.showOnlyActionableOrders} onClick={this.onCheck} className="checkbox-custom">
              <label for="actionable_orders" className="checkbox-custom-label"><FormattedMessage id="show_only_actionable_orders" /></label>
            </Input>
          </div>
        }
        <Datatable data={data} >
          <Datatable.DataColumn field="assigned_at" title={this.format({ id: 'assigned_at' })} size={3} transform={this.transform.showDate} sortable={true} />
          <Datatable.DataColumn field="assignmentPoSystemId" title={this.format({ id: 'assignment_id' })} size={2} search={this.search.assignmentId} transform={this.transform.assignmentId} searchType="select" searchOptions={assignmentIds} />
          <Datatable.DataColumn field="idPoSystem" title={this.format({ id: 'assignment_order_id' })} size={3} search />
          <Datatable.DataColumn field="name" transform={this.transform.productName} title={this.format({ id: 'label' })} size={4} sortable={true} search />
          <Datatable.SummaryColumn ><Summary { ...this.propsToPassDown } /></Datatable.SummaryColumn>
        </Datatable>
        <div>

          <ModalTimeLine workflowId={this.state.workflowId} show={!!this.state.modalTimeLine} onHide={() => {this.setState({ modalTimeLine: false, workflowId: null });}} />
          <ModalPurchaseOrder item={this.state.itemPurchaseOrder} show={!!this.state.itemPurchaseOrder} onHide={() => {this.setState({ itemPurchaseOrder: null });}} />
          <ModalCompleteAction item={this.state.completeActionItem} show={!!this.state.modalCompleteAction} loaded={!this.state.fetchingData} onConfirm={() => { this._doNextStep({}); }} onHide={() => {this.setState({ modalCompleteAction: false, completeActionItem: null });}} />

          <Modal show={this.state.showTimelineStepOptionsLineModal} onHide={this.closeTimelineStepOptionsLineModal} className="timeline-steps-options-modal" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body>
              <div className="centered"><TimelineStepOptionLineForm onSubmit={this.onSubmitLineForm} loading={this.state.fetchingData} /></div>
            </Modal.Body>
          </Modal>

          <Modal show={this.state.showTimelineStepOptionsDeviceModal} onHide={this.closeTimelineStepOptionsDeviceModal} className="timeline-steps-options-modal" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body >
              <div className="centered"><TimelineStepOptionDeviceForm onSubmit={this.onSubmitDeviceForm} loading={this.state.fetchingData} /></div>
            </Modal.Body>
          </Modal>

        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user').toJS(),
    users: state.get('backoffice').get('users'),
    products: state.get('products').toJS(),
    assignments: state.get('v02').get('backOffice').get('assignments').get('all').toJS().filter(a => a.idState === 5),
    // assignments: state.get('assignments').toJS().filter(a => a.state === ITEM.STATE.KEY.VALIDATED),
    // assignmentOrders: state.get('assignmentOrders').toJS(),
    timelines: state.get('timelines'),
    notification: state.get('notification'),
  };
}

const _components = {
  default: connect(stateToProps)(InProgress),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
