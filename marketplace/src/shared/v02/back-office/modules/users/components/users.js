import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';
import _ from 'underscore';
import { PERMISSIONS } from 'helpers/constants';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
}));

class Users extends Components {

  _getMenuItems() {
    const formattedMessage = this.context.intl.formatMessage;
    const permissions = this.props.user.toJS().permissions;
    const menuitems = [];

    if (_.contains(permissions, PERMISSIONS.READ_USERS.id) && _.contains(permissions, PERMISSIONS.READ_USERS_DETAILS.id)) {
      menuitems.push({ url: '/admin/users/summary', title: formattedMessage({ id: 'view_users' }) });
    }

    if (_.contains(permissions, PERMISSIONS.CREATE_USER.id)) {
      menuitems.push({ url: '/admin/users/create', title: formattedMessage({ id: 'user_management' }), id: 'create-users' });
    }

    if (_.contains(permissions, PERMISSIONS.EDIT_ROLES_PERMISSION.id)) {
      menuitems.push({ url: '/admin/users/acl', title: formattedMessage({ id: 'role_management' }) });
    }
    return menuitems;
  }

  render() {
    const menuitems = this._getMenuItems();
    const menu = menuitems.map(data => (
      <Link key={data.id} to={data.url} activeClassName="active" className="generalMenuItem" id={data.id}>{data.title}</Link>
    ));

    return (
      <div className="container">
        <div className="page-header">
          <Menu>{menu}</Menu>
        </div>
        <Row>
          <Col xs={12} className="table-container">{this.props.children}</Col>
        </Row>
      </div>
    );
  }

}

const _components = { default: connector(Users) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
