import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import TitleCmpt from './title';


@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}))
class Header extends Components {
  render() {
    // Tenant specific
    const tenant = this.props.tenant;
    const [Title] = [TitleCmpt].map(Component => Component.get(tenant));

    return (
      <header className="mp-header" role="banner">
        {/* Title */}
        <Title />
        {this.props.children}
      </header>
    );
  }
}


const _components = {
  default: Header,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
