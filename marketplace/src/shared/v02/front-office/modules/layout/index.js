import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import ActionsOldREMOVETHIS from 'flux/actions';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import ToolbarCmpt from './toolbar';
import HeaderCmpt from './header';
import FooterCmpt from './footer';
import CookieAcceptance from 'v02/front-office/modules/cookies/components/cookie-acceptance';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  acceptedCookie: state.get('v02').get('frontOffice').get('cookie').get('accepted'),
}));

class FrontLayout extends Components {
  static requiredActionKeys = [
    // 'FrontOffice.Domains.fetch',
  ];

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  // componentDidMount() {
  //   super.componentDidMount();
  //   new ActionsOldREMOVETHIS(this.props.tenant).Notification.set(this.refs.notificationSystem)
  //   .then(action => this.props.dispatch(action));
  // }


  render() {
    // Tenant specific
    const tenant = this.props.tenant;
    const [Header, Toolbar, Footer] =
      [HeaderCmpt, ToolbarCmpt, FooterCmpt].map(Component => Component.get(tenant));
    return (
      <div className="front">
        {/* Header */}
        <Header>
          <Toolbar />
        </Header>
        <main className="mp-main">
          {this.props.children}
        </main>
        {/* Footer */}
        <Footer />
        {/* <NotificationSystem ref="notificationSystem" /> */}
        <CookieAcceptance { ...this.props } />
      </div>
    );
  }
}


const _components = {
  default: connector(FrontLayout),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
