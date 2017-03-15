import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';
import { FormattedMessage } from 'react-intl';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import TableActions from 'v02/back-office/generic-components/table-actions';
import Actions from 'flux/actions';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  roles: state.get('backoffice').get('roles'),
  users: state.get('backoffice').get('users'),
}));

class RoleList extends Components {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      create: {
        cloneRole: null,
        name: '',
      },
    };
  }
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  transform = {
    actions: (id, rowData, index) => {
      const formattedMessage = this.context.intl.formatMessage;
      return (
        <TableActions>
          <TableActions.Button
            type="edit"
            onClick={() => {this.navigate(`/admin/users/acl/edit/${id}/ACL`);}}
            />
        </TableActions>
      );
    },
    total: data => (
      <div style={{ textAlign: 'center' }}>Total: {data.length}</div>
    ),
  }

  create = () => {
    if (!this.state.create.name) {
      return;
    }
    new Actions(this.props.tenant).BackOffice.Acl
      .create(this.state.create)
      .then(action => {
        this.props.dispatch(action);
        setTimeout(() => {
          this.navigate(`/admin/users/acl/edit/${action.payload.id}/ACL`);
        }, 10);
      });
  }

  render() {
    const roles = this.props.roles.toJS().map(role => ({
      ...role,
      users: this.props.users.toJS().filter(user => user.id_role === role.id),
    }));
    const formattedMessage = this.context.intl.formatMessage;
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div>

        <ContentHeader contentTitle="Users: Role Management" >
          <Button onClick={() => this.setState({ showModal: true })} className="btn-add" >
            + <FormattedMessage id="create_role" />
          </Button>
        </ContentHeader>

        <DataTable data={roles} dtStyle="dark" >
          <DataColumn field="name" title={ formattedMessage({ id: 'name' }) } sortable={true} md={4} searchable={true} />
          <DataColumn field="permissions" title={ formattedMessage({ id: 'permissions' }) } md={3} transform={this.transform.total} />
          <DataColumn field="users" title={ formattedMessage({ id: 'users' }) } md={3} transform={this.transform.total} />
          <DataColumn field="id" title={ formattedMessage({ id: 'action' }) } md={2} transform={this.transform.actions} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header close>
            <FormattedMessage id="new_role_modal_title" />
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: '80%', margin: '10px auto' }}>
              <Row>
                <Col md={6} mdOffset={3}>
                  <label>
                    <FormattedMessage id="role_name" />
                  </label>
                  <Input type="text" value={this.state.create.name}
                    onChange={({ target: { value } }) => this.setState({ create: { ...this.state.create, name: value } })}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={6} mdOffset={3}>
                  <label>
                    <FormattedMessage id="clone_role" />
                  </label>
                  <select style={{ display: 'block', width: '100%' }} value={this.state.create.cloneRole}
                    onChange={({ target: { value } }) => this.setState({ create: { ...this.state.create, cloneRole: value } })}
                    >
                      <option>None</option>
                      {roles.map(role => (
                        <option key={role.id} value={role.id}>
                           {role.name}
                        </option>
                      ))}
                  </select>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.create} >
              <FormattedMessage id="next" />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const _components = {
  default: connector(RoleList),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
