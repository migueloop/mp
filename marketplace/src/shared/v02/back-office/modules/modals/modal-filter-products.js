import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { ITEM } from 'helpers/constants';
import ProductsCmpt from 'v02/back-office/generic-components/products';

class ModalFilterProducts extends Components {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  static propTypes = {
    hide: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.setState({
      products: this.props.products,
    });
  }

  onSelect = oProduct => {
    const oComponent = {
      alias: oProduct.alias,
      id: oProduct.id,
      logo: oProduct.logoUrl,
      name: oProduct.name,
    };
    this.props.onSelect(oComponent);
  };


  render() {
    const [Products] = [ProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (

      <Modal
        show={this.props.show}
        onHide={this.props.hide}
        bsSize="large"
        className="modal-select-resource"
        id="modal-select-product"
        >
        <Modal.Header>
          <Col md={12}>
            <Modal.Title><FormattedMessage id="select_product_to_add" /></Modal.Title>
          </Col>
        </Modal.Header>

        <Modal.Body>
          <Row style={{ marginTop: '5%' }}>
            <Products
              products={this.state.products}
              onSelect={this.onSelect}
              />
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <Button bsStyle="primary" onClick={this.props.hide}><FormattedMessage id="close" /></Button>
          </div>
        </Modal.Footer>

      </Modal>

    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    keywords: state.get('misc').get('keywords').toJS(),
    products: state.get('products').toJS().filter(oProduct => oProduct.state === ITEM.STATE.KEY.PUBLISHED),
  };
}

const _components = {
  default: connect(stateToProps)(ModalFilterProducts),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
