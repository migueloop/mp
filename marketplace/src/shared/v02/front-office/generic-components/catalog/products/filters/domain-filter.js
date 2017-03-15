import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';

const connector = connect(state => ({ tenant: state.get('v02').get('common').get('tenant').get('name'), corners: state.get('corners').toJS() }));

class CornerFilter extends Components {
  constructor(props) {
    super(props);
    this.state = { domain: '' };
  }
  onChange = e => {
    const domain = parseInt(e.target.value, 10);
    this.setState({ domain });
    this.props.onFilter({ domain });
  }
  renderCornerOptions() {
    return this.props.domains.map(domain =>
      <option key={domain.id} value={domain.id}>{domain.name}</option>
    );
  }
  render() {
    return (
      <div>
        <label className="control-label">Domaine</label>
        <select
          value={this.state.corner}
          className="corner form-control"
          name="corner"
          onChange={this.onChange}
          >
          <option value="">Tous les domaines</option>
          {this.renderCornerOptions()}
        </select>
      </div>
    );
  }
}

const _components = { default: connector(CornerFilter) };
export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
