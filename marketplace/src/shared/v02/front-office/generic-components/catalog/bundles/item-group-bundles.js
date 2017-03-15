import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import BundlesCmpt from 'v02/back-office/modules/bundles/components';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class ListBundles extends Components {

  constructor(props) {
    super(props);
    this.state = {
      filters: {},
    };
  }

  componentWillReceiveProps(props) {
    if (!props.show && this.props.show !== props.show) {
      this.setState({
        filters: {},
      });
    }
  }

  onFilter = filters => {
    this.setState({
      filters,
    });
  }

  render() {
    // Tenant specific
    if (!this.props.bundles || !this.props.show) {
      return <div> No bundles found. </div>;
    }
    const { tenant } = this.props;
    const [Bundles] = [BundlesCmpt].map(cmpt => cmpt.get(tenant));
    return (
      <div>
        <Bundles bundles={this.props.bundles} link={true} />
      </div>
    );
  }
}

const _components = {
  default: connector(ListBundles),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
