/**
 * Created by cjgm on 6/27/16.
 */
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
      <form id="fleet-updated-device-1" onSubmit={this.props.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3>Fleet Updated Device 1 Form</h3>
        <div className="form-group">
          <label htmlFor="purchaseDate"><FormattedMessage id="purchase_date" /></label>
          <input className="form-control" name="purchase_date" type="date" id="purchaseDate" style={{ width: '300px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="imei_number"><FormattedMessage id="imei_number" /></label>
          <input className="form-control" type="text" id="imei_number" name="imei_number" />
        </div>
        <div className="form-group">
          <label htmlFor="serial_number"><FormattedMessage id="serial_number" /></label>
          <input className="form-control" type="text" id="serial_number" name="serial_number" />
        </div>
        <div className="form-group">
          <label htmlFor="guarantee_duration"><FormattedMessage id="guarantee_duration" /></label>
          <input className="form-control" type="text" id="guarantee_duration" name="guarantee_duration" />
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
