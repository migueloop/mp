import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
}));


class Header extends Components {
  render() {
    const product = this.props.product.toJS();
    const productCategories = product.domains.map(domain => (
      <span className="category" key={domain.id}>{domain.name}</span>
    ));
    return (
      <header className="mp-product-header">
        <div className="thumb">
          <img className="photo u-photo" src={product.logoUrl} alt={product.name} />
        </div>
        <div className="info">
          <p className="brand p-brand">
            <Link to={`/user-corner/${product.owner.alias}`}>{product.owner.title}</Link>
          </p>
          <h2 className="title fn p-name">
            <Link to={`/product/${product.alias}`} className="url u-url" rel="product" >{product.name}</Link>
          </h2>
          <h3 className="categories">
            {productCategories}
          </h3>
        </div>
      </header>
    );
  }
}

const _components = {
  default: connector(Header),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
