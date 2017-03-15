import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';
import { PERMISSIONS } from 'helpers/constants';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import { Link } from 'react-router';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
}));

class Assignments extends Components {

  static requiredActionKeys = [
    'BackOffice.Assignments.fetch',
  ];

  getMenu = () => {
    const menuItems = [];
    if (this.props.user.get('permissions').toJS().includes(PERMISSIONS.CREATE_ASSIGNMENT.id)) {
      menuItems.push({ url: '/admin/assignments/draft', title: this.format({ id: 'awaiting_validation' }) });
    }
    menuItems.push({ url: '/admin/assignments/in-progress', title: this.format({ id: 'delivery_in_progress' }), extraInfo: this.format({ id: 'action_can_be_required' }) });
    menuItems.push({ url: '/admin/assignments/done', title: this.format({ id: 'done' }) });
    return menuItems.map(data => {
      let extraInfo = (<span></span>);
      if (data.extraInfo) {
        extraInfo = (
          <span
            style={{ position: 'absolute', right: '0', bottom: '20' }}
            className="hidden-sm-down" >
              <OverlayTrigger placement="right" overlay={ <Tooltip id="tooltip">{data.extraInfo}</Tooltip> }>
                <Glyphicon glyph="info-sign" />
              </OverlayTrigger>
          </span>);
      }
      return (<Link key={data.id} to={data.url} activeClassName="active" id={data.id} >{data.title}{extraInfo}</Link>);
    });
  }

  getHeader = () => {
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const canCreate = this.props.user.toJS().permissions.indexOf(PERMISSIONS.CREATE_ASSIGNMENT.id) !== -1;
    const createLink = (
      <Link to="/admin/assignment/new" className="btn btn-add pull-right" style={{ zIndex: 100 }} >
        + <FormattedMessage id="assignment_create" />
      </Link>
    );
    return (
      <ContentHeader contentTitle="assignments">{ canCreate && createLink }</ContentHeader>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <Menu>{this.getMenu()}</Menu>
          <div className="container">
            {this.getHeader()}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const _components = {
  default: connector(Assignments),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
