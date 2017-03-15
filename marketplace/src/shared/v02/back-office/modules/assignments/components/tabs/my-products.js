import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Label from 'react-bootstrap/lib/Label';
import { FormattedMessage } from 'react-intl';
import { ITEM } from 'helpers/constants';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';


class Assignments extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      workflowId: null,
      modalTimeLine: false,
      modalPO: false,
      assignmentTimeLine: {},
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
    return order.product && order.product.created_by === this.props.user.id && order.state === ITEM.STATE.KEY.VALIDATED;
  });

  /**
   * Set the columns to view depending on the user's permissions
   * @returns {Array} with the DataColumns to show
   * @private
   */
  getColumns = () => {
    const oName = (<DataColumn field="name" title={ this.format({ id: 'name' })} sortable={true} md={2} searchable={true} />);
    const oIdPoSystem = (<DataColumn field="id_po_system" title={ 'Id' } sortable={true} md={1} searchable={true} />);
    const oShowDate = (<DataColumn field="assigned_at" title={ this.format({ id: 'assigned_at' }) } sortable={true} md={2} searchable={true} transform={this.transform.showDate} />);
    const oAssignedToInfo = (<DataColumn field="assigned_to_info" title={ this.format({ id: 'assignment_assigned_to' })} sortable={true} md={2} searchable={true} transform={this.transform.assignedTo} />);
    const oAssignedByInfo = (<DataColumn field="assigned_by_info" title={ this.format({ id: 'assignment_assigned_by' })} sortable={true} md={2} searchable={true} transform={this.transform.assignedBy} />);
    const oState = (<DataColumn field="state" title={ this.format({ id: 'state' })} md={1} transform={this.transform.state} />);
    const oTracking = (<DataColumn field="id_workflow_instance" title={ this.format({ id: 'track' })} md={1} transform={this.transform.suivi} />);
    const oPurchaseOrder = (<DataColumn field="id_po_system" title={ this.format({ id: 'purchase_order' })} md={1} transform={this.transform.purchaseOrder} />);
    const oProductInfo = (<DataColumn field="product" title={ this.format({ id: 'content' })} md={2} transform={this.transform.productInfo} />);
    return [oIdPoSystem, oShowDate, oName, oAssignedToInfo, oAssignedByInfo, oProductInfo, oState, oTracking, oPurchaseOrder];
  };

  transform = {
    showDate: date => {
      return `${moment(date).format('D MMM. YYYY').toLowerCase()} ${this.format({ id: 'at' })} ${moment(date).format('h:mm a')}`;
    },
    assignedBy: assignedByInfo => assignedByInfo ? `${assignedByInfo.name} ${assignedByInfo.lastname}` : '',
    assignedTo: assignedToInfo => assignedToInfo ? `${assignedToInfo.name} ${assignedToInfo.lastname}` : '',
    suivi: (id, rowData) => {
      return (
        <div className="text-center">
          <button className="btn btn-default" style={{ paddingLeft: '15px', paddingRight: '15px' }} onClick={() => {this.setState({ workflowId: rowData.id_workflow_instance, modalTimeLine: true });}} >
            <Glyphicon glyph="eye-open" />
          </button>
        </div>
      );
    },
    productInfo: product => {
      return <Label key={product.id} style={{ textTransform: 'uppercase', cursor: 'pointer' }} onClick={() => this.props.showModal('product', product)}>{product.name}</Label>;
    },
    state: state => <Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label>,
    purchaseOrder: (id, rowData) => {
      return (
        <div className="text-center">
          <button className="btn btn-default" style={{ paddingLeft: '15px', paddingRight: '15px' }} onClick={() => {this.setState({ itemPurchaseOrder: rowData, modalPO: true });}} >
            <Glyphicon glyph="list-alt" />
          </button>
        </div>
      );
    },
  };


  render() {
    const [ModalTimeLine, ModalPurchaseOrder] = [ModalTimeLineCmpt, ModalPurchaseOrderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let table = <div><FormattedMessage id="step_no_found" /></div>;
    const products = this.getOrders();
    const aColumns = this.getColumns();
    if (products.length > 0) {
      table = (
        <div>
          <DataTable data={products} dtStyle="dark">
            {aColumns}
            <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
          </DataTable>
        </div>
      );
    }

    return (
      <div className="container">
        <ContentHeader contentTitle="assignations_to_my_products" />
        <div>
          {table}
          <ModalTimeLine workflowId={this.state.workflowId} show={!!this.state.modalTimeLine} onHide={() => {this.setState({ modalTimeLine: false, workflowId: null });}} />
          <ModalPurchaseOrder item={this.state.itemPurchaseOrder} show={!!this.state.modalPO} onHide={() => {this.setState({ itemPurchaseOrder: null, modalPO: false });}} />
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
