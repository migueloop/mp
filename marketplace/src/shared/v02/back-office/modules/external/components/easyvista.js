import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';

class Easyvista extends Components {
  render() {
    return <iframe src="https://digital-dimension-apps.easyvista.com/index.php?name=com.digitaldimension.578df6c2e39e9" className="billing-system-offers-bo" />;
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  default: connect(stateToProps)(Easyvista),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
