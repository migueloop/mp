import React from 'react';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';

class MyApps extends Components {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <Menu align="right">
            <Link to="/admin/my-apps" activeClassName="active" >{this.format({ id: 'my-apps' })}</Link>
          </Menu>
        </div>
      </div>
    );
  }
}

export default MyApps;
