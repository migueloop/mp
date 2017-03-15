import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  users: state.get('backOffice').get('users'),
}));

class Product extends Components {

  static defaultProps = {
    route: '/product',
    link: false,
    className: '',
  };


  render() {
    const users = this.props.users.toJS();
    const { route, product, link, offer, className, ...others } = this.props;
    const productOwner = users.find(user => user.id === product.created_by);
    const productOwnerName = productOwner && `${productOwner.name} ${productOwner.lastname}`;
    // Product offer?
    let offerView = null;
    if (offer) {
      offerView = <p className="offer">{offer.AmountRecurrence / 100}/{offer.UnitRecurrence}</p>;
    }

    // Product view
    let productView = (
      <div>
        <div className="thumb"><img className="photo u-photo" src={product.logoUrl} alt={product.name} /></div>
        <div className="info">
          <p className="brand p-brand">{productOwnerName}</p>
          <h4 className="title fn p-name">{product.name}</h4>
          {offerView}
        </div>
      </div>
    );

    // Embed in link?
    if (link) {
      productView = <Link to={`${route}/${product.alias}/`} className="url u-url" rel="product">{productView}</Link>;
    }
    return <div className={`product hproduct h-product ${className}`} {...others}>{productView}</div>;
  }
}

const _components = { default: connector(Product) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
