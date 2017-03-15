import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));


class MenuHorizontal extends Components {

  static propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  render() {
    const { tenant } = this.props;
    const items = React.Children.map(this.props.children, child => (
      <li>{child}</li>
    ));
    return (
      <nav className="mp-menu">
        <ul>
          {items}
        </ul>
      </nav>
    );
  }
}

const _components = {
  default: connector(MenuHorizontal),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
