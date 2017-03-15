import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import ProductsCmpt from 'v02/back-office/generic-components/products';
import { FormattedMessage } from 'react-intl';

@connect(state => ({ tenant: state.get('tenant') }))
class SelectProduct extends Components {

  constructor(props) {
    super(props);
    this.__dirname = __dirname;
  }


  static propTypes ={
    show: React.PropTypes.bool,
    onHide: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    products: React.PropTypes.array.isRequired,
    omit: React.PropTypes.array,
  };

  render() {
    let Products = ProductsCmpt.get(this.props.tenant);
    return (
      <Modal bsSize="large" show={this.props.show} onHide={this.props.onHide}>
        <h3><FormattedMessage id="select_product" /></h3>
        <div style={{ margin: 20 }}>
          <Products products={this.props.products} omit={this.props.omit} onSelect={this.props.onSelect} />
        </div>
      </Modal>
    );
  }
}

const _components = {
  default: SelectProduct,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
