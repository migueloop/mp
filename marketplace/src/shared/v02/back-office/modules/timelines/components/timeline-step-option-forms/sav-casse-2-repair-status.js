import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Loader from 'v02/back-office/generic-components/spinner';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Input from 'react-bootstrap/lib/Input';
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
    console.log('props', props);
    this.state = {
      unassign_old_user: false,
      assign_to_user_stock: false,
      device_destroyed: false,
      delivery_details: props.followUpOptions.delivery_details,
    };
  }

  isFormValid = () => true

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return alert('Form is not valid');
    }
    const dataToSendThrough = this.state;
    this.props.onSubmit(dataToSendThrough);
  }
  onCheckUnassignUser = () => this.setState({ unassign_old_user: !this.state.unassign_old_user })
  onCheckAssignUserStock = () => this.setState({ assign_to_user_stock: !this.state.assign_to_user_stock })
  onCheckDeviceDestroyed = () => this.setState({ device_destroyed: !this.state.device_destroyed })

  render() {
    const { followUp } = this.props;
    const logo = <Thumbnail src={this.props.logo} style={{ width: '66%', margin: '0px auto' }} />;
    const submitTextKey = this.props.submitTextKey || 'complete_step';
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3><FormattedMessage id="repair_status" /></h3>
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
          <Input className="checkbox-custom" type="checkbox" checked={this.state.unassign_old_user} onClick={this.onCheckUnassignUser}>
            <label className="checkbox-custom-label"><FormattedMessage id="unassign_old_user" /></label>
          </Input>
        </div>
        <div className="form-group">
          <Input className="checkbox-custom" type="checkbox" checked={this.state.assign_to_user_stock} onClick={this.onCheckAssignUserStock}>
            <label className="checkbox-custom-label"><FormattedMessage id="assign_to_user_stock" /></label>
          </Input>
        </div>
        - <FormattedMessage id="or" /> -
        <div className="form-group">
          <Input className="checkbox-custom" type="checkbox" checked={this.state.device_destroyed} onClick={this.onCheckDeviceDestroyed}>
            <label className="checkbox-custom-label"><FormattedMessage id="device_destroyed" /></label>
          </Input>
        </div>

        <div className="form-group">
          <label htmlFor="delivery_details"><FormattedMessage id="delivery_details" /></label>
          <textarea className="form-control" type="text" id="delivery_details" name="delivery_details" onChange={e => this.setState({ delivery_details: e.target.value })} >
            {this.state.delivery_details}
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
