import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Well from 'react-bootstrap/lib/Well';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { parseFollowUps } from 'helpers/follow-ups';
import { PERMISSIONS } from 'helpers/constants';

class Todo extends Components {

  getButton = ({ text, to, count }) => {
    if (count === 0) {
      return null;
    }
    return (
      <Link to={to} className="btn" style={{ display: 'block', width: '100%', textAlign: 'left', backgroundColor: '#5cb85c' }}>
        {text}
        <Glyphicon glyph="plus" className="ico ico-right" style={{ float: 'right' }} />
      </Link>
    );
  }

  render() {
    const assignmentOrders = this.props.assignmentOrders.toJS();
    const user = this.props.user.toJS();
    const followUps = this.props.assignmentOrderFollowUps.toJS().filter(followUp => followUp.id_current_step !== null);
    const parsedFollowUps = parseFollowUps(followUps, assignmentOrders, user);

    const numPendingProducts = this.props.products.toJS().filter(item => item.state === 'pending').length || 0;
    const numPendingBundles = this.props.bundles.toJS().filter(item => item.state === 'pending').length || 0;
    const numPendingAssignments = this.props.assignments.toJS().filter(item => item.state === 'pending').length || 0;
    const numPendingAssignmentOrders = assignmentOrders.filter(order => !!order && !!order.stepName && order.usersWithAccessToCurrentStep.indexOf(this.props.user.toJS().id) !== -1).length;
    const numPendingFollowUps = parsedFollowUps.filter(fu => fu.userCanCompleteStep).length || 0;
    const buttons = [];

    if (user.permissions.indexOf(PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id) !== -1 && numPendingProducts > 0) {
      buttons.push({ text: `${this.format({ id: 'products_pending_publication' })} (${numPendingProducts})`, to: '/admin/content/products?state=pending', count: numPendingProducts });
    }
    if (user.permissions.indexOf(PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id) !== -1 && numPendingBundles > 0) {
      buttons.push({ text: `${this.format({ id: 'bundles_pending_publication' })} (${numPendingBundles})`, to: '/admin/content/bundles?state=pending', count: numPendingBundles });
    }
    if (user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1 && numPendingAssignments > 0) {
      buttons.push({ text: `${this.format({ id: 'assignments_pending_publication' })} (${numPendingAssignments})`, to: '/admin/assignments/draft?state=pending', count: numPendingAssignments });
    }
    if (numPendingAssignmentOrders > 0) {
      buttons.push({ text: `${this.format({ id: 'assignment_orders_requiring_action' })} (${numPendingAssignmentOrders})`, to: '/admin/assignments/in-progress?actionable=true', count: numPendingAssignmentOrders });
    }
    if (numPendingFollowUps > 0) {
      buttons.push({ text: `${this.format({ id: 'follow_ups_requiring_action' })} (${numPendingFollowUps})`, to: '/admin/follow-ups/in-progress?actionable=true', count: numPendingFollowUps });
    }
    const buttonJsx = buttons.map(this.getButton);
    const actionsJsx = (
      <Well>
        <h2><FormattedMessage id="actions_to_take" /></h2>
        { buttonJsx }
      </Well>
    );
    return buttons.length > 0 ? actionsJsx : null;
  }
}

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  products: state.get('v02').get('backOffice').get('products').get('all'),
  bundles: state.get('v02').get('backOffice').get('bundles').get('all'),
  assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
  // TODO: change assignmentsOrder => assignmentOrders
  // TODO: change assignmentsOrderFollowUps => assignmentOrderFollowUps
  assignmentOrders: state.get('v02').get('backOffice').get('assignmentsOrder').get('all'),
  assignmentOrderFollowUps: state.get('v02').get('backOffice').get('assignmentsOrderFollowUps').get('all'),
}));

const _components = { default: connector(Todo) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
