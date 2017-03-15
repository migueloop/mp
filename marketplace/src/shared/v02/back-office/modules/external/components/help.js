import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Offers extends Components {

  render() {
    return (
      <iframe src="http://intuiteev.knowledgeowl.com/help" className="billing-system-offers-bo" />
    );
  }
}

const _components = { default: Offers };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
