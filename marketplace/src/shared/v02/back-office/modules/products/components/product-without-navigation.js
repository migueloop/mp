import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import HeaderCmpt from './_common/header';
import ActionsColumnCmpt from './_common/actions-column';
import TabsCmpt from './tabs';
import ProductSummaryCmpt from './tabs/front-product-summary';
import ProductFeaturesCmpt from './tabs/front-product-features';
import ProductResourcesCmpt from './tabs/front-product-resources';
import ProductEditorCmpt from './tabs/front-product-editor';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Spinner from 'react-spinjs';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
}));

class Product extends Components {
  constructor(props) {
    super(props);
    this.state = {
      active: 'PRODUCT_SUMMARY',
    };
  }

  onChangeTab = active => {
    this.setState({
      active,
    });
  }

  render() {
    if (!this.props.product.get('id')) { return <Spinner />; }

    const product = this.props.product.toJS();

    const [Header, ActionsColumn, Tabs] =
      [HeaderCmpt, ActionsColumnCmpt, TabsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let Component = Row;
    switch (this.state.active) {
      case 'PRODUCT_SUMMARY':
        Component = ProductSummaryCmpt.get(this.props.tenant);
        break;
      case 'PRODUCT_FEATURES':
        Component = ProductFeaturesCmpt.get(this.props.tenant);
        break;
      case 'PRODUCT_RESOURCES':
        Component = ProductResourcesCmpt.get(this.props.tenant);
        break;
      case 'PRODUCT_EDITOR':
        Component = ProductEditorCmpt.get(this.props.tenant);
        break;
      default:
        break;
    }


    return (
      <div style={{ height: 600, overflowY: 'auto' }}>
        <article className="mp-product hproduct h-product" >
          <div className="container">
            <Row>
              <Col md={9} >
                <div className="presentation" >
                  <Row>
                    <Col sm={6} md={5} >
                      <Header />
                    </Col>
                    <Col sm={6} md={7} >
                      <Tabs active={this.state.active} onSelect={this.onChangeTab} />
                    </Col>
                  </Row>
                </div>
                <Component />
              </Col>
              <Col md={3} >
                <ActionsColumn />
              </Col>
            </Row>
          </div>
          {/* Modal */}
        </article>
      </div>
    );
  }
}

const _components = { default: connector(Product) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
