import React from 'react';
import Component from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ModalFilterItemsCmpt from 'v02/back-office/modules/modals/modal-filter-products';
import moment from 'moment';

class StockNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAssignmentModal: false,
      count: null,
      createdAt: null,
      item: null,
      loading: false,
    };
  }

  onChangeCount = e => {
    this.setState({ count: e.target.value });
  }

  onChangeDate = e => {
    this.setState({ createdAt: e.target.value });
  }


  /**
   * Call action to create new assignment
   */
  createStock = stock => {
    console.log('stock', stock);
    this.setState({ loading: true });
    return new Actions(this.props.tenant).Stock.create(stock)
    .then(action => {
      console.log('action', action);
      return Promise.resolve(action);
    })
    .then(action => Promise.resolve(this.props.dispatch(action)))
    .then(() => Promise.resolve(this.props.notification.add({ message: <FormattedMessage id="stock_created_success" />, level: 'success' })))
    .then(() => Promise.resolve(this.setState({ loading: false })))
    .then(() => Promise.resolve(setTimeout(() => this.navigate('/admin/content/stock'), 350)))
    .catch(err => {
      console.log('ERR: ', err);
      this.props.notification.add({ message: <FormattedMessage id="stock_creation_error" />, level: 'error' });
    });
  }

  isFormValid = () => {
    let isValid = true;
    if (!this.state.item) {
      this.props.notification.add({ message: <FormattedMessage id="please_select_product_error" />, level: 'error' });
      isValid = false;
    }
    if (!this.state.createdAt) {
      this.props.notification.add({ message: <FormattedMessage id="please_select_date_error" />, level: 'error' });
      isValid = false;
    }
    if (!this.state.count || parseInt(this.state.count, 10) < 1) {
      this.props.notification.add({ message: <FormattedMessage id="please_add_stock_count_error" />, level: 'error' });
      isValid = false;
    }
    return isValid;
  };

  onClickAddStock = () => {
    const isValid = this.isFormValid();
    if (!isValid) {
      return isValid;
    }
    const stock = {
      productId: this.state.item.id,
      count: this.state.count,
      createdAt: moment(this.state.createdAt).format('X'),
    };
    return this.createStock(stock);
  }

  /**
   * @param tenant
   * @param dispatch
   * @param params
   * @param query
   * @returns {Promise|Promise.<T>}
   */
  static fetchData(tenant, dispatch, params = {}, query = {}) {
    const Action = new Actions(tenant);
    // Insert here the Action to fetch the needed data
    return Promise.all([])
    .then(actions => Promise.resolve(actions))
    // Set SEO data after load required fields in the state
    .then(() => Action.Seo.set({ type: '', data: {} }).then(action => Promise.resolve(dispatch(action))));
  }

  closeModalFilterItems = e => this.setState({ showModalFilterItems: false });

  toggleModalFilterItems = () => this.setState({ showModalFilterItems: !this.state.showModalFilterItems })

  onAddItem = item => {
    const productMatch = this.props.products.toJS().find(product => product.id === item.id);
    this.setState({ item: productMatch }, this.closeModalFilterItems);
  };

  render() {
    const [ModalFilterItems] = [ModalFilterItemsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const description = this.state.item && this.state.item.description || '';
    const dangerousDescription = { __html: description };
    const selectProductText = this.state.item ? 'change' : 'select_product';
    return (
      <div className="container mp-assignments">
        <article itemScope itemType="http://schema.org/Product" className="mp-product h-product">
          <Row className="padding-bottom">
            <Col xs={12} sm={12} md={8} lg={8} className="padding-top">
            <Row className="padding-v-cols">
              <div className="select-bundle-component" >
                <Col id="main-info" xs={12} sm={3} >
                  <img className="logo" src={this.state.item && this.state.item.logo} alt={this.state.item && this.state.item.name} />
                  <span>{this.state.item && this.state.item.name} </span><br />
                </Col>
                <Col id="description" xs={12} sm={7} >
                  <div dangerouslySetInnerHTML={dangerousDescription} />
                </Col>
                <div className="select-bundle-component-add">
                  <Button disabled={this.state.loading} className="btn btn-edit btn-small" onClick={ () => this.setState({ showModalFilterItems: true }) }>
                    <FormattedMessage id={selectProductText} />
                  </Button>
                </div>
              </div>
            </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="padding-top">
              <Input disabled={this.state.loading} type="number" min="1" value={this.state.count} onChange={this.onChangeCount} />
              <br />
              <Input disabled={this.state.loading} type="date" value={this.state.date} onChange={this.onChangeDate} />
            </Col>
          </Row>
          <Row className="padding-top">
            <Col xs={12} sm={12} md={8} lg={8} className="hidden-xs hidden-sm">
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="text-right">
              <Link to={'/admin/content/stock'} className="white-button uppercase-text btn" style={{ width: '33%', float: 'left', color: 'black' }}> <FormattedMessage id="cancel" /></Link>
              <Button disabled={this.state.loading} className="grey-button uppercase-text" onClick={this.onClickAddStock} style={{ width: '64%', float: 'right' }} >
                <FormattedMessage id="add_stock" />
              </Button>
            </Col>
          </Row>
        </article>
        <ModalFilterItems show={this.state.showModalFilterItems} hide={this.toggleModalFilterItems} onSelect={oItem => this.onAddItem(oItem)} />
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    notification: state.get('notification'),
    products: state.get('products'),
  };
}

const _components = { default: connect(stateToProps)(StockNew) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
