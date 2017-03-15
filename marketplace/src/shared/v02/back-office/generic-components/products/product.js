import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';

export default class Product extends Components {

  static defaultProps = {
    route: '/product',
    link: false,
    className: '',
  };

  render() {
    const { product, link, offer, className, ...others } = this.props;
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
          <p className="brand p-brand">{product.editor ? product.editor.title : ''}</p>
          <h4 className="title fn p-name">{product.name}</h4>
          {offerView}
        </div>
      </div>
    );

    // Embed in link?
    if (link) {
      productView = <Link to={link} className="url u-url" rel="product">{productView}</Link>;
    }
    return <div className={`product hproduct h-product ${className}`} {...others}>{productView}</div>;
  }
}
