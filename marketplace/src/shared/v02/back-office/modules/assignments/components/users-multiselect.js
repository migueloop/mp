import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { SimpleSelect } from 'react-selectize';
import { FormattedMessage } from 'react-intl';

class Users extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
  };

  static propTypes = {
    user_info: React.PropTypes.object,
    user_info_key: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired,
    users: React.PropTypes.array.isRequired,
  };

  render() {
    const format = this.context.intl.formatMessage;

    return (
      <SimpleSelect
        className="corners-multiselect"
        placeholder={ format({ id: 'username' }) }
        // defaultValue = { this.props.user_info ? { label: `${this.props.user_info.lastname}, ${this.props.user_info.name} `, value: { name: this.props.user_info.name, lastname: this.props.user_info.lastname } } : { value: format({ id: 'username' }), label: format({ id: 'username' }) }}
        options={ this.props.users.map(u => ({ label: `${u.lastname}, ${u.name}`, value: { name: u.name, lastname: u.lastname, email: u.email, id: u.id } })) }
        values={ this.props.users ? this.props.users.map(u => ({ label: `${u.lastname}, ${u.name} `, value: { name: u.name, lastname: u.lastname, email: u.email, id: u.id } })) : [] }
        onValueChange={ user => {
          user ? this.props.update(this.props.user_info_key)(user.value) : this.props.update(this.props.user_info_key)(null);
        }}
        renderValue={ itemToRender => {
          return (<div className="react-selectize-placeholder"><FormattedMessage id="username" /></div>);
        }}
        renderResetButton={() => { return (<div></div>); } }
        transition-enter={true}
        theme="material"
      />
    );
  }
}

const _components = { default: Users };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
