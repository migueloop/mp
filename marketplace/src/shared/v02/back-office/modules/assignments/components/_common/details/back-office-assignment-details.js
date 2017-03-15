import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import { Actions } from 'v02/flux';
import { FormattedMessage } from 'react-intl';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert';
import Row from 'react-bootstrap/lib/Row';
import AccordionCmpt from './_common/accordion';
import Spinner from 'react-spinjs';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  assignment: state.get('v02').get('backOffice').get('assignments').get('current'),
}));

class AssignmentDetails extends Components {
  static getActions(tenant, params = {}, query = {}, user) {
    const actions = new Actions(tenant, user.get('token'));
    return [
      actions.BackOffice.Assignments.fetchOneExtra(params.id),
    ];
  }
  render() {
    if (!this.props.assignment.get('id')) { return <Spinner />; }
    const [Accordion] = [AccordionCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const assignment = this.props.assignment.toJS();
    return (
      <article itemScope itemType="http://schema.org/Product" className="mp-assignments">
        <div className="detail-assignment container">
          <div id="main-header">
            <h2>
              <FormattedMessage id={'assignment_detail'} />
            </h2>
          </div>
          <Row id="general-information">
            <Col sm={12}>
              <h3>
                <FormattedMessage id={'general_information'} />
              </h3>
            </Col>
            <Col sm={12}>
              <Alert bsStyle="warning">
                <p id="order-id"># {this.props.assignment.get('idPoSystem')} </p>
                <p id="assigned-to">{`${this.props.assignment.get('assignedTo').get('firstName')} ${this.props.assignment.get('assignedTo').get('lastName')}`}</p>
                <p id="creation-date">{this.props.assignment.get('assignedAt')}</p>
                <p id="assigned-by">
                  <FormattedMessage id={'by'} />
                  {`${this.props.assignment.get('assignedBy').get('firstName')} ${this.props.assignment.get('assignedBy').get('lastName')}`}
                </p>
              </Alert>
            </Col>
            <Col sm={12}>
              {assignment.items.filter(item => item.product && item.product.id).map(item => (
                <div><Accordion itemInfo={item} /></div>
              ))}
            </Col>
          </Row>
        </div>
      </article>
    );
  }
}

const _components = {
  default: connector(AssignmentDetails),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
