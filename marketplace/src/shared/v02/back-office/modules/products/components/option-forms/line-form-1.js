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
  static featureName() {
    return 'products.features.lineOptions';
  }

  static propsTypes = {
    onChangeFeatureAvailability: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(formSerialize(e.target));
  }

  render() {
    const formattedMessage = this.context.intl.formatMessage;
    const simOptions = [
      { value: 'full_size_sim', label: formattedMessage({ id: 'full_size_sim' }) },
      { value: 'std_mini_sim_2ff', label: formattedMessage({ id: 'std_mini_sim_2ff' }) },
      { value: 'micro_sim_3ff', label: formattedMessage({ id: 'micro_sim_3ff' }) },
      { value: 'nano_sim_4ff', label: formattedMessage({ id: 'nano_sim_4ff' }) },
    ];
    const internetOptions = [
      { value: 'unlimited_data', label: formattedMessage({ id: 'unlimited_data' }) },
      { value: 'anitvirus', label: formattedMessage({ id: 'anitvirus' }) },
    ];
    return (
      <form id="line_form_1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <h3><FormattedMessage id="line_form_1" /></h3>
        <div className="form-group">
          <label htmlFor="date"><FormattedMessage id="choose_activation_date" /></label>
          <input className="form-control" name="activation_date" type="date" id="activationDate" style={{ width: '300px' }} disabled={this.props.disabled} />
        </div>
        <div className="form-group"><SimpleSelect name="sim" options={simOptions} placeholder={formattedMessage({ id: 'select_sim' })} disabled={this.props.disabled} /></div>
        <div className="form-group">
          <div className="checkbox">
            <label htmlFor="smsAlert">
              <input type="checkbox" id="smsAlert" name="sms_alert" disabled={this.props.disabled} /><FormattedMessage id="sms_alert" />
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
          <p className="help-block">{formattedMessage({ id: 'international_options' })}</p>
            <div className="checkbox">
              <label htmlFor="fromAbroad">
                <input type="checkbox" id="fromAbroad" value="from_abroad" name="international_options[]" disabled={this.props.disabled} /><FormattedMessage id="from_abroad" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="toAbroad">
                <input type="checkbox" id="toAbroad" value="to_abroad" name="international_options[]" disabled={this.props.disabled} /><FormattedMessage id="to_abroad" />
              </label>
            </div>
          </div>
        </div>
        <div className="form-group"><SimpleSelect name="internet_options" options={internetOptions} placeholder={formattedMessage({ id: 'select_internet_package' })} disabled={this.props.disabled} /></div>
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
