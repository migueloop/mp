import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Actions } from 'v02/flux';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import Label from 'react-bootstrap/lib/Label';
import moment from 'moment';

import { ITEM, PERMISSIONS, USER } from 'helpers/constants';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import ModalBundleCmpt from 'v02/back-office/modules/content/modals/view-bundle-modal';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';

// import { PublishButtonCmpt } from 'components/back-office/buttons/buttons';

class BundleList extends Components {

  constructor(props) {
    super(props);
    this.state = {
      deleteItem: null,
      itemToView: {},
      modalConfirmEdit: false,
      modalDelete: false,
      modalViewItem: false,
      modalUnpublish: false,
      unpublishItem: null,
    };
    this.itemActions = new Actions(this.props.tenant).BackOffice.Bundles;
  }
  crop = text => text.length > 60 ? `${text.substr(0, 60)}...` : text;

  /*
   * @param tenant
   * @param dispatch
   * @param params
   * @param query
   * @returns {Promise|Promise.<T>}
   */
  static fetchData(tenant, dispatch, params = {}, query = {}) {
    // const Action = new Actions(tenant);
    // return Promise.all([
    //   // Insert here the Action to fetch the needed data
    // ])
    // .then(actions => Promise.resolve(actions))
    // .then(action => Action.Seo.set({ type: '', data: {} }))
    // .then(action => Promise.resolve(dispatch(action)));
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    bundles: React.PropTypes.array.isRequired,
    deleteItem: React.PropTypes.func,
    requestPublication: React.PropTypes.func,
    items: React.PropTypes.array.isRequired,
    itemType: React.PropTypes.string.isRequired,
    publish: React.PropTypes.func,
    unpublish: React.PropTypes.func,
    cancelPublicationRequest: React.PropTypes.func,
  };

  onClickDelete = rowData => () => this.setState({ deleteItem: rowData, modalDelete: true });
  onClickUnpublish = rowData => () => this.setState({ unpublishItem: rowData, modalUnpublish: true });
  onClickEdit = rowData => () => this.setState({ itemToView: rowData, modalConfirmEdit: true });
  onClickView = rowData => () => this.setState({ itemToView: rowData, modalViewItem: true });
  onClickRequestPublication = rowData => () => this.requestPublication(rowData);
  onClickValidate = rowData => () => this.publish(rowData);
  onClickPublish = rowData => () => this.publish(rowData);
  onClickCancelPublicationrequest = rowData => () => this.cancelPublicationRequest(rowData)

  transform = {
    keywords: keywords => this.transform.crop(keywords.map(k => k.name).join(', ')),
    getUserEmail: id => {
      const userMatch = this.props.users.find(u => u.id === id);
      return userMatch && userMatch.email || '';
    },
    showDate: date => date ? moment(date).format('D MMM. YYYY').toLowerCase() : 'N/A',
    crop: this.crop,
    state: state => <div className="text-center"><Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={'state'} /></Label></div>,
    actionButtons: (alias, rowData) => {
      // BUTTONS
      const btnView = <TableActions.Button type="view" onClick={this.onClickView(rowData)} />;
      const btnEdit = <TableActions.Button type="edit" onClick={this.onClickEdit(rowData)} />;
      const btnValidate = <TableActions.Button type="validate" onClick={this.onClickValidate(rowData)} />;
      const btnRequestPublication = <TableActions.Button type="request-publication" onClick={this.onClickRequestPublication(rowData)} />;
      const btnPublish = <TableActions.Button type="publish" onClick={this.onClickPublish(rowData)} />;
      const btnUnpublish = <TableActions.Button type="unpublish" onClick={this.onClickUnpublish(rowData)} />;
      const btnDelete = <TableActions.Button type="remove" onClick={this.onClickDelete(rowData)} />;
      const btnCancelPublicationrequest = <TableActions.Button type="withdraw" onClick={this.onClickCancelPublicationrequest(rowData)} />;

      const isItemOwner = rowData.created_by_id === this.props.user.toJS().id;
      const isNotificationPage = this.props.isNotificationPage;
      // PERMISSIONS
      const canUnpublishAnyItem = this.hasPermission([PERMISSIONS.UNPUBLISH_BUNDLE.id]);
      const canUnpublishOwnItem = this.hasPermission([PERMISSIONS.UNPUBLISH_BUNDLE_OWN.id]);
      const canUnpublish = canUnpublishAnyItem || (canUnpublishOwnItem && isItemOwner);

      const canValidate = this.hasPermission([PERMISSIONS.VALIDATE_PUBLICATION_BUNDLE.id]);

      const canEditAnyItem = this.hasPermission([PERMISSIONS.EDIT_BUNDLE.id]);
      const canEditOwnItem = this.hasPermission([PERMISSIONS.EDIT_BUNDLE_OWN.id]);
      const canEdit = canEditAnyItem || (canEditOwnItem && isItemOwner);

      const canDeleteAnyItem = this.hasPermission([PERMISSIONS.DELETE_BUNDLE.id]);
      const canDeleteOwnItem = this.hasPermission([PERMISSIONS.DELETE_BUNDLE_OWN.id]);
      const canDelete = canDeleteAnyItem || (canDeleteOwnItem && isItemOwner);

      const canPublishAnyItem = this.hasPermission([PERMISSIONS.PUBLISH_BUNDLE.id]);
      const canPublishOwnItem = this.hasPermission([PERMISSIONS.PUBLISH_BUNDLE_OWN.id]);
      const canPublish = canPublishAnyItem || (canPublishOwnItem && isItemOwner);

      const canRequestPublicationAnyItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_BUNDLE.id]);
      const canRequestPublicationOwnItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_BUNDLE_OWN.id]);
      const canRequestPublication = canRequestPublicationAnyItem || (canRequestPublicationOwnItem && isItemOwner);

      // ADD BUTTONS BASED ON PERMISSIONS
      const actions = [btnView];
      if (canEdit && !isNotificationPage) {
        actions.push(btnEdit);
      }
      // set action button demand publication for an Author and the validate (publish) only for admins
      if (canValidate && rowData.state === ITEM.STATE.KEY.PENDING) {
        actions.push(btnValidate);
      }

      if (canRequestPublication && rowData.state === ITEM.STATE.KEY.DRAFT && !isNotificationPage) {
        actions.push(btnRequestPublication);
      }

      if (canPublish && rowData.state === ITEM.STATE.KEY.DRAFT && !isNotificationPage) {
        actions.push(btnPublish);
      }

      if (canUnpublish && rowData.state === ITEM.STATE.KEY.PUBLISHED && !isNotificationPage) {
        actions.push(btnUnpublish);
      }

      if (canDelete && rowData.state !== ITEM.STATE.KEY.PUBLISHED && !isNotificationPage) {
        actions.push(btnDelete);
      }

      if (canRequestPublication && rowData.state === ITEM.STATE.KEY.PENDING && !isNotificationPage) {
        actions.push(btnCancelPublicationrequest);
      }
      return <div><TableActions>{actions}</TableActions></div>;
    },
  };

  /*
   * Return view with table populated if there are items, if not, a div with a
   * message indicating that there are no items
   * @returns {object} * HTML with the table populated of items
   */
  getTable = () => {
    const filteredBundles = this.props.isNotificationPage ? this.props.bundles.filter(p => p.state === ITEM.STATE.KEY.PENDING) : this.props.bundles.filter(p => p.state !== ITEM.STATE.KEY.DELETED);
    const selectStatus = {
      options: [
        { value: ITEM.STATE.KEY.DRAFT, title: this.format({ id: 'draft' }) },
        { value: ITEM.STATE.KEY.PENDING, title: this.format({ id: 'pending' }) },
        { value: ITEM.STATE.KEY.VALIDATED, title: this.format({ id: 'validated' }) },
        { value: ITEM.STATE.KEY.PUBLISHED, title: this.format({ id: 'published' }) },
      ],
    };
    if (filteredBundles.length > 0) {
      if (this.props.isNotificationPage) {
        return (
          <DataTable data={filteredBundles} dtStyle="dark">
            <DataColumn field="title" title={ this.format({ id: 'name' })} sortable={true} md={2} searchable={true} />
            <DataColumn field="created_by_id" title={ this.format({ id: 'created_by' })} md={1} transform={this.transform.getUserEmail} />
            <DataColumn field="last_update" title={ this.format({ id: 'modified_at' })} md={2} transform={this.transform.showDate} />
            <DataColumn field="alias" title={ this.format({ id: 'action' })} md={1} transform={this.transform.actionButtons} />
            <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
          </DataTable>
        );
      }
      return (
        <DataTable data={filteredBundles} dtStyle="dark">
          <DataColumn field="title" title={ this.format({ id: 'name' })} sortable={true} md={2} searchable={true} />
          <DataColumn field="keywords" title={ this.format({ id: 'keyword_label' })} md={2} transform={this.transform.keywords} />
          <DataColumn field="created_by_id" title={ this.format({ id: 'created_by' })} md={2} transform={this.transform.getUserEmail} />
          <DataColumn field="last_update" title={ this.format({ id: 'modified_at' })} md={1} transform={this.transform.showDate} />
          <DataColumn field="state" title={ this.format({ id: 'state' })} sortable={true} md={1} transform={this.transform.state} searchable={true} searchOptions={selectStatus} />
          <DataColumn field="alias" title={ this.format({ id: 'action' })} md={1} transform={this.transform.actionButtons} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
      );
    }
    return <div><FormattedMessage id="no_bundles_found" /></div>;
  };

  // ACTIONS

  /*
   * Create a new bundle calling the API/ACTION Create with at least the 3 required
   * fields (title, created_by and state DRAFT).
   * The bundle is created in DB and then we obtain an ID. This is because we don't
   * have a button to save, and we save to DB every time
   * we change any field. When it's created, we navigate to the URL of the new bundle to edit and add information.
   *
   */
  create = () => {
  console.log(this.props.loggedUser.id);
    this.props.dispatch(this.itemActions.Create({ title: 'Donnez un titre à votre package', createdBy: this.props.loggedUser.id, stateId: ITEM.STATE.DRAFT }))
    .then(() => {
      console.log(this.props.bundle.id);
      this.navigate(`/admin/bundle/edit/${this.props.bundle.id}/summary`);
    });
  };

  /*
   * Mark as pending an Item awaiting to be published by an admin. Call parent function to set PENDING the item
   */
  requestPublication = ({ id }) => {
    return this.itemActions.DemandPublication(id)
    .then(action => this.props.dispatch(action))
    .then(() => new Actions(this.props.tenant).UserNotifications.createBundlePublicationRequestNotification({ users: this.props.users.toJS(), currentUserId: this.props.user.toJS().id, bundleId: id }))
    .then(action => this.props.dispatch(action))
    .then(() => this.resetItemActions());
  };

  cancelPublicationRequest = ({ id }) => {
    return this.itemActions.Unpublish(id)
    .then(action => this.props.dispatch(action));
  };

  /*
   * Mark as published an Item. Call parent function to set PUBLISHED the item
   */
  publish = rowData => {
    return this.itemActions.Publish(rowData.id)
    .then(action => this.props.dispatch(action))
    .then(() => this.resetItemActions());
  };

  unpublish = () => {
    const { id } = this.state.unpublishItem;
    return this.itemActions.Unpublish(id)
    .then(action => this.props.dispatch(action))
    .then(() => {
      const oTemp = Object.assign({}, this.state.unpublishItem);
      oTemp.state = ITEM.STATE.KEY.DRAFT;
      this.setState({ unpublishItem: oTemp });
      this.resetItemActions();
    })
    .then(() => this.setState({ modalUnpublish: false }));
  };

  /*
   * Mark as deleted an Item. Call parent function to set DELETED the item
   */
  delete = () => {
    return this.itemActions.Delete(this.state.deleteItem.id)
    .then(action => this.props.dispatch(action))
    .then(() => this.resetItemActions())
    .then(() => this.setState({ modalDelete: false }));
  };

  /**
   * Redirect to the item to edit it and close the confirm modal
   */
  edit = () => {
    this.setState({ modalConfirmEdit: false }, () => this.navigate(`/admin/bundle/edit/${this.state.itemToView.id}/summary`));
  };

  /*
   * Reset deleteItem state to null
   */
  resetItemActions = () => this.setState({ deleteItem: null, unpublishItem: null });

  hasPermission = permissions => this.props.user.toJS().permissions.isIntersected(permissions)

  render() {
    const [ConfirmationPopup, ModalBundle] = [ConfirmationPopupCmpt, ModalBundleCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const canCreateBundles = this.props.user.toJS().permissions.indexOf(PERMISSIONS.CREATE_BUNDLE.id) !== -1 && !this.props.isNotificationPage;
    return (
      <div className="container">
        {canCreateBundles &&
          <ContentHeader contentTitle="bundles" >
            <Button onClick={this.create} className="btn-add" >
              + <FormattedMessage id="CREATE_BUNDLE" />
            </Button>
          </ContentHeader>
        }
          <div>
            {this.getTable()}
            <ConfirmationPopup
              show={this.state.modalDelete}
              onHide={() => {this.setState({ modalDelete: false });}}
              onAction={this.delete}
              actionStyle="danger"
              action={ this.format({ id: 'remove' })}
              title={ this.format({ id: 'confirmation' })}
              >
              <div><FormattedMessage id="confirmation_remove_bundle" /></div>
            </ConfirmationPopup>
            <ConfirmationPopup
              show={this.state.modalUnpublish}
              onHide={() => {this.setState({ modalUnpublish: false });}}
              onAction={this.unpublish}
              actionStyle="warning"
              action={ this.format({ id: 'unpublish' })}
              title={ this.format({ id: 'confirmation' })}
              >
              <div><FormattedMessage id="question_unpublish_bundle" /></div>
            </ConfirmationPopup>
            <ConfirmationPopup
              show={this.state.modalConfirmEdit}
              onHide={() => {this.setState({ modalConfirmEdit: false });}}
              onAction={this.edit}
              actionStyle="warning"
              action={ this.format({ id: 'modify' })}
              title={ this.format({ id: 'confirmation' })}
              >
              <div><FormattedMessage id="warning_modify_bundle" /></div>
            </ConfirmationPopup>
            <ModalBundle
              show={this.state.modalViewItem}
              onHide={() => {this.setState({ modalViewItem: false });}}
              allowValidate = {this.props.user.id_role === USER.ROLE.ADMIN}
              bundle={this.state.itemToView}
              />
          </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user'),
    users: state.get('backoffice').get('users').toJS(),
    loggedUser: state.get('v02').get('common').get('user').toJS(),
    bundle: state.get('v02').get('backOffice').get('bundles').get('current').toJS()
  };
}


const _components = {
  default: connect(stateToProps)(BundleList),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
