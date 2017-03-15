import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Product from 'v02/front-office/generic-components/products/product';

class HomeProducts extends Components {
  render() {
    const column = this.props.products.toJS().map(product => (
      <Product key={product.id} product={product} link={product.url} />
    ));
    return (
      <div className="mp-products latest">
        <h2>{this.props.title}</h2>
        <div className="column">{column}</div>
      </div>
    );
  }
}

export default HomeProducts;
