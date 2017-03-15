import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Loader from 'v02/back-office/generic-components/spinner';

class LineOptionsForm extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <form id="fleet-updated-line-1" onSubmit={this.props.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3>Fleet Updated Line 1 Form</h3>
        <div className="form-group">
          <label htmlFor="telephone_number"><FormattedMessage id="telephone_number" /></label>
          <input className="form-control" type="text" id="telephone_number" name="telephone_number" />
        </div>
        <div className="form-group">
          <label htmlFor="billing_account"><FormattedMessage id="billing_account" /></label>
          <input className="form-control" type="text" id="billing_account" name="billing_account" />
        </div>
        <div className="form-group">
          <label htmlFor="sim_number"><FormattedMessage id="sim_number" /></label>
          <input className="form-control" type="text" id="sim_number" name="sim_number" />
        </div>
        <div className="form-group">
          <label htmlFor="puk_code_1"><FormattedMessage id="puk_code_1" /></label>
          <input className="form-control" type="text" id="puk_code_1" name="puk_code_1" />
        </div>
        <div className="form-group">
          <label htmlFor="puk_code_2"><FormattedMessage id="puk_code_2" /></label>
          <input className="form-control" type="text" id="puk_code_2" name="puk_code_2" />
        </div>
        <div className="form-group">
          <label htmlFor="pin"><FormattedMessage id="pin" /></label>
          <input className="form-control" type="text" id="pin" name="pin" />
        </div>
        <div className="form-group">
          <label htmlFor="rio_number"><FormattedMessage id="rio_number" /></label>
          <input className="form-control" type="text" id="rio_number" name="rio_number" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={this.props.loading}><FormattedMessage id="save_and_next_step" /></button>
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
