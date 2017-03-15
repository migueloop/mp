import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ModalBase from 'v02/back-office/generic-components/modals/modal-base';
import VerticalColFeatureCmpt from '../vertical-col-feature';

import { PRODUCT_FEATURES } from 'helpers/constants/features';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
}));


class Details extends Components {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: 0,
      modalType: '',
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalType: '',
      showModal: false,
    });
  };

  removeClick(evt) {
    evt.preventDefault();
  }


  render() {
    const product = this.props.product.toJS();

    if (!product.availableFeatures.find(productFeatures => PRODUCT_FEATURES.id === productFeatures.idFeature)) {
      return <div>Not Available</div>;
    }

    const [VerticalColFeature] = [VerticalColFeatureCmpt].map(Component => Component.get(this.props.tenant));
    let productSpecification = {};
    let productSpecificationHTML = '';

    const languages = product.languages.map(language => `[${language.abbreviation.toUpperCase()}]`);

    if (product.specification) {
      productSpecification = product.resources.find(resource => resource.id === product.specification);
      productSpecificationHTML = (
        <p className="specs" onClick={this.openModal}>
          {/* TODO: Link opens modal, what is <p onClick> doing here? */}
          <Link to="#specs" onClick={this.removeClick}>
            <i className="icono icono-pdf"></i>
            <span className="text">{productSpecification.nameCustom || productSpecification.name}</span>
          </Link>
        </p>
      );
    }

    const productFeatures = product.features.map((feature, index) => (
      <Col key={index} sm={6} md={4}>
        <VerticalColFeature feature={feature} heightMax={this.state.maxHeight} />
      </Col>
    ));

    return (

      <div className="mp-tab mp-tab-features">

        {/* Snippet */}
        <div className="snippet">
          <Row>
            <Col sm={4}>
              <p className="latest">
                <span className="version">
                  VERSION {product.version}
                </span>
              </p>
            </Col>
            <Col sm={4}>
              <p className="languages">
                <FormattedMessage id="com_languages" />
                {languages}
              </p>
            </Col>
            <Col sm={4}>
              {productSpecificationHTML}
            </Col>
          </Row>
        </div>

        {/* Features */}
        <div className="mp-blocks features">
          <Row ref="productFeature">
            {productFeatures}
          </Row>
        </div>

        {/* Modal (full specs) */}
        <ModalBase show={this.state.showModal}
          onHide={this.closeModal}
          resourceSpecification={productSpecification}
          type={productSpecification.type}
          />

      </div>
    );
  }
}


const _components = {
  default: connector(Details),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
