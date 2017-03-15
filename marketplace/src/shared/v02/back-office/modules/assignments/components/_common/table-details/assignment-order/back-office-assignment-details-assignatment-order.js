import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ActionButtonCmpt from 'v02/back-office/generic-components/buttons/action-small';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import Spinner from 'react-spinjs';

import { LongDate } from 'v02/back-office/generic-components/dates';
import { Actions } from 'v02/flux';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  assignmentOrder: state.get('v02').get('backOffice').get('assignmentsOrder').get('current'),
}));

class AssignmentOrderDetail extends Components {
  constructor(props) {
    super(props);
    this.state = {};
    this.load(props.data);
  }

  componentWillReceiveProps(props) {
    if (!!props.data && props.data.id !== this.props.data.id) {
      this.load(props.data);
    }
  }

  load = assignmentOrder => {
    this.loading(true)();
    const a = new Actions(this.props.tenant, this.props.user.get('token')).BackOffice.AssignmentsOrder.fetchOne(assignmentOrder.id);
    this.props.dispatch(a)
      .then(this.loading(false));
  }

  render() {
    const [ActionButton] = [ActionButtonCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const data = this.props.data;
    if (this.state.loading || !this.props.assignmentOrder.get('id')) { return <Spinner />; }
    const userHasAccessToCurrentStep = data.hasAccessToCurrentStep;
    const order = this.props.assignmentOrder.toJS();
    const assignedBy = order.assignment.assignedBy || {};
    const assignedTo = order.assignment.assignedTo || {};
    return (

        <div className="container">
          <Row>
            <h3><FormattedMessage id="assignment_order" /></h3>
            <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="N°" /></Col><Col xs={8}>
                {order.idPoSystem}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="v-list-label"><FormattedMessage id="done_on" /></Col>
              <Col xs={8}>
                <LongDate date={order.assignment.assignedAt} />&nbsp;&nbsp;
                { moment(order.assignment.assignedAt).format('hh:mm:ss') }
              </Col>
            </Row>
            <Row><Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_by" /></Col><Col xs={8}>{ `${assignedBy.firstName} ${assignedBy.lastName}` }</Col></Row>
            <Row><Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_to" /></Col><Col xs={8}>{ `${assignedTo.firstName} ${assignedTo.lastName}` }</Col></Row>
          </Row>

          <Row>
            <h3><FormattedMessage id="content" /></h3>
            <Row><Col xs={4} className="v-list-label"><FormattedMessage id="name" /></Col><Col xs={8}>{order.product.name}</Col></Row>
            <Row><Col xs={4} className="v-list-label"><FormattedMessage id="Type" /></Col><Col xs={8}><FormattedMessage id={order.product.type} /></Col></Row>
            <Row><Col xs={4} className="v-list-label" /><Col xs={8}><Thumbnail src={order.product.logoUrl} /></Col></Row>
          </Row>

          <Row className="action-buttons">
            <h3><FormattedMessage id="actions(s)" /></h3>
            <Row><Col xs={12}>
              <ActionButton type="detail" onClick={() => this.props.onClickTimeline(order.assignment)} />
              <ActionButton type="purchase-order" onClick={() => this.props.onClickPurchaseOrder(this.props.data)} />
              { !!this.props.data.stepName &&
              <Button disabled={!userHasAccessToCurrentStep} className="btn-ico-left" onClick={() => this.props.onClickNextStep(this.props.data)}>
                <Glyphicon glyph="flag" className="ico ico-left" />
                <FormattedMessage id={this.props.data.stepName} />
              </Button>
              }
            </Col>
            </Row>
          </Row>

        </div>
    );
  }
}

const _components = {
  default: connector(AssignmentOrderDetail),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
