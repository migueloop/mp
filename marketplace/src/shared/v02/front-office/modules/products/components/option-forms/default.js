/**
 * Created by cjgm on 6/27/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { SimpleSelect } from 'react-selectize';
import formSerialize from 'form-serialize';

class LineOptionsForm extends Components {

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit('');
  }

  render() {
    return (
      <form id="line_form_2" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <h4>
          <FormattedMessage id="no_option_info_needed" />
        </h4>
        { !this.props.disabled && <button type="submit" className="btn btn-primary"><FormattedMessage id="save" /></button> }
      </form>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = { default: connect(stateToProps)(LineOptionsForm) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
