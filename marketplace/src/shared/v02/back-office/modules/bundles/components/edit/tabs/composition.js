import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import ModalFilterProductsCmpt from 'v02/back-office/modules/modals/modal-filter-products';
import { ITEM } from 'helpers/constants';

class editor extends Components {

  constructor(props) {
    super(props);
    this.state = {
      updateItem: -1,
      showModalFilterProducts: false,
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    bundle: React.PropTypes.object.isRequired,
    components: React.PropTypes.array.isRequired,
    onAddComponent: React.PropTypes.func.isRequired,
    onDeleteComponent: React.PropTypes.func.isRequired,
  };

  onClickThumbnail = (logoUrl, nKey) => e => {
    if (!logoUrl) this.setState({ updateItem: nKey, showModalFilterProducts: true });
  }

  /**
   *
   * @param {string} sThumbnailUrl The url of the product logo
   * @param {number} nKey key to set in the React component
   * @returns {object} React component with the logo of the product
   * @private
   */
  _createComponentItem = (sLogoUrl, sComponentName, nComponentId, nKey) => {
    const hoverActions = (
      <div className="hover-container">
        <div className="hover-actions">
          <Button bsStyle="info" onClick={ () => this.setState({ updateItem: nKey, showModalFilterProducts: true }) } ><FormattedMessage id="modify" /></Button>
            <Button bsStyle="danger" onClick={ this.onDeleteComponent(nComponentId, nKey) } ><FormattedMessage id="remove" /></Button>
        </div>
      </div>
    );

    return (
      <Col xs={6} sm={3} md={3} lg={3} key={nKey}>
        <label className="text-center" style={{ display: 'block', marginBottom: '20px' }} >{sComponentName || this.format({ id: 'select_component' })}</label>
        <div className={`thumb-square ${!sLogoUrl && 'thumb-select-clickable'}`}
          style={{ backgroundImage: `url(${sLogoUrl || ITEM.PLACEHOLDERS.PICTURES.ADD_NEW.URL})` }}
          onClick={this.onClickThumbnail(sLogoUrl, nKey)}
          >
          { sLogoUrl ? hoverActions : ''}
        </div>
      </Col>
    );

    /*
    :::::: OLD ICON ::::::
    return (
      <Col xs={6} sm={3} md={3} lg={3} key={nKey}>
        <label className="text-center" style={{ display: 'block', marginBottom: '20px' }} >{sComponentName || formattedMessage({ id: 'select_component' })}</label>
        <div className="thumb-square">
          {sLogoUrl &&
          <img style={{ cursor: 'pointer' }} src={sLogoUrl || ITEM.PLACEHOLDERS.PICTURES.ADD_ITEM.URL} onClick={ () => this.setState({ updateItem: nKey, showModalFilterProducts: true }) } />
          ||
          <div className="upload-image-icon-large" onClick={ () => this.setState({ updateItem: nKey, showModalFilterProducts: true }) } >
            <div className="icon-file"><FileIcon /></div>
            <div className="icon-plus"><AddIcon /></div>
          </div>
          }
          { sLogoUrl ? hoverActions : ''}
        </div>
      </Col>
    );
    */
  };

  /**
   * Set the React components in assignment to show a placeholder img or the logo of a component of the bundle
   * @returns {Array} aComponents with all React components. Maximum 4.
   */
  setComponentsItems = () => {
    const aComponents = [];
    for (let index = 0; index < ITEM.BUNDLE.COMPONENTS.NUMBER; index++) {
      // match if current component must be shown in the current position of the components
      const oComponent = this.props.bundle.components.find(bc => bc && +bc.show_order === index);
      // if match, set URL of the image to show and meta information
      oComponent ?
        aComponents.push(this._createComponentItem(oComponent.logo, oComponent.name, oComponent.id, index)) :
        aComponents.push(this._createComponentItem('', '', 0, index));
    }

    return aComponents;
  };

  /**
   * When a component is selected in the modal, call the prop function in assignment to dispatch the action
   * @param {object} oSelectedComponent contains alias(string), id(number), logo(string), and name(string)
   */
  onAddComponent = oSelectedComponent => {
    const oComponent = Object.assign({}, oSelectedComponent);

    oComponent.show_order = this.state.updateItem;
    this.props.onAddComponent(oComponent);
    this.toggleModalFilterProducts();
  };

  onDeleteComponent = (nComponentId, nKey) => event => {
    event.preventDefault();
    this.props.onDeleteComponent(nComponentId, nKey);
  };

  /*
   * Change the boolean in order to show or no the modal to choose a new component to add to the bundle
   */

  toggleModalFilterProducts = () => {
    this.setState({ showModalFilterProducts: !this.state.showModalFilterProducts });
  };

  render() {
    let [ModalFilterProducts] = [ModalFilterProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const components = this.setComponentsItems();
    return (
      <Row>
        <Col md={10} className="select-bundle-component-title col-md-offset-1">
          <h3>
            <FormattedMessage id="bundle_compose_four" />
            <hr />
          </h3>
          <Row>
          {components}
          </Row>
        </Col>
        <ModalFilterProducts
          show={this.state.showModalFilterProducts}
          hide={this.toggleModalFilterProducts}
          onSelect={this.onAddComponent}
          />
      </Row>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = { default: connect(stateToProps)(editor) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
