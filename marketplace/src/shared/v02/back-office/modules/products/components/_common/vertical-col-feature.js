import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class VerticalColFeature extends Components {
  render() {
    return (
      <div key={this.props.key} className="feature" style={{ height: this.props.heightMax > 5 ? this.props.heightMax : 'initial' }} >
        <h4>{this.props.feature.name}</h4>
        <div className="description" dangerouslySetInnerHTML={{ __html: this.props.feature.description }}></div>
      </div>
    );
  }
}

const _components = {
  default: connector(VerticalColFeature),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
