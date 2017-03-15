import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Modal from 'react-bootstrap/lib/Modal';
import FormControls from 'react-bootstrap/lib/FormControls/Static';
import Actions from 'flux/actions';
import TableActions from 'v02/back-office/generic-components/table-actions';
import { FormattedMessage } from 'react-intl';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  editors: state.get('editors').toJS(),
  companies: state.get('misc').get('companies').toJS(),
  users: state.get('backoffice').get('users').toJS(),
})) class Users extends Components {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modalDeleteEditor: false,
      modalViewEditor: false,
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  /*
  * Delete an editor who is waiting to be activated. Call an Action to delete them
   */
  deleteEditor = id_user =>  {
    new Actions(this.props.tenant).Users.Editor.Delete({ id_user })
    .then(action => this.props.dispatch(action))
    .catch(err => console.error(err));
  };

  /*
  * Validate an editor who is waiting to be activated. Call an Action to activate them
  */
  validate = id_user => () => {
    new Actions(this.props.tenant).Users
      .Editor.Activate({
        id_user
      })
      .then(action => {
        this.props.dispatch(action)
      }).catch(err => {
        console.error(err)
      })
  };

  editorDetails = () => {
    if (!this.state.editor) { return (<div></div>); }
    const formattedMessage = this.context.intl.formatMessage;
    const company = this.props.companies.find(company => company.id == this.state.editor.editorProfile.id_company);
    return (
      <div>
        <form className="form-horizontal">
          <FormControls label={ formattedMessage({ id: 'firstname' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={this.state.editor.name} />
          <FormControls label={ formattedMessage({ id: 'surname' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={this.state.editor.lastname} />
          <FormControls label={ formattedMessage({ id: 'email' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={this.state.editor.email} />
          <FormControls label={ formattedMessage({ id: 'telephone' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={this.state.editor.phone} />
          <hr />
          <FormControls label={ formattedMessage({ id: 'company' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={company.name} />
          <FormControls label={ formattedMessage({ id: 'siret' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={company.siret} />
          <FormControls label={ formattedMessage({ id: 'activity_fields' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={company.activity_fields.map(af => af.name).join(', ')} />
          <FormControls label={ formattedMessage({ id: 'siret' }) } labelClassName="col-xs-5" wrapperClassName="col-xs-7" value={company.platforms.map(platform => platform.name).join(', ')} />
        </form>
      </div>
    );
  };

  transform = {
    actions: (id, rowData) => {
      const formattedMessage = this.context.intl.formatMessage;
      return (
        <Row style={{ width: 190 }}>
          <TableActions>
            <TableActions.Button icon="eye-open" text={ formattedMessage({ id: 'visualize' }) } primary={true} onClick={() => this.setState({ editor: rowData, modalViewEditor: true })} />
            <TableActions.Button style={{ backgroundColor: '#009933' }} onClick={this.validate(id)} icon="ok" text={ formattedMessage({ id: 'validate' }) } />
            <TableActions.Button style={{ backgroundColor: '#a94442' }} onClick={() => this.setState({ editor: rowData, modalDeleteEditor: true })} icon="remove" text={ formattedMessage({ id: 'remove' }) } />
          </TableActions>
        </Row>
      );
    },
    company: editorProfile => this.props.companies.find(c => c.id == editorProfile.id_company).name
  };

  render() {
    const formattedMessage = this.context.intl.formatMessage;
    return (
      <div>
        <DataTable data={this.props.editors.filter( u => !u.activated ).map(editor => this.props.users.find(u => u.id == editor.id_user))} dtStyle='dark'>
          <DataColumn field="name" title={ formattedMessage({ id: 'name' }) } sortable={true} md={4} />
          <DataColumn field="email" title={ formattedMessage({ id: 'email' }) } sortable={true} md={4} searchable={true} />
          <DataColumn field="editorProfile" title={ formattedMessage({ id: 'company' }) } sortable={true} md={3} transform={this.transform.company} />
          <DataColumn field="id" title={ formattedMessage({ id: 'action' }) } md={1} transform={this.transform.actions} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
        <Modal show={this.state.modalViewEditor} onHide={() => this.setState({ editor: null })}>
          <Modal.Header><FormattedMessage id="editor_details" /></Modal.Header>
          <Modal.Body>{this.editorDetails()}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={() => { this.validate(this.state.editor.id)(); this.setState({ editor: null }); }}><FormattedMessage id="validate" /></Button>
            <Button bsStyle="primary"onClick={() => this.setState({ editor: null, modalViewEditor: false })}><FormattedMessage id="close" /></Button>
          </Modal.Footer>
        </Modal>

        <Modal show={!!this.state.modalDeleteEditor} onHide={() => this.setState({ editor: null })}>
          <Modal.Header><FormattedMessage id="delete_user" /></Modal.Header>
          <Modal.Body><FormattedMessage id="confirm_delete_user" /></Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="danger"
              onClick={() => {
                this.deleteEditor(this.state.editor.id);
                this.setState({ editor: null, modalDeleteEditor: false });
              }}
              >
            <FormattedMessage id="remove" /></Button>
            <Button bsStyle="primary" onClick={() => this.setState({ modalDeleteEditor: false })} ><FormattedMessage id="close" /></Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const _components = { default: Users };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
