import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import HeaderCompt from './header';
import FooterCompt from './footer';
import ToolbarCompt from './toolbar';
import Actions from 'flux/actions';
import NotificationSystem from 'react-notification-system';
import { ITEM } from 'helpers/constants';

class LayoutBO extends Components {

  componentDidMount() {
    const currentUserId = this.props.user.id;
    const actions = new Actions(this.props.tenant);
    if (this.props.assignments.length > 0) {
      let assignmentOrders = [];
      actions.AssignmentOrders.All
      .then(action => this.props.dispatch(action))
      .then(action => {
        assignmentOrders = action.assignmentOrders;
        console.log('action', action);
        return Promise.resolve(action);
      })
      .then(action => actions.AssignmentOrders.getExternalTimelines(action.assignmentOrders))
      .then(action => this.props.dispatch(action))
      .then(() => actions.UserNotifications.createAssignmentOrderActionNotifications({ assignmentOrders, currentUserId }))
      .then(action => this.props.dispatch(action));
    }
    actions.Notification.set(this.refs.notificationSystem).then(action => this.props.dispatch(action));
  }


  render() {
    const self = this;
    const [Header, Toolbar, Footer] = [HeaderCompt, ToolbarCompt, FooterCompt].map(element => element.get(self.props.tenant));

    return (
      <div className="page-admin">
        <Header ><Toolbar location={this.props.location} /></Header>
        <main className="mp-main">{this.props.children}</main>
        <Footer />
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}
function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user').toJS(),
    products: state.get('products').toJS(),
    assignments: state.get('assignments').toJS().filter(a => a.state === ITEM.STATE.KEY.VALIDATED),
  };
}
const _components = { default: connect(stateToProps)(LayoutBO) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
