import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import { Link } from 'react-router';
import MenuHorizontal from 'v02/back-office/generic-components/layout/horizontal-menu-new';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class navigation extends Components {

  render() {
    const links = [
      {
        url: 'summary',
        title: this.format({ id:'summary_menu' }),
        className: 'summary',
      },
      {
        url: 'composition',
        title: this.format({ id:'composition' }),
        className: 'composition',
      },
    ].map(item => (
        <Link
          key={item.url}
          to={`/admin/bundle/edit/${this.props.bundle_id}/${item.url}`}
          activeClassName="active"
          className={`bundle-menu-${item.className}`} >
          {item.title}
        </Link>
      ));

    return (
      <Row>
        <Col xs={12}>
        <div className="page-header">
          <MenuHorizontal>
            {links}
          </MenuHorizontal>
        </div>
          </Col>
        </Row>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  default: connect(stateToProps)(navigation),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
