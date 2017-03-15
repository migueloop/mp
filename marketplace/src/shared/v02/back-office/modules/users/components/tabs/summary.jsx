import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Button from 'react-bootstrap/lib/Button';
import Label from 'react-bootstrap/lib/Label';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import DatatableDetailCmpt from '../shared/datatable-detail-users';
import ImportIcon from 'react-icons/lib/fa/cloud-upload';
import _ from 'underscore';
import { Actions } from 'v02/flux';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user').toJS(),
  users: state.get('v02').get('backOffice').get('users').get('all').toJS(),
  // roles: state.get('backoffice').get('roles'),
  // editors: state.get('editors').toJS(),
}));


class Users extends Components {
  formatDate = (text, rowData, rowIndex) => new Date(text).toString()
  transformUserGroups = groups => {
    const groupData = groups;
    const numItemsToShow = 3;
    const firstItems = groupData.slice(0, numItemsToShow);
    const difference = groupData.length - numItemsToShow;
    const numExtra = difference < 0 ? 0 : difference;
    const groupList = firstItems.map(item => <li key={item.id}>{item.name}</li>);
    return (
      <ul className="list-groups">
        {groupList}
        <li>{numExtra > 0 && `+ ${numExtra} more.`}</li>
      </ul>
    );
  }

  static requiredActionKeys = [
    'BackOffice.Users.All',
  ];

  transformUserRole = (roleId, rowData) => {
    const roleName = rowData.role && _.isString(rowData.role.name) ? rowData.role.name : null;
    return roleName ? <Label><FormattedMessage id={roleName} /></Label> : null;
  }

  transformName = (firstName, rowData) => {
    return `${rowData.firstName} ${rowData.lastName}`;
  }

  render() {
    const [Datatable, Summary, ContentHeader] = [DatatableCmpt, DatatableDetailCmpt, ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const canCreate = true; // PERMISSIONS NEEDED HERE!!
    const createLink = (
      <Link to="/admin/users/new" className="btn btn-add pull-right" style={{ zIndex: 100 }} >
        + <FormattedMessage id="user_create" />
      </Link>
    );
    const importButton = (
      <Button className="btn btn-ico-left" style={{ marginRight: '7px' }} >
        <ImportIcon className="ico ico-left" style={{ height: '44px', fontSize: '18px' }} />
        <FormattedMessage id="import" />
      </Button>
    );
    const users = this.props.users;
    return (
      <div>
        <div className="container">
          <ContentHeader contentTitle="users_list">{importButton} { canCreate && createLink }</ContentHeader>
        </div>
        <div className="table-dynamic-row-height">
        <Datatable data={users} >
          <Datatable.DataColumn field="firstName" title={this.format({ id: 'name' })} size={2} sortable={true} searchable={true} transform={this.transformName} />
          <Datatable.DataColumn field="email" title={this.format({ id: 'email' })} size={5} sortable={true} searchable={true} />
          <Datatable.DataColumn field="groups" title={this.format({ id: 'groups' })} size={2} sortable={true} searchable={true} transform={this.transformUserGroups} />
          <Datatable.DataColumn field="id_role" title={this.format({ id: 'role' })} size={3} sortable={true} searchable={true} transform={this.transformUserRole} />
          <Datatable.SummaryColumn ><Summary { ...this.props } /></Datatable.SummaryColumn>
        </Datatable>
          </div>
      </div>
    );
  }
}

const _components = { default: connector(Users) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
