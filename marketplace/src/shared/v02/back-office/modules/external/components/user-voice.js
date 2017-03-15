import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { USERVOICE } from 'helpers/constants';

class UserVoice extends Components {

  render() {
    return (
      <iframe src={USERVOICE.URL.INTERCOM_BO} className="billing-system-offers-bo" security="restricted" />
    );
  }

}

const _components = { default: UserVoice };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
