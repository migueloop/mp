import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Actions } from 'v02/flux';
import { Link } from 'react-router';
import CarouselCmpt from 'v02/back-office/generic-components/carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Modal from 'react-bootstrap/lib/Modal';
import HeaderCmpt from './_common/header';
import ActionColumnCmpt from './_common/actions-column';
import ProductCmpt from 'v02/back-office/modules/products/components/product-without-navigation';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  bundle: state.get('v02').get('backOffice').get('bundles').get('current'),
  user: state.get('v02').get('common').get('user'),
}));

class Bundle extends Components {

  static requiredActionKeys = [
    'BackOffice.Bundles.fetchOne',
  ];

  constructor(props) {
    super(props);
    this.state = {
      showProductModal: false,
    };
  }

  componentDidMount() {
    Bundle.getActions(this.props.tenant, this.props.params).map(this.props.dispatch);
  }

  onSelectProduct = product => {
    const actions = new Actions(this.props.tenant);
    this.props.dispatch(actions.BackOffice.Products.fetchOne({ id: product.id }));
    this.setState({
      showProductModal: true,
    });
  }

  hideModal = () => {
    this.setState({
      showProductModal: false,
    });
  }

  render() {
    if (!this.props.bundle.get('id')) {
      return (<div>...</div>);
    }
    const [Carousel] = [CarouselCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const bundle = this.props.bundle.toJS();
    const [Header, ActionColumn, Product] = [HeaderCmpt, ActionColumnCmpt, ProductCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const bundleKeywords = bundle.keywords.map(keyword => (
      <li className="category p-category" key={keyword.id}>
        <Link to={`/catalog/keywords/${keyword.name}`}>{keyword.name}</Link>
      </li>
    ));
    const oSlides = bundle.resources.filter(resource => resource.bundle_resource.showCarousel).map((resource, index) => (
      <CarouselItem key={index}>
        <img src={`/public/uploads/bundles/${bundle.id}/${resource.name}`} />
      </CarouselItem>
    ));
    return (
      <div className="container mp-bundles">
        <article
          itemScope itemType="http://schema.org/Product"
          className="container mp-product hproduct h-product" >
          <Row className="item-header">
            <Header bundle={this.props.bundle} onSelectProduct={this.onSelectProduct} />
          </Row>
          <Row className="item-content">
            <Col xs={12} sm={9} md={9} lg={9} >
              <Col sm={12} md={5} xs={12} >
                {oSlides.length > 0 && <Carousel >{oSlides}</Carousel>}
              </Col>
              <Col sm={12} md={7} xs={12}>
                <h3 className="tagline">{bundle.baseline}</h3>
                <ul className="mp-keywords categories">{bundleKeywords}</ul>
                <div className="description e-description" dangerouslySetInnerHTML={{ __html: bundle.description }}></div>
              </Col>
            </Col>
            <Col xs={12} sm={3} md={3} lg={3} >
              <ActionColumn />
            </Col>
          </Row>
        </article>
        <Modal dialogClassName="modal-wide" show={this.state.showProductModal} onHide={this.hideModal}>
          <Modal.Body>
            <Product />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const _components = {
  default: connector(Bundle),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
