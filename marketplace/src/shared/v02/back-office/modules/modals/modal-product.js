import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import ProductHeaderCmpt from 'v02/back-office/modules/products/components/header';
import ProductActionsColumn from 'v02/back-office/modules/products/components/actions-column';
import ProductSummaryCmpt from 'v02/back-office/modules/products/components/tabs/front-product-summary';
import ProductFeaturesCmpt from 'v02/back-office/modules/products/components/tabs/front-product-features';
import ProductResourcesCmpt from 'v02/back-office/modules/products/components/tabs/front-product-resources';
import ProductEditorCmpt from 'v02/back-office/modules/products/components/tabs/front-product-editor';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { FormattedMessage } from 'react-intl';
import { PRODUCT_SUMMARY, PRODUCT_FEATURES, PRODUCT_RESOURCES, PRODUCT_EDITOR } from 'helpers/constants/features';
import Spinner from 'react-spinjs';

export default class ModalProduct extends Components {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    const storeProduct = props.product.toJS();
    const product = storeProduct.item;
    if (product && Object.keys(product).length > 0) {
      if (product.availableFeatures.indexOf(PRODUCT_SUMMARY.id) !== -1) {
        this.setState({ active: 'summary' });
      } else if (product.availableFeatures.indexOf(PRODUCT_FEATURES.id) !== -1) {
        this.setState({ active: 'features' });
      } else if (product.availableFeatures.indexOf(PRODUCT_RESOURCES.id) !== -1) {
        this.setState({ active: 'resources' });
      } else if (product.availableFeatures.indexOf(PRODUCT_EDITOR.id) !== -1) {
        this.setState({ active: 'editor' });
      } else {
        this.setState({ active: null });
      }
    }
  }


  render() {
    const storeProduct = this.props.product.toJS();
    const product = storeProduct.item;
    const isFetching = storeProduct.isFetching;
    if (isFetching) {
      return <Spinner />;
    }

    const [ProductHeader] = [ProductHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let Component = Row;
    switch (this.state.active) {
      case 'summary':
        Component = ProductSummaryCmpt.get(this.props.tenant);
        break;
      case 'features':
        Component = ProductFeaturesCmpt.get(this.props.tenant);
        break;
      case 'resources':
        Component = ProductResourcesCmpt.get(this.props.tenant);
        break;
      case 'editor':
        Component = ProductEditorCmpt.get(this.props.tenant);
        break;
      default:
        break;
    }

    let validate = <span></span>;
    if (this.props.allowValidate) {
      validate = (
        <Button bsStyle="success" onClick={ () => { this.validate(product.id)(); this.props.onHide();} } >
          <FormattedMessage id="validate" />
        </Button>
      );
    }

    const oActionsColumn = {
      productType: product.type,
      productAlias: product.alias,
      userLogged: false,
      links: product.links,
      openContactUsModal: () => {
      },
      ratings: product.ratings,
    };

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-wide">
        <Modal.Header><FormattedMessage id="product" /></Modal.Header>
        <Modal.Body>
          <div style={{ height: 600, overflowY: 'auto' }}>
            <Row className="container mp-product" style={{ width: 'initial', marginLeft: 0, marginRight: 0 }} >
              <Col md={9}>
                <div className="presentation">
                  <Row>
                    <Col md={5}>
                      <ProductHeader { ...this.props } />
                    </Col>
                    <Col md={7}>
                      <nav className="mp-menu mp-product-tabs" style={{ padding: '10px 0px 0px 10px', height: '30px' }}>
                        <ul className="links">
                          { (product.availableFeatures.indexOf(PRODUCT_SUMMARY.id) !== -1) &&
                          (<li style={{ height: '20px' }} className={this.state.active === 'summary' ? 'active' : ''} onClick={() => this.setState({ active: 'summary' })} >
                            <span style={{ cursor: 'pointer' }}><FormattedMessage id="PRODUCT_SUMMARY" /></span>
                           </li>) }
                          { (product.availableFeatures.indexOf(PRODUCT_FEATURES.id) !== -1) &&
                          (<li style={{ height: '20px' }} className={this.state.active === 'features' ? 'active' : ''} onClick={() => this.setState({ active: 'features' })} >
                            <span style={{ cursor: 'pointer' }}><FormattedMessage id={PRODUCT_FEATURES.id} /></span>
                           </li>) }
                          { (product.availableFeatures.indexOf(PRODUCT_RESOURCES.id) !== -1) &&
                          (<li style={{ height: '20px' }} className={this.state.active === 'resources' ? 'active' : ''} onClick={() => this.setState({ active: 'resources' })} >
                              <span style={{ cursor: 'pointer' }}><FormattedMessage id={PRODUCT_RESOURCES.id} /></span>
                          </li>) }
                          { (product.availableFeatures.indexOf(PRODUCT_EDITOR.id) !== -1) &&
                          (<li style={{ height: '20px' }} className={this.state.active === 'editor' ? 'active' : ''} onClick={() => this.setState({ active: 'editor' })} >
                            <span style={{ cursor: 'pointer' }}><FormattedMessage id={PRODUCT_EDITOR.id} /></span>
                          </li>) }
                        </ul>
                      </nav>
                    </Col>
                  </Row>
                </div>
                <Component product={product} />
              </Col>
              <Col md={3}><ProductActionsColumn {...oActionsColumn} { ...this.props } /></Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {validate}<Button bsStyle="primary" onClick={this.props.onHide}><FormattedMessage id="close" /></Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
