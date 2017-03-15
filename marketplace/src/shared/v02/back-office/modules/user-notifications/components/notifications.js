import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Actions from 'flux/actions';
import { getNotifcationUrl, getNotificationSubjectName } from 'helpers/notification';
import { FormattedDate, FormattedRelative } from 'react-intl';
import moment from 'moment';
// ICONS
import BellIcon from 'react-icons/lib/fa/bell';
//  notification types
import ProdcutIcon from 'react-icons/lib/md/card-giftcard';
import BundleIcon from 'react-icons/lib/fa/th-large';
import AssignmentIcon from 'react-icons/lib/md/new-releases';
import OrderIcon from 'react-icons/lib/md/local-offer';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';

class UserNotifications extends Components {

  onClickNotification = notification => () => {
    let promise;
    if (notification.clicked_at) {
      promise = Promise.resolve(notification);
    } else {
      promise = new Actions(this.props.tenant).UserNotifications.click(notification.id)
      .then(action => this.props.dispatch(action))
      .then(action => Promise.resolve(action.payload));
    }
    return promise
    .then(notificationData => this.navigate(getNotifcationUrl(notificationData)));
  }

  getIconType = key => {
    switch (key) {
      case 'notification_publication_request_product':
        return ProdcutIcon;
      case 'notification_publication_request_bundle':
        return BundleIcon;
      case 'notification_publication_request_assignment':
        return AssignmentIcon;
      case 'notification_timeline_action_assignment_order':
        return OrderIcon;
      default:
        return BellIcon;
    }
  };

  render() {
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const notifications = this.props.notifications.toJS();
    const notificationsJSX = notifications.map(notification => {
      const subjectNameData = {
        products: this.props.products.toJS() || [],
        bundles: this.props.bundles.toJS() || [],
        assignments: this.props.assignments.toJS() || [],
        assignmentOrders: this.props.assignmentOrders || [],
        notification,
      };
      const name = getNotificationSubjectName(subjectNameData);
      const id = notification.id;
      const type = notification.type;
      const subjectId = notification.id_subject;
      const createdAt = notification.created_at;
      const viewedAt = notification.viewed_at;
      const clickedAt = notification.clicked_at;
      const className = `user-notification ${clickedAt ? 'clicked' : ''}`;
      const Icon = this.getIconType(type);

      const getOrderId = refId => {
        const assignmentOrders = this.props.assignmentOrders.toJS();
        const assignmentMatch = assignmentOrders.find(a => parseInt(a.id, 10) === refId);
        console.log('assignmentOrders', assignmentOrders);
        return assignmentMatch && assignmentMatch.id_po_system;
      };

      return (
        <div onClick={this.onClickNotification(notification)} className={className}>
          <Row>
            <Col xs={2}>
              <span className="notification-date">
                <FormattedRelative value={ createdAt } />
              </span>
              <span className="notification-date">
                <FormattedDate value={ moment(createdAt).format('YYYY-MM-DD') } day="numeric" month="numeric" year="numeric" />&nbsp;-&nbsp;
                { moment(createdAt).format('hh:mm') }
              </span>
            </Col>
            <Col xs={1}>
             <Icon className="ico" />
            </Col>
            <Col xs={5}>
              {id} {this.format({ id: type })}
            </Col>
            <Col xs={4}>
                { name || getOrderId(subjectId) && `ref: ${getOrderId(subjectId)}`}
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <div className="container">
        <ContentHeader contentTitle="notification_history" className="padding-bottom" />
        <Row className="padding-top" >{notificationsJSX}</Row>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    products: state.get('products'),
    bundles: state.get('bundles'),
    assignments: state.get('assignments'),
    user: state.get('v02').get('common').get('user'),
    notifications: state.get('userNotifications'),
    assignmentOrders: state.get('assignmentOrders'),
  };
}


const _components = { default: connect(stateToProps)(UserNotifications) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
