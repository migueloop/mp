import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Col, Row, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


import { PRODUCT_EDITOR } from 'helpers/constants/features';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('frontOffice').get('products').get('current'),
}));

class Editor extends Components {
  render() {
    const product = this.props.product.toJS();
    if (!product.availableFeatures.find(productFeatures => PRODUCT_EDITOR.id === productFeatures.idFeature)) {
      return <div>Not Available</div>;
    }

    const homePage = product.editorHomepage ? (
      <ul className="dots">
        <li>
          <a href={product.editorHomepage}
            className="url u-url" target="_blank"
            rel="external"
            >
            <i className="icono icono-bullet"></i>
            <span className="text">
              <FormattedMessage id="editor_url" />
            </span>
          </a>
        </li>
      </ul>
    ) : null;

    const legalMentions = product.editorLegalMentions ? (
      <p className="eula">
        <a href={ product.editorLegalMentions }
          target="_blank"
          rel="external"
          >
          <FormattedMessage id="editor_notice" />
        </a>
      </p>
    ) : null;

    return (
      <div className="mp-tab mp-tab-editor">
        <div className="brand p-brand vcard h-card">
          <Row>
            <Col sm={4} md={5}>

              {/* Thumb */}
              <div className="thumb">
                <img className="photo u-logo" src={product.editorLogoUrl} alt="" />
              </div>

              {/* Links */}
              {homePage}

            </Col>
            <Col sm={8} md={7}>

              {/* Editor */}
              <div className="editor">
                <div className="note p-note"
                  dangerouslySetInnerHTML={{ __html: product.editorDescription }}
                  />
                   {legalMentions}
              </div>

            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


const _components = {
  default: connector(Editor),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
