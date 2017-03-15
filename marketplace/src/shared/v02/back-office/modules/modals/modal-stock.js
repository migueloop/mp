import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { DataTable, Pagination, DataColumn } from 'react-datatable-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import moment from 'moment';
import Label from 'react-bootstrap/lib/Label';

class modalBundle extends Components {
  static propTypes = {
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    bundle: React.PropTypes.object.isRequired,
  };

  getColumns = () => {
    const format = this.context.intl.formatMessage;
    const oIdPoSystem = (<DataColumn field="id_po_system" title={ 'Id' } sortable={true} md={1} searchable={true} />);
    const oShowDate = (<DataColumn field="assigned_at" title={ format({ id: 'assigned_at' }) } sortable={true} md={2} searchable={true} transform={this.transform.showDate} />);
    const oAssignedToInfo = (<DataColumn field="assigned_to_info" title={ format({ id: 'assignment_assigned_to' })} sortable={true} md={2} searchable={true} transform={this.transform.assignedTo} />);
    const oAssignedByInfo = (<DataColumn field="assigned_by_info" title={ format({ id: 'assignment_assigned_by' })} sortable={true} md={2} searchable={true} transform={this.transform.assignedBy} />);
    // const oProductInfo = (<DataColumn field="product" title={ format({ id: 'content' })} md={2} transform={this.transform.productInfo} />);
    return [oIdPoSystem, oShowDate, oAssignedToInfo, oAssignedByInfo];
  };

  transform = {
    showDate: date => {
      const formattedMessage = this.context.intl.formatMessage;
      return `${moment(date).format('D MMM. YYYY').toLowerCase()} ${formattedMessage({ id: 'at' })} ${moment(date).format('h:mm a')}`;
    },
    assignedBy: assignedByInfo => assignedByInfo ? `${assignedByInfo.name} ${assignedByInfo.lastname}` : '',
    assignedTo: assignedToInfo => assignedToInfo ? `${assignedToInfo.name} ${assignedToInfo.lastname}` : '',
    productInfo: product => {
      return <Label key={product.id} style={{ textTransform: 'uppercase', cursor: 'pointer' }} onClick={() => this.props.showModal('product', product)}>{product.name}</Label>;
    },
  };

  render() {
    const productName = this.props.product.productName;
    const orders = this.props.product.orders;
    const aColumns = this.getColumns();
    let table = <div><FormattedMessage id="step_orders_found" /></div>;
    if (orders && orders.length > 0) {
      table = (
        <div className="container">
          <DataTable data={orders} dtStyle="dark">
            {aColumns}
            <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
          </DataTable>
        </div>
      );
    }
    // const Logo = ;
    const productUrl = this.props.product.logoUrl;
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-wide">
        <Modal.Header>
          <div className="thumb"><img className="photo u-photo" src={productUrl} alt={productName} ></img></div>
          <FormattedMessage id="stock" /> - { productName }
        </Modal.Header>
        <Modal.Body>
            {table}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.props.onHide} ><FormattedMessage id="close" /></Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  'default': connect(stateToProps)(modalBundle),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
