import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import HeaderCmpt from './_common/header';
import TabsCmpt from './tabs';
import ActionsColumnCmpt from './_common/actions-column';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('frontOffice').get('products').get('current'),
  user: state.get('v02').get('common').get('user'),
  notification: state.get('notification'),
}));

class FrontProductSheet extends Components {

  static requiredActionKeys = [
    'FrontOffice.Products.fetchOne',
    'FrontOffice.Products.fetchOffers',
    'FrontOffice.Domains.fetchAll',
  ];

  render() {
    // Tenant specific
    if (!this.props.product.get('id')) {
      return (<div>...</div>);
    }
    const tenant = this.props.tenant;
    const [Header, Tabs, ActionsColumn] =
      [HeaderCmpt, TabsCmpt, ActionsColumnCmpt].map(Cmpt => Cmpt.get(tenant));

    return (
      <article className="mp-product product-industrie" >
        <div className="container">
          <Row>
            <Col md={9} >
              <div className="presentation" >
                <Row>
                  <Col sm={6} md={5} >
                    <Header />
                  </Col>
                  <Col sm={6} md={7} >
                    <Tabs loc={this.props.location} />
                  </Col>
                </Row>
              </div>
              {this.props.children}
            </Col>
            <Col md={3} >
              <ActionsColumn product={this.props.product} />
            </Col>
          </Row>
        </div>
      </article>
    );
  }
}

export default connector(FrontProductSheet);
