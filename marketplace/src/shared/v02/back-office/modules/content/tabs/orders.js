import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { ITEM } from 'helpers/constants';
import AssignmentListCmpt from './assignment-list';

class Assignments extends Components {
  render() {
    const [AssignmentList] = [AssignmentListCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <div className="container voffset-top-2">
        // <AssignmentList products={this.props.assignments.filter(p => p.state !== ITEM.STATE.KEY.DELETED)} />
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('tenant'),
  };
}

const _components = { default: connect(stateToProps)(Assignments) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
