import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Loader from 'v02/back-office/generic-components/spinner';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class LineOptionsForm extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      imei: this.props.followUp.ged.IMEI,
      serialNumber: this.props.followUp.gdp.SerialNumber,
      comments: '',
    };
  }

  isFormValid = () => !!this.state.comments

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return alert('Form is not valid');
    }
    const dataToSendThrough = this.state;
    this.props.onSubmit(dataToSendThrough);
  }

  render() {
    const logo = <Thumbnail src={this.props.logo} />;
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3><FormattedMessage id="sc_device_ready" /></h3>

        <Row>
          <Col xs="4">{logo}</Col>
          <Col xs="8">
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="product_type" />:</Col>
              <Col xs="8"><FormattedMessage id={this.props.productType} /></Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="user" />:</Col>
              <Col xs="8">{this.props.user}</Col></Row>
          </Col>
        </Row>
        <div className="form-group">
          <label htmlFor="comments"><FormattedMessage id="comments"/></label>
          <textarea
            className="form-control"
            type="text"
            id="comments"
            name="comments"
            onChange={e => this.setState({ comments: e.target.value })}
            >{this.state.comments}</textarea>
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
