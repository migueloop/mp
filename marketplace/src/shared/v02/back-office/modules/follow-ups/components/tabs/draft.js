import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Label from 'react-bootstrap/lib/Label';
import { FormattedMessage } from 'react-intl';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import DatatableDetailCmpt from '../shared/datatable-detail-assignment-order';

import { Actions as V02Actions } from 'v02/flux';


class FollowUpsDraft extends Components {
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
    this.v02Actions = new V02Actions(this.props.tenant, props.user.token);
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
    this.props.dispatch(this.v02Actions.BackOffice.AssignmentsOrder.fetch());
  }

  getOrders2 = () => {
    // TODO: finish this
    const canEditAnyAssignment = this.props.user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id);
    const assignmentsOrders = this.props.assignmentOrders;
    return assignmentsOrders.reduce((prev, next) => {

      const orders = next.items || [];
      const isAssignor = next.idAssignedBy === this.props.user.id;
      const isAssignee = next.idAssignedTo === this.props.user.id;

      const filteredOrders = orders.reduce((p, n) => {

        const hasAccessToAtLeastOneStep = true;
        const orderIsFinished = !n.stepName;

        // The order can be shown to the user is it's the one assigned to, the one who created it, can view an step or can edit any assignment
        const canViewOrder = isAssignor || isAssignee || hasAccessToAtLeastOneStep || canEditAnyAssignment;
        if (orderIsFinished && canViewOrder) {
        //if(true){
          return p.concat(n);
        }
        return p;
      }, []);
      return prev.concat(filteredOrders);
    }, []);
  }

  getOrders = () => this.props.assignmentOrders.filter(order => {
    if (!order) { return false; }
    const assignment = this.props.assignmentsOld.find(ass => ass.id === order.id_assignment);
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
    label: product => {
      return product.name;
    },
    assignmentId: id => {
      const onClick = () => console.log('click:', id);
      return <Label onClick={onClick} id={id} style={{ textTransform: 'uppercase', cursor: 'pointer' }}>{id}</Label>;
    },
  };

  search = {
    state: (filter, jsxObject, rowData) => filter === rowData.state,
    product: (filter, product) => {
      return product.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    },
    assignmentId: (filter, jsxObject) => filter === jsxObject.props.id,
  }


  render() {
    const [Datatable, Summary] = [DatatableCmpt, DatatableDetailCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ModalTimeLine, ModalPurchaseOrder] = [ModalTimeLineCmpt, ModalPurchaseOrderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    // const data = this.getOrders();
    const data2 = this.getOrders2();
    // console.log('data', data);
    console.log('data2', data2);
    const assignmentIds = data2.reduce((prev, next) => {
      if (prev.indexOf(next.assignmentPoSystemId) === -1) {
        prev.push(next.assignmentPoSystemId);
      }
      return prev;
    }, [])
    .map(id => ({ value: id, title: id }));
    return (
      <div className="container">
        <Datatable data={data2} >
          <Datatable.DataColumn field="createdAt" title={this.format({ id: 'assigned_at' })} size={3} transform={this.transform.showDate} sortable={true} />
          <Datatable.DataColumn field="assignmentPoSystemId" title={this.format({ id: 'assignment_id' })} size={3} search={this.search.assignmentId} transform={this.transform.assignmentId} searchType="select" searchOptions={assignmentIds} />
          <Datatable.DataColumn field="idPoSystem" title={this.format({ id: 'assignment_order_id' })} size={2} search />
          <Datatable.DataColumn field="product" transform={this.transform.label} title={this.format({ id: 'label' })} size={4} sortable={true} search={this.search.product} />
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
    assignmentsOld: state.get('assignments').toJS().filter(a => a.state === ITEM.STATE.KEY.VALIDATED),
    assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
    assignmentOrdersOld: state.get('assignmentOrders').toJS(),
    assignmentOrders: state.get('v02').get('backOffice').get('assignmentsOrder').get('all').toJS(),
  };
}

const _components = {
  default: connect(stateToProps)(FollowUpsDraft),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
