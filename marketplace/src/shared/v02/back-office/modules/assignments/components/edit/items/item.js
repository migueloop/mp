import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FormattedMessage } from 'react-intl';
import ModalFilterItemsCmpt from 'v02/back-office/modules/modals/modal-filter-items';
import { ITEM } from 'helpers/constants';

class Item extends Components {

  constructor(props) {
    super(props);
    this.state = {
      updateItem: -1,
      shoModalFilterItems: false,
      itemType: null,
    };
  }

  static propTypes = {
    assignment: React.PropTypes.object.isRequired,
    onAddItem: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.assignment.items.length > 0) {
      const nLastElement = this.props.assignment.items.length;
      const sIdItemType = this.props.assignment.items[nLastElement - 1].id_item_type;
      let sItemType = null;

      switch (parseInt(sIdItemType, 10)) {
        case ITEM.TYPES_ID.PRODUCT:
          sItemType = ITEM.TYPES.PRODUCT;
          break;
        case ITEM.TYPES_ID.BUNDLE:
          sItemType = ITEM.TYPES.BUNDLE;
          break;
        default:
          break;
      }
      this.setState({ itemType: sItemType });
    }
  }

  _setItems = () => {
    if (this.props.assignment.items && this.props.assignment.items.length > 0) {
      const oItem = this.props.assignment.items[0];
      let oTmpItem = {};
      // retrieve information of the sate
      if ((oItem.id_bundle && !oItem.id_product)) {
        // if it is a bundle
        oTmpItem = this.props.bundles.find(b => b.id === parseInt(oItem.id_bundle, 10));
        oItem.name = oTmpItem.title;
        oItem.logo = oTmpItem.logo_info.url;
        oItem.editor_title = '';// oTmpItem.editor.title;
        oItem.description = oTmpItem.description;
      } else if (oItem.id_product) {
        // is a product
        oTmpItem = this.props.products.find(p => p.id === parseInt(oItem.id_product, 10));
        oItem.name = oTmpItem.name;
        oItem.logo = oTmpItem.logoUrl;
        oItem.editor_title = '';// oTmpItem.editor.title;
        oItem.description = oTmpItem.description;
      }

      return (
        <Row className="padding-v-cols">
          <Col id="main-info" xs={12} sm={3} >
            <img className="logo" src={oItem.logo} alt={oItem.name} />
            <span>{oItem.name} </span><br />
            <span id="editor-title">{oItem.editor_title}</span>
          </Col>
          <Col id="description" dangerouslySetInnerHTML={{ __html: oItem.description }} xs={12} sm={7} />
          <Col id="change-item" xs={12} sm={2} >
            <button className="btn btn-edit btn-small" onClick={ () => this.setState({ shoModalFilterItems: true }) }>
            <FormattedMessage id="change" />
              </button>
          </Col>
        </Row>);
    }
    return (
      <button className="btn btn-add" onClick={ () => this.setState({ shoModalFilterItems: true }) } >
        {/* <AddIcon className="ico-left" />*/}<FormattedMessage id="select_product_bundle" />
      </button>
    );
  };

  /**
   * When a component is selected in the modal, call the prop function in assignment to dispatch the action
   * @param {object} oSelectedItem contains alias(string), id(number), logo(string), and name or title(string)
   * @param {object} sItemType product or bundle
   */
  onAddItem = oSelectedItem => {
    this.props.onAddItem(oSelectedItem);
    this.toggleModalFilterItems();
    switch (oSelectedItem.type) {
      case ITEM.TYPES.PRODUCT:
        this.setState({ itemType: ITEM.TYPES.PRODUCT });
        break;
      case ITEM.TYPES.BUNDLE:
        this.setState({ itemType: ITEM.TYPES.BUNDLE });
        break;
      default:
        break;
    }
  };

  onDeleteItem = (nItemId, nKey) => event => {
    event.preventDefault();
    this.setState({ itemType: null });
    this.props.onDeleteItem(nItemId, nKey);
  };

  /**
   * Change the boolean in assignment to show or no the modal to choose a new bundle to add to the assignment
   */
  toggleModalFilterItems = () => {
    this.setState({ shoModalFilterItems: !this.state.shoModalFilterItems });
  };

  render() {
    const [ModalFilterItems] = [ModalFilterItemsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const aItems = this._setItems();
    return (
      <div>
        <h3><FormattedMessage id="general_information" /></h3>
        <div className="select-bundle-component" >
          <div md={12} id="select-bundle-component-add">{aItems}</div>
          <ModalFilterItems show={this.state.shoModalFilterItems} hide={this.toggleModalFilterItems} onSelect={oItem => this.onAddItem(oItem)} />
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    products: state.get('products').toJS(),
    bundles: state.get('bundles').toJS(),
  };
}

const _components = { default: connect(stateToProps)(Item) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
