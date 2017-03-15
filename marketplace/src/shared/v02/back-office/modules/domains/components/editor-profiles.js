import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  users: state.get('backoffice').get('users').toJS(),
})) class EditorProfiles extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  transform = {
    lookUser: (id, rowData) => {
      return id ? (rowData.email || this.props.users.find(u => u.id === id).email) : 'N/A';
    },
    showDate: datetime => datetime ? new Date(datetime).toString() : 'N/A',
    crop: text => text && text.length > 60 ? `${text.substr(0, 57)}...` : text,
    actionButtons: (data, rowData) => {
      return (
        <TableActions>
          <TableActions.Button onClick={this.link(`/admin/corners/edit/editor/${rowData.id_user}`)} type="edit" />
        </TableActions>
      );
    },
  };

  render() {
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <div>
        <ContentHeader contentTitle="editors_domains" />
        <DataTable data={this.props.users.filter(u => u.id_role === 2).map(u => u.editorProfile)} dtStyle="dark">
          <DataColumn field="title" title={ this.format({ id: 'name' }) } sortable={true} md={3} searchable={true} />
          <DataColumn field="description" title={ this.format({ id: 'description' }) } md={4} searchable={true} transform={this.transform.crop} />
          <DataColumn field="validated_by" title={ this.format({ id: 'validated' }) } md={2} transform={this.transform.lookUser} />
          <DataColumn field="last_update" title={ this.format({ id: 'last_updated_at' }) } md={2} transform={this.transform.showDate} />
          <DataColumn field="alias" title={ this.format({ id: 'actions' }) } xs={1} transform={this.transform.actionButtons} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
      </div>
    );
  }
}

const _components = { default: EditorProfiles };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
