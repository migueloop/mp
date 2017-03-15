import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import ProductFiltersCmpt from './product-filters';
import ProductsCmpt from 'v02/front-office/generic-components/products';
import { PRODUCT } from 'helpers/constants';

const filterProductsAlgorithm = (product, filters) => {
  if (filters.corner) {
    if (!product.corners.length) {
      return false;
    }
    const corner = filters.corner;
    if (!product.corners.reduce((p, n) => n.id === corner || p, false)) {
      return false;
    }
  }

  if (filters.type && product.type !== PRODUCT.TYPE[filters.type]) {
    return false;
  }

  if (filters.name && product.name.toLowerCase().indexOf(filters.name.toLowerCase()) === -1) {
    return false;
  }

  // if (filters.keywords.length > 0 && !filters.keywords.reduce((prev, k) => (prev && !!product.keywords.find(ProductKeyword => k.id === ProductKeyword.id)), true)) {
  if (filters.keywords && filters.keywords.length > 0 && !filters.keywords.reduce((prev, k) => (prev && !!product.keywords.find(ProductKeyword => k.name === ProductKeyword.name)), true)) {
    return false;
  }

  if (filters.platform && PRODUCT.TYPE[filters.type] === PRODUCT.TYPE.MOBILE && !product.links.find(link => (link.name.toLowerCase() === filters.platform))) {
    return false;
  }

  return true;
}

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class ListProducts extends Components {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
    };
  }

  componentWillReceiveProps(props) {
    if (!props.show && this.props.show !== props.show) {
      this.setState({
        filters: {},
      });
    }
  }

  onFilter = filters => {
    this.setState({
      filters,
    });
  }

  render() {
    // Tenant specific
    if (!this.props.products || !this.props.show) {
      return <div></div>;
    }
    const { tenant } = this.props;
    const [ProductFilters, Products] = [ProductFiltersCmpt, ProductsCmpt].map(cmpt => cmpt.get(tenant));
    return (
      <Collapse in={this.props.show}>
        <div>
          <ProductFilters onFilter={this.onFilter} keywords={this.props.keywords} />
          <Products products={this.props.products.filter(p => filterProductsAlgorithm(p, this.state.filters))} link={true} />
        </div>
      </Collapse>
    );
  }
}

const _components = {
  default: connector(ListProducts),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
