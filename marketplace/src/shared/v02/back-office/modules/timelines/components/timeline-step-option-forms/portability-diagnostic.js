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
    this.state = {
      target_operator: '',
      portability_date: '',
      account_number: '',
      order_number: '',
      new_sim_number: '',
    };

    console.log('form props', props);
  }

  isFormValid = () => {
    console.log('this.state', this.state);
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

  // Info needed:
// . get 'PRODUCT TYPE' from MP
// . get 'LOGO' from MP
// . get 'USER' from USER Mgt
// . Get ‘CP’ from USER Mgt
// . get ‘Phone number' from GDP (Check assignation detail)
// . get ‘OPTION’ from MP (where we can't change it)
// . get ‘RIO #’ from GDP (here we can modifie it)
//

//
// /!\ => POGen to create xls
// Here we will have a specific JIRA

  render() {
    const assignmentOrder = this.props.assignmentOrder.toJS();
    const users = this.props.users.toJS();
    const assignment = this.props.assignments.toJS().find(a => a.id === assignmentOrder.idAssignment);
    const assignedBy = users.find(user => user.id === assignment.idAssignedBy);
    const assignedTo = users.find(user => user.id === assignment.idAssignedTo);
    assignmentOrder.assignedBy = assignedBy;
    assignmentOrder.assignedTo = assignedTo;
    console.log('diagnostic::assignmentOrder', assignmentOrder);
    console.log('diagnostic::assignment', assignment);
    console.log('diagnostic::users', users);
    console.log('diagnostic::assignedBy', assignedBy);
    console.log('diagnostic::assignedTo', assignedTo);
    // console.log('this.props.gdpInfo', this.props.gdpInfo);
    const logo = <Thumbnail src={this.props.logo} style={{ width: '66%', margin: '0px auto' }} />;
    const formattedMessage = this.context.intl.formatMessage;
    // TODO: LOAD THIS DYNAMICALLY
    const targetOperatorOptions = [
      { value: 'sfr', label: 'sfr' },
      { value: 'orange', label: 'orange' },
      { value: 'bouygue', label: 'bouygue' },
    ];
    const submitTextKey = this.props.submitTextKey || 'complete_step';
    return (
      <form id="fleet-updated-line-1" onSubmit={this.onSubmit} className="center-block" style={{ width: '300px' }}>
        <Loader loaded={!this.props.loading} />
        <h3><FormattedMessage id="portability_diagnostic" /></h3>

        <Row>
          <Col xs="4">{logo}</Col>
          <Col xs="8">
            {this.props.data && this.props.data.name && (
              <Row>
                <Col xs="4" className="v-list-label"><FormattedMessage id="name" />:</Col>
                <Col xs="8">{this.props.data.name}</Col>
              </Row>
            )}
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="product_type" />:</Col>
              <Col xs="8"><FormattedMessage id={assignmentOrder.product.type} /></Col>
            </Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="user" />:</Col>
              <Col xs="8">{`${assignmentOrder.assignedTo.name} ${assignmentOrder.assignedTo.lastname}`}</Col></Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="cp" />:</Col>
              <Col xs="8">{this.props.cp}</Col></Row>

            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="phone_number" />:</Col>
             <Col xs="8">{assignmentOrder.gdp.phoneNumber}</Col>
            </Row>
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="options" />:</Col>
              <Col xs="8">{assignmentOrder.gdp.rio}</Col>
            </Row>
            <Row><Col xs="4" className="v-list-label"><FormattedMessage id="rio" />:</Col>
              <Col xs="8">{this.props.options}</Col></Row>
            <Row>
              <Col xs="4" className="v-list-label"><FormattedMessage id="sim_number" />:</Col>
              <Col xs="8">{assignmentOrder.gdp.simCard && assignmentOrder.gdp.simCard.iccid}</Col>
            </Row>

          </Col>
        </Row>
        <div className="form-group">
          <label htmlFor="target_operator"><FormattedMessage id="target_operator" /></label>
          <SimpleSelect options={targetOperatorOptions} placeholder={formattedMessage({ id: 'select...' })} onValueChange={this.onChangeTargetOperator} />
        </div>
        <div className="form-group">
          <label><FormattedMessage id="portability_date" /></label>
          <Input type="date" className="form-control" id="portability_date" name="date" value={this.state.portability_date} onChange={e => this.setState({ portability_date: e.target.value })} />
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

// . push in MP combo named 'Opérateur cible’ where you have the list with all the product type = Line (1)
// . push ‘DATE’ in MP with this wording ‘Date de portabilité’ :
// . Push in MP -blank field named 'N° de compte de facturation ( à saisir obligatoirement pour la commande)’
// . Push in MP -blank field named 'N° de Commande SNCF (BUPO  CLIENT à saisir obligatoirement pour la commande)’
// . Push ’SIM #2’ to MP ‘Nouveau N° SIM :’

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    products: state.get('products'),
    user: state.get('v02').get('common').get('user'),
    users: state.get('backoffice').get('users'),
    notification: state.get('notification'),
    timelines: state.get('timelines'),
    assignmentOrder: state.get('v02').get('backOffice').get('assignmentsOrder').get('current'),
    assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
  };
}

const _components = { default: connect(stateToProps)(PortabilityDiagnosticForm) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
