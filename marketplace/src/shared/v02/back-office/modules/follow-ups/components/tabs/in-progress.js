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
import { parseFollowUps } from 'helpers/follow-ups';
import { DataColumn } from 'react-datatable-bootstrap';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import ModalCompleteActionCmpt from 'v02/back-office/modules/modals/modal-complete-assignment-action';
import getTimelineStepOptionForm from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/get-form';
import Modal from 'react-bootstrap/lib/Modal';
import formSerialize from 'form-serialize';
import querystring from 'querystring';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import DatatableDetailCmpt from '../shared/datatable-detail-follow-up-in-progress';

class InProgress extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const showOnlyActionableOrders = !this.props.user.permissions.includes(PERMISSIONS.VIEW_ALL_FOLLOW_UPS.id);
    console.log('showOnlyActionableOrders', showOnlyActionableOrders);
    const showActionableOrdersFilter = this.props.user.permissions.includes(PERMISSIONS.VIEW_ALL_FOLLOW_UPS.id);
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
    this.actions.AssignmentOrders.All.then(action => this.props.dispatch(action));
  }
  getOrders = () => {
    console.log('getOrders::this.props', this.props);
    const actionableOrdersOnly = this.props.location.query.actionable === 'true';
    const assignmentOrderFollowUps = this.props.assignmentOrderFollowUps.filter(followUp => followUp.id_current_step !== null);
    const assignmentOrders = this.props.assignmentOrders;
    const assignments = this.props.assignments;
    let newData = parseFollowUps(assignmentOrderFollowUps, assignmentOrders, this.props.user);
    newData = newData.map(followUp => {
      const assignment = assignments.find(ass => ass.id === followUp.assignmentOrder.id_assignment);
      return Object.assign({}, followUp, { assignment });
    });
    // TEMP-SNCF
    // const newData = parseFollowUps(assignmentOrderFollowUps, assignmentOrders, this.props.user).filter(order => order.id_timeline === 'portability');
    if (this.state.showOnlyActionableOrders || actionableOrdersOnly) {
      return newData.filter(row => row.userCanCompleteStep);
    }
    return newData;
  }

  /**
   * When the button NEXT STEP of every product is clicked, trigger the action to complete next step
   * @private
   */
  _doNextStep = params => {
    this.setState({ stateFetched: false, fetchingData: true }, () => {
      this.actions.Assignments.CompleteAssignment(this.state.completeActionItem.id_assignment, this.state.completeActionItem.id_po_system, params)
      .then(action => Promise.resolve(this.props.dispatch(action)))
      .then(() => this.actions.AssignmentOrders.All.then(action => this.props.dispatch(action)))
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
      console.log('onClickPurchaseOrder::data', data)
      this.setState({ itemPurchaseOrder: data });
    },
    onClickTimeline: data => {
      this.setState({ workflowId: data.id_workflow_instance, modalTimeLine: true });
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
    label: product => {
      return product.name;
    },
    state: state => <Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label>,
    assignmentId: id => {
      const onClick = () => console.log('click:', id);
      return <Label onClick={onClick} id={id} style={{ textTransform: 'uppercase', cursor: 'pointer' }}><FormattedMessage id={id} /></Label>;
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

  onSubmitLineForm = e => {
    e.preventDefault();
    const formData = querystring.parse(formSerialize(e.target));
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

  onCheck = () => {
    const newCheckValue = !this.state.showOnlyActionableOrders;
    this.setState({ showOnlyActionableOrders: newCheckValue });
  }

  render() {
    const [Datatable, Summary] = [DatatableCmpt, DatatableDetailCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ModalTimeLine, ModalPurchaseOrder, ModalCompleteAction] = [ModalTimeLineCmpt, ModalPurchaseOrderCmpt, ModalCompleteActionCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const TimelineStepOptionDeviceForm = getTimelineStepOptionForm(this.props.tenant, 'tl_step_fleet_updated_device_1');
    const TimelineStepOptionLineForm = getTimelineStepOptionForm(this.props.tenant, 'tl_step_fleet_updated_line_1');
    const data = this.getOrders();
    const types = [
      { value: ITEM.TYPES.BUNDLE, title: this.format({ id: ITEM.TYPES.BUNDLE }) },
      { value: ITEM.TYPES.LINE, title: this.format({ id: ITEM.TYPES.LINE }) },
      { value: ITEM.TYPES.MATERIAL, title: this.format({ id: ITEM.TYPES.MATERIAL }) },
      { value: ITEM.TYPES.SUPPORT, title: this.format({ id: ITEM.TYPES.SUPPORT }) },
    ];
    const assignmentIds = data.reduce((prev, next) => {
      if (prev.indexOf(next.assignmentOrder.id_po_system_assignment) === -1) {
        prev.push(next.assignmentOrder.id_po_system_assignment);
      }
      return prev;
    }, [])
    .map(id => ({ value: id, title: id }));
    return (
      <div className="row">
        { this.state.showActionableOrdersFilter &&
          <div className="" style={{ padding: '0px 0px 10px 0px' }}>
            <Input id="actionable_orders" type="checkbox" checked={this.state.showOnlyActionableOrders} onClick={this.onCheck} className="checkbox-custom">
                <label className="checkbox-custom-label">
                  <FormattedMessage id="show_only_actionable_follow_ups" />
                </label>
            </Input>
          </div>
        }
        <Datatable data={data} >
          <Datatable.DataColumn field="assigned_at" title={this.format({ id: 'assigned_at' })} size={3} transform={this.transform.showDate} sortable={true} />
          <Datatable.DataColumn field="id_po_system_assignment" title={this.format({ id: 'assignment_id' })} size={3} search={this.search.assignmentId} transform={this.transform.assignmentId} searchType="select" searchOptions={assignmentIds} />
          <Datatable.DataColumn field="id_po_system" title={this.format({ id: 'assignment_order_id' })} size={2} search />
          <Datatable.DataColumn field="product" transform={this.transform.label} title={this.format({ id: 'label' })} size={4} sortable={true} search={this.search.type} searchType="select" searchOptions={types} />
          <Datatable.SummaryColumn ><Summary { ...this.propsToPassDown } /></Datatable.SummaryColumn>
        </Datatable>
        <div>
          <ModalTimeLine workflowId={this.state.workflowId} show={!!this.state.modalTimeLine} onHide={() => {this.setState({ modalTimeLine: false, workflowId: null });}} />
          <ModalPurchaseOrder item={this.state.itemPurchaseOrder} show={!!this.state.itemPurchaseOrder} onHide={() => {this.setState({ itemPurchaseOrder: null });}} />
          <ModalCompleteAction item={this.state.completeActionItem} show={!!this.state.modalCompleteAction} loaded={!this.state.fetchingData} onConfirm={this._doNextStep} onHide={() => {this.setState({ modalCompleteAction: false, completeActionItem: null });}} />
          <Modal show={this.state.showTimelineStepOptionsLineModal} onHide={this.closeTimelineStepOptionsLineModal} className="timeline-steps-options-modal modal-v2-form" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body>
              <div className="centered">
                <TimelineStepOptionLineForm onSubmit={this.onSubmitLineForm} loading={this.state.fetchingData} /></div>
            </Modal.Body>
          </Modal>
          <Modal show={this.state.showTimelineStepOptionsDeviceModal} onHide={this.closeTimelineStepOptionsDeviceModal} className="timeline-steps-options-modal modal-v2-form" bsSize="m" animation={true}>
            <Modal.Header closeButton><FormattedMessage id="timeline_step_options" /></Modal.Header>
            <Modal.Body>
              <div className="centered">
                <TimelineStepOptionDeviceForm onSubmit={this.onSubmitDeviceForm} loading={this.state.fetchingData} /></div>
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
    products: state.get('products').toJS(),
    assignments: state.get('assignments').toJS().filter(a => a.state === ITEM.STATE.KEY.VALIDATED),
    assignmentOrders: state.get('assignmentOrders').toJS(),
    assignmentOrderFollowUps: state.get('assignmentOrderFollowUps').toJS(),
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
