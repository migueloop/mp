import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
}));

class Dashboard extends Components {
  render() {
    let iframeUrl = null;
    const userRoleId = this.props.user.toJS().role.id;
    if (userRoleId === 22 || userRoleId === 23 || userRoleId === 24 || userRoleId === 25) {
      iframeUrl = 'https://sncf-bi360.digitaldimension.services/Dashboard?DashboardId=1';
    }
    return (
      <div className="container">
        <div className="page-body">
          {iframeUrl && <iframe style={{ width: '100%', minHeight: '500px' }} src={iframeUrl}></iframe>}
        </div>
      </div>
    );
  }
}

export default connector(Dashboard);
