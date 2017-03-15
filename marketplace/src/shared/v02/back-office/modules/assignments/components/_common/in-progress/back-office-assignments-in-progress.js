import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
}));

class AssignmentInProgress extends Components {
  render() {
    return (
      <div>
        in progress
      </div>
    );
  }
}

const _components = {
  default: connector(AssignmentInProgress),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
