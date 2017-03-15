/**
 @mruiz Component loaded in /admin/content/:somewhere
*/
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';
import { PERMISSIONS } from 'helpers/constants';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  users: state.get('v02').get('backOffice').get('users'),
  products: state.get('v02').get('backOffice').get('products').get('all'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
  bundles: state.get('v02').get('backOffice').get('bundles').get('all'),
  assignmentOrders: state.get('v02').get('backOffice').get('assignmentsOrder').get('all'),
}));

class Content extends Components {

  static clientRequiredActionKeys = [
    'BackOffice.Products.fetchAll',
    'BackOffice.Bundles.fetchAll',
    'BackOffice.AssignmentsOrder.fetchAll',
    'BackOffice.Users.fetchAll',
  ];

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  get numPendingProducts() {
    return this.props.products.toJS().items.filter(a => a.state === 'pending').length || 0;
  }

  get numPendingBundles() {
    return this.props.bundles.filter(a => a.state === 'pending').length || 0;
  }

  get numPendingAssignmentOrders() {
    return this.props.assignmentOrders.filter(order => !!order.stepName && order.usersWithAccessToCurrentStep.indexOf(this.props.user.id) !== -1).length;
  }

  _getMenuItems() {
    // const permissions = this.props.user.toJS().permissions;
    const permissions = this.props.user.get('permissions').toJS();
    const menuitems = [];

    if (permissions.isIntersected([PERMISSIONS.EDIT_PRODUCT.id, PERMISSIONS.EDIT_PRODUCT_OWN.id])) {
      menuitems.push({ url: '/admin/content/products', title: this.format({ id: 'products' }) });
    }
    if (permissions.isIntersected([PERMISSIONS.EDIT_BUNDLE.id, PERMISSIONS.EDIT_BUNDLE_OWN.id])) {
      menuitems.push({ url: '/admin/content/bundles', title: this.format({ id: 'bundles' }) });
    }
    if (permissions.isIntersected([PERMISSIONS.OFFER_PRODUCT.id])) {
      menuitems.push({ url: '/admin/offers', title: this.format({ id: 'offers' }) });
    }
    if (permissions.isIntersected([PERMISSIONS.EDIT_STOCK.id, PERMISSIONS.EDIT_STOCK_OWN.id])) {
      menuitems.push({ url: '/admin/content/stock', title: this.format({ id: 'stock' }) });
    }
    return menuitems;
  }

  render() {
    console.log('::features', this.props.features);
    const menuitems = this._getMenuItems();
    const menu = menuitems.map(data => (
      <Link key={data.id} to={data.url} activeClassName="active" id={data.id}>{data.title}</Link>
    ));

    return (
      <div className="container">
        <div className="page-header">
          <Menu { ...this.props }>{menu}</Menu>
        </div>
        <Row>
          <Col xs={12} className="table-container">
            {React.cloneElement(this.props.children, { ...this.props })}
          </Col>
        </Row>
       </div>
    );
  }
}

const _components = { default: connector(Content) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
