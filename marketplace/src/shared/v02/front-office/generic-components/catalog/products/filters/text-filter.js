import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';

class TextFilter extends Components {

  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  filter = evt => {
    this.setState({ filter: evt.currentTarget.value });
    const obj = {};
    obj[this.props.field] = evt.currentTarget.value;
    this.props.onFilter(obj);
  }

  render() {
    return (
      <div className="text">
        <label className="control-label">{this.props.title}</label>
        <input
          placeholder={this.props.placeholder}
          onChange={this.filter}
          value={this.state.filter}
          name="name" type="text"
          className="form-control"
          />
      </div>
    );
  }
}
const connector = connect(state => ({ tenant: state.get('tenant') }));
const _components = { default: connector(TextFilter) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
