import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { FormattedMessage } from 'react-intl';
import { PO_SYSTEM, TIMELINE } from 'helpers/constants/constants-main';

class ModalPurchaseOrder extends Components {

  static propTypes = {
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    item: React.PropTypes.object.isRequired,
  };

  render() {
    if (!this.props.show || !this.props.item) {
      return null;
    }
    const isLine = this.props.item && this.props.item.product && this.props.item.product.timeline.name === TIMELINE.TYPE.LINE;
    const iframe = <iframe src={ PO_SYSTEM.URL.GET.replace('[ORDER_ID]', this.props.item.idPoSystem) } frameBorder="0" style={{ width: '100%', height: '60vh' }}></iframe>;
    const noPurchasOrder = <p><FormattedMessage id="no_purchase_order" /></p>;

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-wide">
        <Modal.Header><FormattedMessage id="purchase_order" /> {isLine && this.props.item.id_po_system}</Modal.Header>
        <Modal.Body>
        {isLine ? iframe : noPurchasOrder}
        </Modal.Body>
        <Modal.Footer><Button bsStyle="primary" onClick={this.props.onHide}><FormattedMessage id="close" /></Button></Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = { default: connect(stateToProps)(ModalPurchaseOrder) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
