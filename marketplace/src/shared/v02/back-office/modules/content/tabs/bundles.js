import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import BundlesCmpt from 'v02/back-office/modules/content/data-tables/bundles-table';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  bundles: state.get('v02').get('backOffice').get('bundles').get('all').toJS(),
  user: state.get('v02').get('common').get('user').toJS(),
}));

class Bundles extends Components {
  render() {
    const bundleId = parseInt(this.props.location.query.bundleId, 10);
    const state = this.props.location.query.state;
    let bundles = this.props.bundles;
    if (bundleId) {
      bundles = bundles.filter(bundle => bundle.id === bundleId);
    }
    if (state) {
      bundles = bundles.filter(item => item.state === state);
    }
    const [BundlesList] = [BundlesCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return <BundlesList bundles={bundles} />;
  }
}

const _components = { default: connector(Bundles) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
