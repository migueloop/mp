import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Label from 'react-bootstrap/lib/Label';
import { FormattedMessage } from 'react-intl';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import { DataColumn } from 'react-datatable-bootstrap';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import DatatableDetailCmpt from 'v02/back-office/modules/assignments/components/_common/table-details/assignment-order';

class Assignments extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalAssignment: null,
      modalTimeLine: false,
      modalPO: false,
      workflowId: null,
      completeActionItem: {},
      itemPurchaseOrder: null,
      stateFetched: true,
      finishedOrders: [],
      loadingPending: false,
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

  getOrders = () => this.props.assignmentOrders.filter(order => {
    if (!order) { return false; }
    const assignment = this.props.assignments.find(ass => ass.id === order.id_assignment);
    if (!assignment) { return false; }
    const canEditAnyAssignment = this.props.user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id);
    const isAssignor = assignment.id_assigned_by === this.props.user.id;
    const isAssignee = assignment.id_assigned_to === this.props.user.id;
    const hasAccessToAtLeastOneStep = order.usersWithAccessToAtLeastOneStep.indexOf(this.props.user.id) !== -1;
    const orderIsFinished = !order.stepName;
    const orderIsValidated = order.state === ITEM.STATE.KEY.VALIDATED;
    const userCanViewOrder = (hasAccessToAtLeastOneStep || isAssignor || isAssignee || canEditAnyAssignment);
    const showOrder = orderIsFinished && orderIsValidated && userCanViewOrder;
    return showOrder;
  })
  .sort((a, b) => a.assigned_at - b.assigned_at);

  propsToPassDown = {
    onClickPurchaseOrder: data => {
      this.setState({ itemPurchaseOrder: data, modalPO: true });
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


  render() {
    const [Datatable, Summary] = [DatatableCmpt, DatatableDetailCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ModalTimeLine, ModalPurchaseOrder] = [ModalTimeLineCmpt, ModalPurchaseOrderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const data = this.getOrders();

    const types = [
      { value: ITEM.TYPES.LINE, title: this.format({ id: ITEM.TYPES.LINE }) },
      { value: ITEM.TYPES.MATERIAL, title: this.format({ id: ITEM.TYPES.MATERIAL }) },
      { value: ITEM.TYPES.SUPPORT, title: this.format({ id: ITEM.TYPES.SUPPORT }) },
    ];
    const assignmentIds = data.reduce((prev, next) => {
      if (prev.indexOf(next.id_po_system_assignment) === -1) {
        prev.push(next.id_po_system_assignment);
      }
      return prev;
    }, [])
    .map(id => ({ value: id, title: id }));
    return (
      <div className="row">
        <Datatable data={data} >
          <Datatable.DataColumn field="assigned_at" title={this.format({ id: 'assigned_at' })} size={3} transform={this.transform.showDate} sortable={true} />
          <Datatable.DataColumn field="id_po_system_assignment" title={this.format({ id: 'assignment_id' })} size={3} search={this.search.assignmentId} transform={this.transform.assignmentId} searchType="select" searchOptions={assignmentIds} />
          <Datatable.DataColumn field="id_po_system" title={this.format({ id: 'assignment_order_id' })} size={2} search />
          <Datatable.DataColumn field="name" title={this.format({ id: 'label' })} size={5} sortable={true} search={this.search.type} searchType="select" searchOptions={types} />
          <Datatable.SummaryColumn ><Summary {...this.propsToPassDown} /></Datatable.SummaryColumn>
        </Datatable>
        <ModalTimeLine workflowId={this.state.workflowId} show={!!this.state.modalTimeLine} onHide={() => {this.setState({ modalTimeLine: false, workflowId: null });}} />
        <ModalPurchaseOrder item={this.state.itemPurchaseOrder} show={!!this.state.modalPO} onHide={() => {this.setState({ itemPurchaseOrder: null, modalPO: false });}} />
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
  };
}

const _components = {
  default: connect(stateToProps)(Assignments),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
