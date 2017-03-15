import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ActionButtonCmpt from 'v02/back-office/generic-components/buttons/action-small';
import moment from 'moment';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage } from 'react-intl';
import { getProductType } from 'helpers/product';
import { Actions } from 'v02/flux';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('products'),
  user: state.get('v02').get('common').get('user'),
  assignmentOrderFollowUp: state.get('v02').get('backOffice').get('assignmentsOrderFollowUps').get('current'),
}));

class DatatableDetail extends Components {

  componentDidMount() {
    this._fetchItemInfo();
  }

  componentWillReceiveProps(props) {
    if (!props.data || this.props.data.id === props.data.id) {
      return;
    }
    this._fetchItemInfo(props);
  }

  _fetchItemInfo = (props) => {
    // const productId = this.props.data.assignmentOrder.product.id
    props = props || this.props;
    this.loading(true)()
    const followUpAction = new Actions(this.props.tenant, this.props.user.get('token')).BackOffice.AssignmentsOrderFollowUps.fetchOne(props.data.id);
    followUpAction.payload.then(pl => console.log('pl', pl));
    this.props.dispatch(followUpAction)
    .then(this.loading(false))
    .catch(e => console.log('error getting data', e));
  };

  render() {
    const [ActionButton] = [ActionButtonCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const data = this.props.data;
    if (this.state.loading || !data || !this.props.assignmentOrderFollowUp.get('id') || this.props.assignmentOrderFollowUp.get('id') !== data.id) { return <div>Loading</div>; }
    const followUp = this.props.assignmentOrderFollowUp.toJS();
    return (
      <div>
          <div className="container">
            <Row>
              <h3><FormattedMessage id="assignment_order" /></h3>
              <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="N°" /></Col>
                <Col xs={8}>{followUp.assignmentOrder.idPoSystem}</Col>
              </Row>
              <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="done_on" /></Col>
                <Col xs={8}>{moment(followUp.assignmentOrder.assignedAt).format('MMMM Do YYYY, hh:mm:ss')}</Col>
              </Row>
              <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="by" /></Col>
                <Col xs={8}>{`${followUp.assignmentOrder.assignment.assignedBy.firstName} ${followUp.assignmentOrder.assignment.assignedBy.lastName}`}</Col>
              </Row>
              <Row>
                <Col xs={4} className="v-list-label"><FormattedMessage id="assignment_assigned_to" /></Col>
                <Col xs={8}>{`${followUp.assignmentOrder.assignment.assignedTo.firstName} ${followUp.assignmentOrder.assignment.assignedTo.lastName}`}</Col>
              </Row>
          </Row>
            <Row>
              <h3><FormattedMessage id="content" /></h3>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="name" /></Col><Col xs={8}>{followUp.assignmentOrder.product.name}</Col></Row>
              <Row><Col xs={4} className="v-list-label"><FormattedMessage id="Type" /></Col><Col xs={8}>{followUp.assignmentOrder.product.type}</Col></Row>
              <Row><Col xs={4} className="v-list-label" ></Col><Col xs={8}><Thumbnail src={followUp.assignmentOrder.product.logoUrl} /></Col></Row>
            </Row>
            <Row className="action-buttons">
              <h3><FormattedMessage id="action(s)" /></h3>
              <Row>
                <Col xs={12}>
                  <ActionButton type="detail" onClick={() => this.props.onClickTimeline(data)} />
                </Col>
              </Row>
            </Row>
          </div>
      </div>
    );
  }
}

const _components = {
  default: connector(DatatableDetail),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
