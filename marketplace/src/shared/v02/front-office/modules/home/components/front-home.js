import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Carousel from './home-carousel';
import DomainsCmpt from './home-domains';
import Products from './home-products';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('v02').get('frontOffice').get('products').get('latest'),
  domains: state.get('v02').get('frontOffice').get('domains').get('all'),
  carouselImages: state.get('v02').get('frontOffice').get('home').get('carouselImages').get('all'),
}));

class Home extends Components {

  static requiredActionKeys = [
    'FrontOffice.Products.fetchLatest',
    'FrontOffice.Home.fetchCarouselImages',
  ];

  render() {
    const [Domains] = [DomainsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <section className="mp-home">
        <Carousel { ...this.props } />
        <div className="container">
          <Row>
            <Col sm={8} md={9}>
              <Domains domains={this.props.domains.toJS()} title={this.format({ id: 'com_corners' })} />
            </Col>
            <Col sm={4} md={3}>
              <Products { ...this.props } title={this.format({ id: 'home_featured' })} />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default connector(Home);
