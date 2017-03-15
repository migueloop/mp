import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FormattedMessage } from 'react-intl';
import queryString from 'query-string';
import moment from 'moment';

class ModalAssignment extends Components {

  static propTypes = {
    assignment: React.PropTypes.object.isRequired,
    show: React.PropTypes.bool.isRequired,
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  _setItems = () => {
    const formattedMessage = this.context.intl.formatMessage;
    if (this.props.assignment.items && this.props.assignment.items.length > 0) {
      const oItem = this.props.assignment.items[0];
      let oTmpItem = {};
      // retrieve information of the sate
      if ((oItem.id_bundle && !oItem.id_product)) {
        // if it is a bundle
        oTmpItem = this.props.bundles.find(b => b.id === parseInt(oItem.id_bundle, 10));
        oItem.name = oTmpItem.title;
        oItem.logo = oTmpItem.logo_info.url;
        oItem.editor_title = ''; // oTmpItem.editor.title;
        oItem.description = oTmpItem.description;
      } else {
        if (oItem.id_product) {
          console.log(oItem);
          // is a product
          oTmpItem = this.props.products.find(p => p.id === parseInt(oItem.id_product, 10));
          oItem.name = oTmpItem.name;
          oItem.logo = oTmpItem.logoUrl;
          oItem.editor_title = ''; // oTmpItem.editor.title;
          oItem.description = oTmpItem.description;
        }
      }
      const options = queryString.parse(oItem.options);
      const formattedOptions = [];
      for (const key in options) {
        // If value is a array then split convert to a string, if key is a date then format the date
        const value = Array.isArray(options[key]) ? options[key].map(o => formattedMessage({ id: o })).join(', ') : formattedMessage({ id: key.match(/date/) ? moment(options[key]).format('DD/MM/YY') : options[key] });
        const prettyKey = formattedMessage({ id: key.replace(/\[\]/, '') });
        formattedOptions.push(`<span class="key">${prettyKey}</span>: <span class="value">${value}</span>`);
      }
      const optionText = formattedOptions.length > 0 ? `<h5><strong>${formattedMessage({ id: 'assignment_order_options' })}</strong></h5>${formattedOptions.join('<br />')}` : '';
      return (
        <Row className="row-eq-height">
          <Col id="main-info" xs={4} sm={4} md={4} lg={4}>
            <img className="logo" src={oItem.logo} alt={oItem.name} />
            <span>{oItem.name} </span><br />
            <span id="editor-title">{oItem.editor_title}</span>
            <div className="assignmentOrderOptions" dangerouslySetInnerHTML={{ __html: optionText }} style={{ textAlign: 'left' }}></div>
          </Col>
          <Col id="description" dangerouslySetInnerHTML={{ __html: oItem.description }} xs={8} sm={8} md={8} lg={8} />
        </Row>);
    }
    return (
      <span className="centered-text uppercase-text hand-cursor" onClick={ () => this.setState({ shoModalFilterItems: true }) } >
        <FormattedMessage id="select_product_bundle" />
      </span>);
  };


  render() {
    if (!this.props.show || !this.props.assignment) { return null; }
    let validate = <span></span>;
    if (this.props.allowValidate) {
      validate = (
        <Button
          bsStyle="success"
          onClick={() => { this.validate(this.props.assignment.id)(); this.props.onHide();}}
          >
          <FormattedMessage id="validate" />
        </Button>
      );
    }
    const aItems = this._setItems();
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-wide" >
        <Modal.Header><FormattedMessage id="assignment" /></Modal.Header>
        <Modal.Body>
          <div style={{ height: 425, overflowY: 'auto' }}>
            <div className="container mp-assignments">
              <article itemScope itemType="http://schema.org/Product" className="mp-product h-product" xs={12} sm={12} md={6} lg={6} >
                <Row className="content">
                  <Col xs={12} sm={12} md={8} lg={8} className="padding-top">
                    <div>
                      <Col>
                        <div>
                          <h3><FormattedMessage id="general_information" /></h3>
                          <div className="select-bundle-component" >
                            <div md={12} id="select-bundle-component-add">{aItems}</div>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} className="padding-top">
                    <h3><FormattedMessage id="users" /></h3>
                    <div className="selected-users" >
                      { `${this.props.assignment.assigned_to_info.name} ${this.props.assignment.assigned_to_info.lastname}`}
                    </div>
                  </Col>
                </Row>
                <div style={{ clear: 'both' }}></div>
              </article>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>{validate}<Button bsStyle="primary" onClick={this.props.onHide}>Close</Button></Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    bundles: state.get('bundles').toJS(),
    products: state.get('products').toJS(),
  };
}

const _components = { default: connect(stateToProps)(ModalAssignment) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
