import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import { Link } from 'react-router';
import Row from 'react-bootstrap/lib/Row';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  corners: state.get('corners'),
  users: state.get('backoffice').get('users').toJS(),
  notification: state.get('notification'),
}));

class Corners extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  _getMenuItems() {
    const menuitems = [];
    menuitems.push({ url: '/admin/corners', title: this.format({ id: 'domains' }) });
    menuitems.push({ url: '/admin/editors', title: this.format({ id: 'editors_domains' }) });
    return menuitems;
  }

  render() {
    const menuitems = this._getMenuItems();
    const menu = menuitems.map(data => (
      <Link key={data.id} to={data.url} activeClassName="active" id={data.id}>{data.title}</Link>
    ));

    return (
      <div className="container">
        <div className="page-header">
          <Row><Menu>{menu}</Menu></Row>
        </div>
        {this.props.children}
      </div>
    );
  }

}

const _components = { default: connector(Corners) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
