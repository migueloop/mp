/**
 * Created by cjgm on 5/26/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import { Link } from 'react-router';
import MenuHorizontalCmpt from 'v02/back-office/modules/layout/horizontal-menu';

class navigation extends Components {

  static propTypes = {
    assignment_id: React.PropTypes.number.isRequired,
  };


  render() {
    const [MenuHorizontal] = [MenuHorizontalCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const links = [
      {
        url: 'summary',
        title: 'Résumé',
        className: 'summary',
      },
    ].map(item => (
      <Link
        key={item.url}
        to={`/admin/assignment/edit/${this.props.assignment_id}/${item.url}`}
        // activeClassName="active"
        className={`bundle-menu-${item.className}`} >
        {/* item.title */}
      </Link>
    ));

    return (
      <div style={{ marginBottom: '10%', float: 'right' }}>
        <MenuHorizontal>
          {links}
        </MenuHorizontal>
      </div>
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
