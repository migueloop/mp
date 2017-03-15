import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Col, Row } from 'react-bootstrap';
import HeaderMsp from './front-item-groups-header-mississippi';
import Product from 'v02/front-office/generic-components/products/product';

class Header extends Components {

  static propTypes = {
    title: React.PropTypes.string,
    bestProducts: React.PropTypes.array.isRequired,
    logo: React.PropTypes.string.isRequired,
    formattedTitle: React.PropTypes.object,
  };

  render() {
    const row = this.props.bestProducts.map(product => (
        <Col xs={6} md={4} lg={4} key={product.id}>
          <Product product={product} link={product.url} />
        </Col>
    ));
    const title = this.props.title ? this.props.title : this.props.formattedTitle;
    const formattedTitle = this.format({ id: title });
    console.log('formattedTitle', formattedTitle);
    return (
      <header className="about well">
        <Row>
          <Col md={5} lg={6}>
            {/* Cover */}
            <div className="cover">
              <img className="photo" src={this.props.logo} alt="" />
            </div>
          </Col>
          <Col md={7} lg={6}>
            <div className="info">
              {/* Title */}
              <h2 className="title">{formattedTitle}</h2>
              {/* Featured products */}
              <div className="mp-products featured">
                <div className="row">
                  {row}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}


const _components = {

  default: connector(Header),
  mississippi: HeaderMsp,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
