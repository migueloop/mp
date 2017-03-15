import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { SimpleSelect } from 'react-selectize';
import Loader from 'v02/back-office/generic-components/spinner';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import querystring from 'querystring';
if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

class PortabilityDiagnosticForm extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    console.log('props', props);
    const options = querystring.parse(props.followUp.get('options') || '');
    this.state = {
      target_operator: options.target_operator || '',
      portability_date: options.portability_date || '',
      account_number: options.account_number || '',
      order_number: options.order_number || '',
      new_sim_number: options.new_sim_number || '',
    };
  }

  isFormValid = () => {
    return !!this.state.portability_date &&
    !!this.state.account_number &&
    !!this.state.order_number &&
    !!this.state.new_sim_number &&
    !!this.state.target_operator;
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return alert('Form is not valid');
    }
    const dataToSendThrough = this.state;
    this.props.onSubmit(dataToSendThrough);
  }

  onChangeTargetOperator = selectedItem => {
    this.setState({ target_operator: selectedItem.value });
  }

  convertArrayToSelectValues = (arr = []) => {
    return arr.map(value => {
      return { value, label: this.format({ id: value }) };
    });
  }

  render() {
    const followUp = this.props.followUp.toJS();
    console.log('in-progress::followUp', followUp);
    const logo = <Thumbnail src={followUp.assignmentOrder.product.logoUrl} style={{ width: '66%', margin: '0px auto' }} />;
    const formattedMessage = this.context.intl.formatMessage;
    const targetOperatorOptions = [
      { value: 'vodafone', label: formattedMessage({ id: 'vodafone' }) },
      { value: 'orange', label: formattedMessage({ id: 'orange' }) },
      { value: 'verizon', label: formattedMessage({ id: 'verizon' }) },
    ];
    const defaultValue = this.state.target_operator ? { value: this.state.target_operator, label: this.format({ id: this.state.target_operator }) } : null;

    const submitTextKey = this.props.submitTextKey || 'complete_step';
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3><FormattedMessage id="porta_ready" /></h3>

        <Row>
          <Col xs="4">{logo}</Col>
          <Col xs="8">
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="product_type" />:</Col>
              <Col xs="8"><FormattedMessage id={followUp.assignmentOrder.product.type} /></Col>
            </Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="user" />:</Col>
              <Col xs="8">{`${followUp.assignmentOrder.assignment.assignedTo.firstName} ${followUp.assignmentOrder.assignment.assignedTo.lastName}`}</Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="cp" />:</Col>
              <Col xs="8">{this.props.cp}</Col></Row>

            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="phone_number" />:</Col>
              <Col xs="8">{followUp.assignmentOrder.gdp.phoneNumber}</Col>
            </Row>

            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="options" />:</Col>
              <Col xs="8">{this.props.options}</Col></Row>
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="rio" />:</Col>
              <Col xs="8">{followUp.assignmentOrder.gdp.rio}</Col>
            </Row>
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="sim_number" />:</Col>
              <Col xs="8">{followUp.assignmentOrder.gdp.simCard && followUp.assignmentOrder.gdp.simCard.iccid}</Col>
            </Row>
          </Col>
        </Row>
        <div className="form-group">
          <label htmlFor="target_operator"><FormattedMessage id="target_operator" /></label>
          <SimpleSelect defaultValue={defaultValue} options={targetOperatorOptions} placeholder={formattedMessage({ id: 'select...' })} onValueChange={this.onChangeTargetOperator} />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="portability_date" /></label>
          <Input className="form-control" type="text" id="portability_date" name="date" value={this.state.portability_date} onChange={e => this.setState({ portability_date: e.target.value })} />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="account_number" /></label>
          <Input className="form-control" type="text" id="account_number" name="account_number" value={this.state.account_number} onChange={e => this.setState({ account_number: e.target.value })} />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="order_number" /></label>
          <Input className="form-control" type="text" id="order_number" name="order_number" value={this.state.order_number} onChange={e => this.setState({ order_number: e.target.value })} />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="new_sim_number" /></label>
          <Input className="form-control" type="text" id="new_sim_number" name="new_sim_number" value={this.state.new_sim_number} onChange={e => this.setState({ new_sim_number: e.target.value })} />
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

const _components = { default: connect(stateToProps)(PortabilityDiagnosticForm) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
