import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Col, Row } from 'react-bootstrap';
import Product from 'v02/front-office/generic-components/products/product';

class HeaderMsp extends Components {
  render() {
    const corner = this.props.corner;
    const row = this.props.bestProducts.map(product => (
        <Col xs={6} md={4} lg={4} key={product.id}>
          <Product product={product} link={true} />
        </Col>
    ));
    const title = this.props.title;
    return (
      <header className="about">
        <Row>
          <Col md={5} lg={5}>
            {/* Cover */}
            <div className={`cover corner ${(corner && corner.name ? `corner-${corner.name.toLowerCase()}` : '')}`}>
              <div className="a">
                <img className="photo" src={this.props.logo} alt="" />
              </div>
            </div>
            {/* Title */}
            <div className="titlebox">
              <h2 className="title">{title}</h2>
            </div>
          </Col>
          <Col md={6} lg={5} mdOffset={1} lgOffset={2}>
            <div className="info">
              {/* Featured products */}
              <div className="mp-products featured">
                <div className="row">{row}</div>
              </div>
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}

export default connector(HeaderMsp);
