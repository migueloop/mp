import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import Actions from 'flux/actions';
import _ from 'underscore';
import { PERMISSIONS } from 'helpers/constants';
import { FormattedMessage } from 'react-intl';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  corners: state.get('corners').toJS(),
  users: state.get('backoffice').get('users').toJS(),
  user: state.get('v02').get('common').get('user').toJS(),
})) class Thematics extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    console.log('corners', props.corners);
    this.state = {
      showDeleteConfirmation: false,
      showDeleteCornerWithProductsConfirmation: false,
    };
    this.actions = new Actions(this.props.tenant);
  }
  hideDeleteConfirmation = () => this.setState({ showDeleteConfirmation: false, showDeleteCornerWithProductsConfirmation: false });

  showDeleteConfirmation = corner => () => {
    this._corner = corner;
    console.log('corner', corner);
    if (corner.products.length > 0) {
      return this.setState({ showDeleteCornerWithProductsConfirmation: true });
    }
    this.setState({ showDeleteConfirmation: true });
  };

  createCorner = () => {
    this.actions.Corners.Create({ name: 'My new corner' })
    .then(action => {
      this.props.dispatch(action);
      this.navigate(`/admin/corners/edit/${action.corner.id}`);
    })
    .catch(() => this.props.notification.add({ message: this.format({ id: 'error_creating_corner' }), level: 'error' }));
  };

  deleteCorner = () => {
    const id = this._corner.id;
    delete this._corner;
    this.hideDeleteConfirmation();
    this.actions.Corners.Delete(id)
    .then(action => this.props.dispatch(action))
    .catch(() => this.props.notification.add({ message: this.format({ id: 'error_deleting_corner' }), level: 'error' }));
  };

  transform = {
    keywords: keywords => this.transform.crop(keywords.map(k => k.name).join(', ')),
    lookUser: (id, rowData) => rowData.email || this.props.users.find(u => u.id === id) ? this.props.users.find(u => u.id === id).email : '',
    showDate: datetime => datetime ? new Date(datetime).toString() : 'N/A',
    crop: text => text.length > 60 ? `${text.substr(0, 57)}...` : text,
    actionButtons: (alias, rowData) => {
      const [TableActions] = [TableActionsCmtp].map(cmpt => cmpt.get(this.props.tenant));
      const buttons = [];
      buttons.push(<TableActions.Button onClick={ () => { location.href = `/domain/${alias}`; } } type="view" />);
      if (_.contains(this.props.user.permissions, PERMISSIONS.EDIT_CORNER.id)) {
        buttons.push(<TableActions.Button onClick={this.link(`/admin/corners/edit/${rowData.id}`)} type="edit" />);
      }
      if (_.contains(this.props.user.permissions, PERMISSIONS.DELETE_CORNER.id)) {
        buttons.push(<TableActions.Button onClick={this.showDeleteConfirmation(rowData)} type="remove" />);
      }
      return <TableActions>{buttons}</TableActions>;
    },

  };

  render() {
    const showDeleteConfirmation = this.state.showDeleteConfirmation;
    const showDeleteCornerWithProductsConfirmation = this.state.showDeleteCornerWithProductsConfirmation;
    console.log('showDeleteConfirmation', showDeleteConfirmation);
    const [ConfirmationPopup] = [ConfirmationPopupCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <div>
        <ContentHeader contentTitle="corners" >
          <Button onClick={this.createCorner} className="btn-add" >
            + <FormattedMessage id="create_corner" />
          </Button>
        </ContentHeader>
        <DataTable data={this.props.corners} dtStyle="dark">
          <DataColumn field="name" title={this.format({ id: 'name' })} sortable={true} md={2} searchable={true} />
          <DataColumn field="description" title={this.format({ id: 'description' })} md={2} searchable={true} transform={this.transform.crop} />
          <DataColumn field="keywords" title={this.format({ id: 'keywords' })} md={3} transform={this.transform.keywords} />
          <DataColumn field="created_by" title={this.format({ id: 'creator' })} md={2} transform={this.transform.lookUser} />
          <DataColumn field="last_update" title={this.format({ id: 'last_updated_at' })} md={2} transform={this.transform.showDate} />
          <DataColumn field="alias" title={this.format({ id: 'actions' })} xs={1} transform={this.transform.actionButtons} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
        <ConfirmationPopup show={showDeleteConfirmation} onHide={this.hideDeleteConfirmation} onAction={this.deleteCorner} actionStyle="danger" action="Delete" title={this.format({ id: 'confirmation' })} >
          <div><FormattedMessage id="confirm_delete_corner" /></div>
        </ConfirmationPopup>
        <ConfirmationPopup show={showDeleteCornerWithProductsConfirmation} onHide={this.hideDeleteConfirmation} onAction={this.deleteCorner} actionStyle="danger" action="Delete" title={this.format({ id: 'confirmation' })} >
          <div><FormattedMessage id="confirm_delete_corner_with_products" /></div>
        </ConfirmationPopup>
      </div>
    );
  }
}

const _components = { default: Thematics };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
