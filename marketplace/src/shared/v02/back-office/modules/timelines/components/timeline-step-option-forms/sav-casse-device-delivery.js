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

  constructor(props) {
    super(props);
    this.state = {
      tracking_number: '',
      additional_info: '',
    };
  }

  isFormValid = () => !!this.state.tracking_number && !!this.state.additional_info

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return alert('Form is not valid');
    }
    const dataToSendThrough = this.state;
    this.props.onSubmit(dataToSendThrough);
  }

  render() {
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3><FormattedMessage id="sc_device_delivery" /></h3>
        <div className="form-group">
          <label htmlFor="tracking_number"><FormattedMessage id="tracking_number" /></label>
          <input className="form-control" type="text" id="tracking_number" name="tracking_number" value={this.state.tracking_number} onChange={e => { this.setState({ tracking_number: e.target.value }); }} />
        </div>
        <div className="form-group">
          <label htmlFor="additional_info"><FormattedMessage id="additional_info" /></label>
          <textarea className="form-control" type="text" id="additional_info" name="additional_info" value={this.state.additional_info} onChange={e => { this.setState({ additional_info: e.target.value }); }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={this.props.loading}><FormattedMessage id="complete_step" /></button>
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
