import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { MultiSelect } from 'react-selectize';
import Loader from 'v02/back-office/generic-components/spinner';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

class LineOptionsForm extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      broken_parts: [],
      comments: '',
    };
  }

  isFormValid = () => !!this.state.comments && this.state.broken_parts.length > 0

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return alert('Form is not valid');
    }
    const dataToSendThrough = this.state;
    this.props.onSubmit(dataToSendThrough);
  }

  onChangeBrokenParts = values => {
    this.setState({ broken_parts: values.map(value => value.value) });
  }

  render() {
    const { followUp } = this.props;
    const logo = <Thumbnail src={this.props.logo} style={{ width: '66%', margin: '0px auto' }}/>;
    const formattedMessage = this.context.intl.formatMessage;
    const brokenPartsOptions = [
      { value: 'broken_parts_screen', label: formattedMessage({ id: 'broken_parts_screen' }) },
      { value: 'broken_parts_battery', label: formattedMessage({ id: 'broken_parts_battery' }) },
      { value: 'broken_parts_case', label: formattedMessage({ id: 'broken_parts_case' }) },
      { value: 'broken_parts_buttons', label: formattedMessage({ id: 'broken_parts_buttons' }) },
    ];
    const defaultValue = this.state.broken_parts ? {
      value: this.state.broken_parts,
      label: formattedMessage({ id: this.state.broken_parts })
    } : brokenPartsOptions[0];
    const submitTextKey = this.props.submitTextKey || 'complete_step';
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading}/>
        <h3><FormattedMessage id="sc_device_diagnostic"/></h3>

        <Row>
          <Col xs="4">{logo}</Col>
          <Col xs="8">
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="product_type" />:</Col>
              <Col xs="8"><FormattedMessage id={this.props.productType} /></Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="user" />:</Col>
              <Col xs="8">{this.props.user}</Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="imei" />:</Col>
              <Col xs="8">{followUp.gdp.IMEI}</Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="serial_number" />:</Col>
              <Col xs="8">{followUp.gdp.SerialNumber}</Col></Row>
          </Col>
        </Row>
        <div className="form-group">
          <label htmlFor="broken_parts"><FormattedMessage id="broken_parts" /></label>
          <MultiSelect defaultValue={defaultValue} options={brokenPartsOptions} placeholder={formattedMessage({ id: 'select...' })} onValuesChange={this.onChangeBrokenParts} />
        </div>

        <div className="form-group">
          <label htmlFor="comments"><FormattedMessage id="comments"/></label>
          <textarea className="form-control" type="text" id="comments" name="comments"
                    onChange={e => this.setState({ comments: e.target.value })}>
            {this.state.comments}
          </textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={this.props.loading}>
          <FormattedMessage id={submitTextKey} />
        </button>
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
