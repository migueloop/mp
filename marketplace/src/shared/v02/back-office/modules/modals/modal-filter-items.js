/**
 * Created by cjgm on 6/2/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { ITEM } from 'helpers/constants';
import MenuHorizontalCmpt from 'v02/back-office/modules/layout/horizontal-menu';

class ModalFilterItems extends Components {
  static contextTypes = { intl: React.PropTypes.object };

  constructor(props) {
    super(props);

    // by default will show products
    this.state = {
      itemsToFilter: ITEM.TYPES.PRODUCT,
      modalTitle: '',
      items: {
        products: props.products,
        bundles: props.bundles,
      },
    };
  }

  static propTypes = {
    hide: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.setState({ modalTitle: this.context.intl.formatMessage({ id: 'select_product_to_add' }) });
  }

  resetStateItems = () => {
    this.setState({
      items: {
        products: this.props.products,
        bundles: this.props.bundles,
      },
    });
  }

  /**
   * When selected item from modal, send item (bundle or product) to save it.
   * We will parse the information, and will send the type of item (bundle or product)
   * @param {object} oItem object with the item information.
  */
  onSelect = oItem => {
    const oItemData = {
      id_assignment_option_form: oItem.id_assignment_option_form || null,
      id_item: oItem.id,
      // logo: oItem.logoUrl || oItem.logo_info.url,
      // name: oItem.title || oItem.name,
      type: this.state.itemsToFilter,
      /* description: oItem.description ? oItem.description.substring(0, 254) : '',
      editor_title: oItem.editor ? oItem.editor.title : '',
      id_owner: oItem.created_by || oItem.created_by_id, */
    };
    switch (this.state.itemsToFilter) {
      case ITEM.TYPES.PRODUCT:
        oItemData.id_product = oItem.id;
        break;
      case ITEM.TYPES.BUNDLE:
        oItemData.id_bundle = oItem.id;
        break;
      default:
        break;
    }
    this.props.onSelect(oItemData);
  };


  _filter = oFilter => {
    switch (this.state.itemsToFilter) {
      case ITEM.TYPES.PRODUCT:
        this.setState({
          items: {
            products: this.props.products,
            bundles: this.props.bundles
          },
        });
        break;
      case ITEM.TYPES.BUNDLE:
        this.setState({
          items: {
            products: this.props.products,
            // bundles: this.props.bundles.filter(filterBundlesAlgorithmFactory(oFilter)),
            bundles: this.props.bundles
          },
        });
        break;
      default:
        break;
    }
  };

  /**
   * Set the filter and list component depending on which type of item will be filtered: product or bundle
   * @returns {Array} with the Filter and Products or Bundles component
   * @private
   */
  _setComponents = () => {
    switch (this.state.itemsToFilter) {
      case ITEM.TYPES.PRODUCT:
        // return [FilterProductsCmpt, ProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));
      case ITEM.TYPES.BUNDLE:
        // return [FilterBundlesCmpt, BundlesCmpt].map(cmpt => cmpt.get(this.props.tenant));
      default:
        break;
    }
  };

  _setTabs = () => {
    const formattedMessage = this.context.intl.formatMessage;
    return [
      {
        title: formattedMessage({ id: 'products' }),
        onClick: () => {
          this.setState({ itemsToFilter: ITEM.TYPES.PRODUCT, modalTitle: formattedMessage({ id: 'select_product_to_add' }) });
          this.resetStateItems();
        },
        active: ITEM.TYPES.PRODUCT,
      },
      {
        title: formattedMessage({ id: 'bundles' }),
        onClick: () => {
          this.setState({ itemsToFilter: ITEM.TYPES.BUNDLE, modalTitle: formattedMessage({ id: 'select_bundle_to_add' }) });
          this.resetStateItems();
        },
        active: ITEM.TYPES.BUNDLE,
      },
    ]
    .map(item => (
      <span
        key={item.title}
        className={ item.active === this.state.itemsToFilter ? 'active' : '' }
        onClick={item.onClick}
        >
        { item.title }
      </span>
    ));
  };


  render() {
    const [Filter, Items] = this._setComponents();
    const [MenuHorizontal] = [MenuHorizontalCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const menuTabs = this._setTabs();
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.hide}
        bsSize="large"
        className="modal-select-resource"
        id="modal-select-bundle"
        >
        <Modal.Header><Col md={12}><Modal.Title>{this.state.modalTitle}</Modal.Title></Col></Modal.Header>
        <Modal.Body style={{ paddingRight: '120px', paddingBottom: '40px' }}>
          <Row className="modal-tabs"><MenuHorizontal>{menuTabs}</MenuHorizontal></Row>
          <Row style={{ marginTop: '5%', marginLeft: '6%' }}>
            <Filter
              keywords={this.props.keywords}
              showFilters
              hasCornerFilter
              onFilter={this._filter}
              />
            <Items { ...this.state.items } onSelect={this.onSelect} />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div><Button bsStyle="primary" onClick={this.props.hide} ><FormattedMessage id="close" /></Button></div>
        </Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    keywords: state.get('misc').get('keywords').toJS(),
    bundles: state.get('bundles').toJS().filter(oBundle => oBundle.state === ITEM.STATE.KEY.PUBLISHED),
    products: state.get('products').toJS().filter(oProduct => oProduct.state === ITEM.STATE.KEY.PUBLISHED),
  };
}

const _components = { default: connect(stateToProps)(ModalFilterItems) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
