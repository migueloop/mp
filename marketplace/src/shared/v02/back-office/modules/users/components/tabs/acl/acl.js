import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class Roles extends Components {

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

const _components = {
  default: connector(Roles),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
