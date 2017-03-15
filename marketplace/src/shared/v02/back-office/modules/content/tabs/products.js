import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { PRODUCT } from 'helpers/constants';
import { connect } from 'react-redux';
import ProductList from 'v02/back-office/modules/content/data-tables/products-table';
import Spinner from 'react-spinjs';

class Products extends Components {

  render() {
    const storeProducts = this.props.products.toJS();
    if (storeProducts.isFetching) {
      return <Spinner />;
    }
    const productId = parseInt(this.props.location.query.productId, 10);
    const state = this.props.location.query.state;
    let products = storeProducts.items.filter(p => p.state !== PRODUCT.STATE.DELETED);
    if (productId) {
      products = products.filter(product => product.id === productId);
    }
    if (state) {
      products = products.filter(item => item.state === state);
    }
    return <ProductList { ...this.props } productList={products} />;
  }
}

export default connect(state => ({}))(Products);
