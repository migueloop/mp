import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import StockCmpt from 'v02/back-office/modules/content/data-tables/stock-table';


class Stock extends Components {
  render() {
    const [StockList] = [StockCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return <StockList />;
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    bundles: state.get('v02').get('backOffice').get('bundles').get('all').toJS()
  };
}

const _components = {
  default: connect(stateToProps)(Stock),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
