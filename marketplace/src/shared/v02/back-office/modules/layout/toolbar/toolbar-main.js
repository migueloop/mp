import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Intercom, { IntercomAPI } from 'react-intercom';
import Link from 'react-router/lib/Link';
import { Dropdown, Tooltip } from 'react-bootstrap';
import { setUser } from 'flux/actions';
import createFragment from 'react-addons-create-fragment';
import { PERMISSIONS, USERVOICE, PLUGINS, ITEM } from 'helpers/constants';
import { OverlayTrigger, Popover, Overlay } from 'react-bootstrap';
import { Navbar, Input, Nav } from 'react-bootstrap';
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl';
import { getNotifcationUrl, getNotificationSubjectName } from 'helpers/notification';
import Actions from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//  notification types
import ProdcutIcon from 'react-icons/lib/md/card-giftcard';
import AtricleIcon from 'react-icons/lib/fa/file-text-o';
import BundleIcon from 'react-icons/lib/fa/th-large';
import AssignmentIcon from 'react-icons/lib/md/new-releases';
import OrderIcon from 'react-icons/lib/md/local-offer';
// ICONS
import ChatIcon from 'react-icons/lib/md/question-answer';
import UserIcon from 'react-icons/lib/fa/user';
import BellIcon from 'react-icons/lib/fa/bell';
import MenuIcon from 'react-icons/lib/fa/bars';
import ThIcon from 'react-icons/lib/ti/th-small';
import BookIcon from 'react-icons/lib/fa/book';
import SearchIcon from 'react-icons/lib/md/search';
import CloseIcon from 'react-icons/lib/md/close';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user').toJS(),
  products: state.get('products').toJS(),
  //@mruiz Uncomment?
  //bundles: state.get('v02').get('common').get('bundles').toJS(),
  editors: state.get('editors').toJS(),
  assignments: state.get('assignments').toJS(),
  userVoice: state.get('v02').get('common').get('userVoice').toJS(),
  assignmentOrders: state.get('assignmentOrders').toJS(),
  notifications: state.get('userNotifications'),
}));

class Toolbar extends Components {
  constructor(props) {
    super(props);

    this.state = {
      numInactiveEditors: this.numInactiveEditors,
      numPendingProducts: this.numPendingProducts,
      numPendingAssignments: this.numPendingAssignments,
      numPendingAssignmentOrders: this.numPendingAssignmentOrders,
      pendingNotifications: 0,
      searchClass: '',
    };
  }

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

  onClickSearchIcon = () => {
    // this.setState({ searchClass: 'search-open' }); // <-- ORIG
    this.navigate('/admin/search');  // <------------------- TEMP
  }

  onClickSearchClose = () => {
    this.setState({ searchClass: '' });
  }

  onClickNotificationsIcon = () => {
    const userId = this.props.user.id;
    return new Actions(this.props.tenant).UserNotifications.viewAllUserNotifications(userId)
    .then(action => this.props.dispatch(action));
  }

  onClickMarkAllRead = e => {
    const userId = this.props.user.id;
    return new Actions(this.props.tenant).UserNotifications.clickAllUserNotifications(userId)
    .then(action => this.props.dispatch(action));
  }

  _getToolbarItems = user => {
    const toolbarItems = [];
    if (!user) {
      return toolbarItems;
    }

    if (user.permissions.isIntersected([PERMISSIONS.EDIT_PRODUCT.id, PERMISSIONS.EDIT_BUNDLE.id])) {

      let url = '';

      if (user.permissions.isIntersected([PERMISSIONS.EDIT_BUNDLE.id])) {
        url = '/admin/content/bundles';
      }
      if (user.permissions.isIntersected([PERMISSIONS.EDIT_PRODUCT.id])) {
        url = '/admin/content/products';
      }
      toolbarItems.push({ url, title: this.format({ id: 'products_offers' }) });
    } else {
      if (user.permissions.includes(PERMISSIONS.EDIT_PRODUCT_OWN.id)) {
        toolbarItems.push({ url: '/admin/products', title: 'Produits', selector: 'products-overview' });
      }
      if (user.permissions.isIntersected([
        PERMISSIONS.EDIT_BUNDLE_OWN.id,
        PERMISSIONS.DELETE_BUNDLE_OWN.id,
        PERMISSIONS.CREATE_BUNDLE.id,
      ])) {
        toolbarItems.push({ url: '/admin/bundle', title: 'bundle' });
      }
    }

    if (user.permissions.isIntersected([
      PERMISSIONS.ASSIGNMENTS_LIST_ALL_INFO.id,
      PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id,
    ])) {
      let url = '';
      if ((user.permissions.includes(PERMISSIONS.CREATE_ASSIGNMENT.id)) ||
      (user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT.id)) ||
      (user.permissions.includes(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id)) ||
      (user.permissions.includes(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT.id)) ||
      (user.permissions.includes(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT_OWN.id)) ||
      (user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT.id)) ||
      (user.permissions.includes(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id)) ||
      (user.permissions.includes(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT.id)) ||
      (user.permissions.includes(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT_OWN.id))) {
        url = '/admin/assignments/draft';
      } else {
        url = '/admin/assignments/in-progress';
      }
      const children = [
        { url, title: this.format({ id: 'assignment' }) },
        { url: '/admin/follow-ups/draft', title: this.format({ id: 'management' }) },
      ];
      if (user.permissions.indexOf('GERARD_BI360_CHART') !== -1 || user.permissions.indexOf('MICHEL_BI360_CHART') !== -1) {
        children.push({ url: '/admin/dashboard/1', title: this.format({ id: 'suivi' }) });
      }
      children.push({ url: '/', title: this.format({ id: 'catalog' }), hardLink: true });
      toolbarItems.push({ url, title: this.format({ id: 'mobility' }), children });
    }

    if (user.permissions.isIntersected([PERMISSIONS.READ_USERS.id, PERMISSIONS.READ_USERS_DETAILS.id])) {
      toolbarItems.push({ url: '/admin/users/summary', title: this.format({ id: 'users' }), selector: 'users-overview' });
    }

    if (user.permissions.isIntersected([PERMISSIONS.CREATE_CORNER.id, PERMISSIONS.EDIT_CORNER.id])) {
      toolbarItems.push({ url: '/admin/corners', title: 'Corners', selector: 'corner-overview' });
    } else if (user.permissions.includes(PERMISSIONS.EDIT_USER_CORNER_OWN.id)) {
      toolbarItems.push({ url: '/admin/mycorner', title: 'Mon corner' });
    }

    if (user.permissions.includes(PERMISSIONS.CAN_ACCESS_GDP.id)) {
      toolbarItems.push({ url: '/admin/gestion', title: this.format({ id: 'CAN_ACCESS_GDP' }) });
    }

    if (user.permissions.includes(PERMISSIONS.CAN_ACCESS_GDP2.id)) {
      toolbarItems.push({ url: '/admin/controle', title: this.format({ id: 'CAN_ACCESS_GDP2' }) });
    }

    if (user.permissions.includes(PERMISSIONS.CAN_ACCESS_BI360.id)) {
      toolbarItems.push({ url: '/admin/analytics', title: this.format({ id: 'CAN_ACCESS_BI360' }) });
    }

    if (user.permissions.includes(PERMISSIONS.EDIT_GENERAL_SETTINGS.id)) {
      toolbarItems.push({ url: '/admin/settings', title: 'Settings' });
    }
    return toolbarItems;
  };

// adminbar
  _getAdminItems = user => {
    const adminItems = [];

    adminItems.push({
      id: 'searchbar',
      // url: '/admin/my-apps',
      title: 'search',
      icon: SearchIcon,
      class: 'icono ico-search',
    });


    if (!user) { return adminItems; }
    adminItems.push({
      url: '/admin/user-notifications',
      title: this.format({ id: 'notifications' }),
      icon: BellIcon,
      class: 'icono  ico-notifications',
      id: 'user-notifications',
    });

    adminItems.push({
      url: '/admin/my-apps',
      title: this.format({ id: 'my-apps' }),
      icon: ThIcon,
      class: 'icono',
    });

    adminItems.push({
      url: 'http://intuiteev.knowledgeowl.com/help',
      title: this.format({ id: 'help' }),
      icon: BookIcon,
      class: 'icono',
      target: '_blank',
    });
    // Intercom chat
    if (user.permissions.includes(PERMISSIONS.USERVOICE_LIVE_CHAT.id)) {
      adminItems.push({
        url: null,
        // url: 'https://app.intercom.io/a/apps/g3t0uasb/',
        title: 'Live chat',
        icon: ChatIcon,
        class: 'icono adminbar-chat',
        plugins: [PLUGINS.INTERCOM_CHAT],
        selector: USERVOICE.CHAT.ACTIVATOR_ID,
      });
    }

    return adminItems;
  };
  /** *
   * Do the proper action to plugins activated to a logged user, such as disconnect from Intercom plugin
   * @private
   */
  _logout = () => {
    if (window.Intercom) {
      // end intercom session in order to kill user cookie
      IntercomAPI('shutdown');
    }
  };

  _lookForPlugins = (aPlugins, sKey) => (
    aPlugins.map(sPlugin => {
      switch (sPlugin) {
        case PLUGINS.INTERCOM_CHAT:
          const intercomChatUser = {
            user_id: this.props.user.id,
            email: this.props.user.email,
            name: this.props.user.name,
            user_hash: this.props.userVoice.userPrivateKey,
            widget: {
              activator: `#${USERVOICE.CHAT.ACTIVATOR_ID}`,
            },
            company: {
              id: this.props.tenant,
              name: this.props.tenant,
            },
          };
          return (<Intercom appID={this.props.userVoice.intercomAppId} { ...intercomChatUser} key={sKey} />);
        case PLUGINS.INTERCOM_BO:
          const intercomBOUser = {
            user_id: this.props.user.id,
            email: this.props.user.email,
            name: this.props.user.name,
            user_hash: this.props.userVoice.userPrivateKey,
            widget: {
              activator: `#${USERVOICE.CHAT.ACTIVATOR_ID}`,
            },
            company: {
              id: this.props.tenant,
              name: this.props.tenant,
            },
          };
          return (<Intercom appID={this.props.userVoice.intercomAppId} { ...intercomBOUser} key={sKey} />);
        default:
          return (<div></div>);
      }
    })
  );

  navItem = (menuItem, index) => {
    return (
    <li>
      { menuItem.hardLink ?
          <a href={ menuItem.url || '' } id={ menuItem.selector || ''} target={ menuItem.target } >
            { menuItem.icon ? <menuItem.icon /> : menuItem.title }
            { menuItem.plugins ? this._lookForPlugins(menuItem.plugins, index) : <div></div> }
          </a>
        : <Link to={ menuItem.url || '' } id={ menuItem.selector || ''} target={ menuItem.target } activeClassName="active">
          { menuItem.icon ? <menuItem.icon /> : menuItem.title }
          { menuItem.plugins ? this._lookForPlugins(menuItem.plugins, index) : <div></div> }
        </Link>
      }
    </li>
    );
  }

  navItemDropdown = (menuItem, index) => {
    const subItems = menuItem.children.map(subItem => { return (createFragment(this.navItem(subItem, index)));});
    return (
      <li key={index} className="dropdown dark">
        <Dropdown id="split-button-pull-right" >
          <a bsRole="toggle" style={{ cursor: 'pointer' }}>
            {menuItem.title} {<span className="caret"></span>}
          </a>
          <Dropdown.Menu>
            {subItems}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    );
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

  onChangeSearchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  }

  onKeyDownSearchQuery = e => {
    const query = this.state.searchQuery;
    if (e.keyCode === 13 && query !== '') {
      this.search(query);
    }
  }

  search = query => this.navigate(`/admin/search?query=${query}`)

  render() {
    const toolbar = this._getToolbarItems(this.props.user).map((menuItem, index) => (
      <span>{menuItem.children && this.navItemDropdown(menuItem, index) || this.navItem(menuItem, index)}</span>
    ));
    const adminbar = this._getAdminItems(this.props.user).map((adminItem, index) => {


      if (adminItem.id === 'searchbar') {
        return (
          <li key={index} id="search-toggle" className={this.state.searchClass}>
            <OverlayTrigger delayShow="300" placement="bottom" overlay={<Tooltip id="tooltip">{adminItem.title}</Tooltip>}>
              <span className={ adminItem.class || '' } onClick={ this.onClickSearchIcon } >
                { adminItem.icon ? <adminItem.icon /> : adminItem.title }
              </span>
            </OverlayTrigger>

              <Input type="text" className="search-input" placeholder={`${this.format({ id: 'search' })}...`} onChange={this.onChangeSearchQuery} value={this.state.searchQuery} onKeyDown={this.onKeyDownSearchQuery} >
                <CloseIcon className="ico-close" onClick={this.onClickSearchClose} /></Input>
          </li>
        )
      }

      if (adminItem.id === 'user-notifications') {
        const notifications = this.props.notifications.toJS();
        // const latestNotifications = notifications.slice(0, 5);
        const unviewedNotifications = notifications.filter(notification => !notification.viewed_at);
        const numUnviewedNotifications = unviewedNotifications.length;

        const unclickedNotifications = notifications.filter(notification => !notification.clicked_at);
        const numUnclickedNotifications = unclickedNotifications.length;

        const notificationsJSX = notifications.map(notification => {
          const subjectNameData = {
            products: this.props.products || [],
            bundles: this.props.bundles || [],
            assignments: this.props.assignments || [],
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
          return (
                  <div onClick={this.onClickNotification(notification)} className={className}>
                    <Row>
                      <Col xs={2}>
                       <Icon className="ico" />
                      </Col>
                      <Col xs={10}>
                        {this.format({ id: type || 'missing_type' })} #{subjectId} {name}
                        <span className="notification-date">
                            <FormattedRelative value={ createdAt } />
                        </span>
                      </Col>
                    </Row>
                  </div>
                );
        });
        const popoverClick = (
          <Popover id="notification-popover" ref="popover" className="notifications-popover" title={this.format({ id: 'notifications' })}>
          <div className="popover-header">
            <Row>
              <Col xs={6}>
                <span>{numUnclickedNotifications > 0 && `${numUnclickedNotifications} "unattended" notifications`}</span>
              </Col>
              <Col xs={6}>
                <span className="clickable" onClick={this.onClickMarkAllRead} ><FormattedMessage id="mark_all_read" /></span>
              </Col>
            </Row>
          </div>
            <div className="notification-list">
              {notificationsJSX}
            </div>
            <div className="popover-header"><Link to="/admin/user-notifications" onClick={ () => this.refs.popover.hide() } ><FormattedMessage id="view_all_notifications" /></Link></div>
          </Popover>
        );
        return (
        <li key={index}>
          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClick}>
            <span className="icono ico-notifications" onClick={ this.onClickNotificationsIcon } >
              { adminItem.icon ? <adminItem.icon /> : adminItem.title }
              { numUnviewedNotifications > 0 &&
              <span className="badge top-badge">{ numUnviewedNotifications }</span> }
            </span>
          </OverlayTrigger>
        </li>
        );
      }

      if (!adminItem.title) {
        return (
        <li key={index}>
          <Link to={ adminItem.url || '' } id={ adminItem.selector || ''} target={ adminItem.target } className={ adminItem.class || '' } >
            { adminItem.icon ? <adminItem.icon /> : adminItem.title }
          </Link>
          { adminItem.plugins ? this._lookForPlugins(adminItem.plugins, index) : <div></div> }
        </li>
        );
      }

      return (
      <li key={index}>
        <OverlayTrigger delayShow="300" placement="bottom" overlay={<Tooltip id="tooltip">{adminItem.title}</Tooltip>}>
          <Link to={ adminItem.url || '' } id={ adminItem.selector || ''} target={ adminItem.target } className={ adminItem.class || '' } >
            { adminItem.icon ? <adminItem.icon /> : adminItem.title }
          </Link>
        </OverlayTrigger>
        { adminItem.plugins ? this._lookForPlugins(adminItem.plugins, index) : <div></div> }
      </li>
      );
    }

  );
    this.props.user.avatar = true;
    return (
    <Navbar className="mp-toolbar">
        <Navbar.Header>
          <Navbar.Toggle>
            <MenuIcon />
          </Navbar.Toggle>
          <ul className="links links-admin" id="adminbar-mobile">
            <li className="dropdown connected-user">
              <OverlayTrigger delayShow="300" placement="bottom" overlay={<Tooltip id="tooltip">Logged in: {this.props.user ? this.props.user.display_name || this.props.user.name || this.props.user.email : ''}</Tooltip>}>
                <Dropdown pullRight={true} id="split-button-pull-right" onSelect={this.onSelectFromDropDown}>
                  <a bsRole="toggle" className={this.props.user.avatar ? 'avatar' : 'icono'} style={{ cursor: 'pointer' }}>
                    {this.props.user.avatar ? <img src="/public/images/placeholders/avatar.png" width="48" height="48" /> : <UserIcon />}
                  </a>
                  <Dropdown.Menu className="super-colors">
                     { /* <li bsRole="menuitem"><Link to="/admin/profile"><FormattedMessage id="view_profile" /></Link></li> */ }
                    <li bsRole="menuitem" onClick={ this._logout }><a id="logoutButton" href="/logout"><FormattedMessage id="logout" /></a></li>
                  </Dropdown.Menu>
                </Dropdown>
              </OverlayTrigger>
            </li>
            {adminbar}
          </ul>
        </Navbar.Header>

        <Navbar.Collapse>
          <ul className="links links-admin" id="adminbar-desktop">

            <li className="dropdown connected-user">
              <OverlayTrigger delayShow="300" placement="bottom" overlay={<Tooltip id="tooltip">Logged in: {this.props.user ? this.props.user.display_name || this.props.user.name || this.props.user.email : ''}</Tooltip>}>
                <Dropdown pullRight={true} id="split-button-pull-right" onSelect={this.onSelectFromDropDown}>
                  <a bsRole="toggle" className={this.props.user.avatar ? 'avatar' : 'icono'} style={{ cursor: 'pointer' }}>
                    {this.props.user.avatar ? <img src="/public/images/placeholders/avatar.png" width="48" height="48" /> : <UserIcon />}
                  </a>
                  <Dropdown.Menu className="super-colors">
                    { /* <li bsRole="menuitem"><Link to="/admin/profile"><FormattedMessage id="view_profile" /></Link></li> */ }
                    <li bsRole="menuitem" onClick={ this._logout }><a id="logoutButton" href="/logout"><FormattedMessage id="logout" /></a>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </OverlayTrigger>
            </li>
            {adminbar}
          </ul>
          <h1>TEST</h1>
          <Nav className={`links links-main ${this.state.searchClass}`}>
            <li><Link to="/admin/"><i className="glyphicon glyphicon-home" /></Link></li>
            {toolbar}
          </Nav>
        </Navbar.Collapse>

    </Navbar>

    );
  }
}

const _components = { default: connector(Toolbar) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
