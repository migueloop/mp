import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import { FormattedMessage } from 'react-intl';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { LongDate } from 'v02/back-office/generic-components/dates';
import { Actions } from 'v02/flux';
import V1Actions from 'flux/actions';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import ActionButtonCmpt from 'v02/back-office/generic-components/buttons/action-small';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import Spinner from 'react-spinjs';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  assignment: state.get('v02').get('backOffice').get('assignments').get('current'),
  notification: state.get('notification'),
  users: state.get('backoffice').get('users'),
}));

class AssignmentTableDetails extends Components {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        delete: false,
      },
    };
    this.load(props.data);
  }
  componentWillReceiveProps(props) {
    if (!!props.data && props.data.id !== this.props.data.id) {
      this.load(props.data);
    }
  }

  showModal = modalName => () => {
    const { modal } = this.state;
    modal[modalName] = true;
    this.setState({
      modal,
    });
  }

  hideModal = modalName => () => {
    const { modal } = this.state;
    modal[modalName] = false;
    this.setState({
      modal,
    });
  }

  deleteAssignment = () => {
    this.loading(true)();
    this.hideModal('delete')();
    this.props.dispatch(new Actions(this.props.tenant, this.props.user.get('token')).BackOffice.Assignments.delete(this.props.assignment.get('id')))
      .then(this.loading(false));
  }

  demandValidation = () => {
    const v01actions = new V1Actions(this.props.tenant);
    const assignmentId = this.props.assignment.get('id');
    const currentUserId = this.props.user.toJS().id;
    this.loading(true)();
    const users = this.props.users.toJS();
    this.props.dispatch(new Actions(this.props.tenant, this.props.user.get('token'))
    .BackOffice.Assignments.demandValidation(assignmentId))
    .then(() => v01actions.UserNotifications.createAssignmentPublicationRequestNotification({ currentUserId, assignmentId, users }))
    .then(action => this.props.dispatch(action))
    .then(this.loading(false))
    .catch(e => {
      this.props.notification.add({ message: 'Error validating the assignment', level: 'error' });
      console.log('Error validating the assignment', e);
    });
  }

  retire = () => {
    this.loading(true)();
    this.props.dispatch(new Actions(this.props.tenant, this.props.user.get('token')).BackOffice.Assignments.retire(this.props.assignment.get('id')))
    .then(() => this.loading(false)());
  }
  publish = () => {

    const v01actions = new V1Actions(this.props.tenant);
    this.loading(true)();
    const authorisedActions = new Actions(this.props.tenant, this.props.user.get('token'));

    //INICIO DEL PUBLISH
    const action = authorisedActions.BackOffice.Assignments.publish(this.props.assignment.get('id'), this.props.assignment.get('assignedBy'), this.props.assignment.get('assignedTo'));
    action.payload
    .then(actionRes => {
      console.log('actionRes', actionRes);
      console.log('action', action);
      this.props.dispatch(action);
    })
    .then(() => v01actions.Assignments.All)
    .then(allAssignmentsAction => this.props.dispatch(allAssignmentsAction))
    .then(() => {
      console.log('updating v1 assignment orders');
      const allOrdersAction = v01actions.AssignmentOrders.All;
      console.log('allOrdersAction', allOrdersAction);
      return allOrdersAction;
    })
    .then(asssignmentOrdersAction => {
      console.log('resolved::asssignmentOrdersAction', asssignmentOrdersAction);
      return this.props.dispatch(asssignmentOrdersAction);
    })
    .then(() => this.props.dispatch(authorisedActions.BackOffice.AssignmentsOrder.fetch()))
    .then(() => this.loading(false)())
    .then(() => this.props.notification.add({ message: this.format({ id: 'assigment_validated' }), level: 'success' }))
    .catch(e => {
      console.log('publish action error', e);
      this.props.notification.add({ message: e.data, level: 'error' });
      this.loading(false)();
    });
  }

  load = assignment => {
    this.loading(true)();
    this.props.dispatch(new Actions(this.props.tenant, this.props.user.get('token')).BackOffice.Assignments.fetchOne(assignment.id))
    .then(this.loading(false));
  }
  render() {
    if (!this.props.assignment.get('id') || this.state.loading) { return <Spinner />; }
    const [ConfirmationPopup] = [ConfirmationPopupCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const ActionButton = ActionButtonCmpt.get(this.props.tenant);
    const assignment = this.props.assignment.toJS();
    const users = this.props.users.toJS();
    assignment.assignedBy = users.find(user => user.id === assignment.idAssignedBy);
    assignment.assignedTo = users.find(user => user.id === assignment.idAssignedTo);
    const permissions = this.props.user.get('permissions').toJS();
    const canPublishAnyItem = permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1;
    const canPublishOwnItem = permissions.indexOf([PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id]) !== -1;
    const isItemOwner = assignment.idAssignedBy === this.props.user.get('id');

    // permissions
    const canEdit = assignment.state.id === ITEM.STATE.DRAFT &&
      (permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT.id) !== -1 ||
      permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id) !== -1);
    const canDelete = ((permissions.indexOf(PERMISSIONS.CREATE_ASSIGNMENT.id) !== -1) ||
      (permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id) !== -1) ||
      (permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1)) &&
      (assignment.state.id !== ITEM.STATE.VALIDATED);
    const canRequestPublication = (permissions.indexOf(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT.id) !== -1 ||
      permissions.indexOf(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT_OWN.id) !== -1) &&
      assignment.state.id === ITEM.STATE.DRAFT;
    const canWithdrawPublicationRequest = (((permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1) ||
    (permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id) !== -1) ||
    (permissions.indexOf(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT.id) !== -1) ||
    (permissions.indexOf(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT_OWN.id) !== -1)) &&
    (assignment.state.id === ITEM.STATE.PENDING));
    const canPublish = assignment.state.id !== ITEM.STATE.VALIDATED && canPublishAnyItem || (canPublishOwnItem && isItemOwner);

    const canView = assignment.state.id === ITEM.STATE.VALIDATED &&
      (
        (permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1) ||
        (permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT.id) !== -1) ||
        (permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id) !== -1) ||
        (permissions.indexOf(PERMISSIONS.CREATE_ASSIGNMENT.id) !== -1) ||
        (permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id) !== -1) ||
        (permissions.indexOf(PERMISSIONS.VIEW_ALL_ASSIGNMENTS.id) !== -1)
      );

    const bundle = (assignment.items.find(item => item.bundle) || {}).bundle;
    return (

      <div className="container">
        <Row>
          <h3>
            <FormattedMessage id="assignment" />
          </h3>
          <Row>
            <Col xs={4} className="v-list-label">
              <FormattedMessage id="N°" />
            </Col>
            <Col xs={8}>
              {assignment.idPoSystem}
            </Col>
          </Row>
          <Row><Col xs={4} className="v-list-label"><FormattedMessage id="done_on" /></Col>
            <Col xs={8}>
              <LongDate>{assignment.assignedAt}</LongDate>
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="v-list-label">
              <FormattedMessage id="assignment_assigned_by" />
            </Col>
            <Col xs={8}>
              {`${assignment.assignedBy.firstName} ${assignment.assignedBy.lastName}`}
            </Col>
          </Row>
          <Row>
            <Col xs={4} className="v-list-label">
              <FormattedMessage id="assignment_assigned_to" />
            </Col>
            <Col xs={8}>
              {`${assignment.assignedTo.firstName} ${assignment.assignedTo.lastName}`}
            </Col>
          </Row>
          </Row>
          {
            bundle && bundle.id && (
              <Row>
                <h3>
                  <FormattedMessage id="content" />
                </h3>
                <Row>
                  <Col xs={4} className="v-list-label">
                    <FormattedMessage id="bundle_name" />
                  </Col>
                  <Col xs={8}>
                    {bundle.title}
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} className="v-list-label" />
                  <Col xs={8} style={{ textAlign: 'left' }} >
                    <Thumbnail src={bundle.logoUrl} />
                  </Col>
                </Row>
              </Row>
            )
          }
          { assignment.items.length === 1 &&
          <Row>
            <h3><FormattedMessage id="content" /></h3>
            <Row>
              <Col xs={4} className="v-list-label">
                <FormattedMessage id="name" />
              </Col>
              <Col xs={8}>
                {assignment.items[0].product.name}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="v-list-label">
                <FormattedMessage id="Type" />
              </Col>
              <Col xs={8}>
                <FormattedMessage id={assignment.items[0].product.type} />
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="v-list-label" />
              <Col xs={8}>
                <Thumbnail src={assignment.items[0].product.logoUrl} />
              </Col>
            </Row>
          </Row>
          }
          { assignment.items.length > 1 &&
          <Row>
            <h3><FormattedMessage id="associated_orders" /></h3>
            {
              assignment.items.filter(item => item.product && item.product.id).map(item =>
                (
                  <Row className="orders-list">
                    <Col xs={2} className="col">
                      <Thumbnail src={item.product.logoUrl} />
                    </Col>
                    <Col xs={3} className="col">
                      {item.idPoSystem}
                    </Col>
                    <Col xs={4} className="col">
                      {item.product.name}
                    </Col>
                    <Col xs={3} className="col">
                      <FormattedMessage id={item.product.type} />
                    </Col>
                  </Row>
                )
              )
            }
          </Row>
          }
          <Row className="action-buttons">
            <h3><FormattedMessage id="action(s)" /></h3>
            <Row><Col xs={12}>
              { false && canEdit && <ActionButton type="edit" onClick={() => { this.props.showModal('modify', assignment); }} /> }
              { canDelete && <ActionButton type="delete" onClick={this.showModal('delete')} /> }
              { canRequestPublication && <ActionButton type="request" onClick={this.demandValidation} /> }
              { canWithdrawPublicationRequest && <ActionButton type="withdraw" onClick={this.retire} /> }
              { canPublish && <ActionButton type={assignment.state.id === ITEM.STATE.PENDING ? 'validate' : 'publish'} onClick={this.publish} /> }
              { canView && <ActionButton type="detail" onClick={() => { this.navigate(`/admin/assignment/detail/${assignment.id}`); }} /> }
            </Col>
            </Row>
          </Row>
        <ConfirmationPopup
          show={!!this.state.modal.delete}
          onHide={this.hideModal('delete')}
          onAction={this.deleteAssignment}
          actionStyle="warning"
          action={ this.format({ id: 'delete' })}
          title={ this.format({ id: 'confirmation' })}
        >
          <div><FormattedMessage id={'you_are_about_to_remove_assignment'} /></div>
        </ConfirmationPopup>
      </div>

    );
  }
}

const _components = {
  default: connector(AssignmentTableDetails),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
