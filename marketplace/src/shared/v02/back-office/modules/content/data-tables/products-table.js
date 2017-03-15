import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import Label from 'react-bootstrap/lib/Label';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import ModalProduct from 'v02/back-office/modules/modals/modal-product';
import { ITEM, PERMISSIONS, PRODUCT, USER } from 'helpers/constants';
import Actions from 'flux/actions';
import { Actions as ActionsV02 } from 'v02/flux';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';
import Button from 'react-bootstrap/lib/Button';
import { PRODUCT_AVAILABLE_FEATURES } from 'helpers/constants/features';

class Products extends Components {

  constructor(props) {
    console.log('::props', props);
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

    this.itemActions = new Actions(props.tenant).Products;
    this.v02Actions = new ActionsV02(props.tenant);
  }

  onClickDelete = rowData => () => this.setState({ deleteItem: rowData, modalDelete: true });
  onClickUnpublish = rowData => () => this.setState({ unpublishItem: rowData, modalUnpublish: true });
  onClickEdit = rowData => () => this.setState({ itemToView: rowData, modalConfirmEdit: true });
  onClickView = rowData => () => {
    this.props.dispatch(this.v02Actions.BackOffice.Products.fetchOne({ id: rowData.id }));
    this.setState({ modalViewItem: true });
  };
  onClickRequestPublication = rowData => () => this.requestPublication(rowData);
  onClickValidate = rowData => () => this.publish(rowData);
  onClickPublish = rowData => () => this.publish(rowData);
  onClickCancelPublicationrequest = rowData => () => this.cancelPublicationRequest(rowData)

  transform = {
    keywords: keywords => this.transform.crop(keywords.map(k => k.name).join(', ')),
    lookUser: (id, rowData) => rowData.email || this.props.users.toJS().all.find(u => u.id === id) ? this.props.users.toJS().all.find(u => u.id === id).email : '',
    showDate: date => date ? moment(date).format('D MMM. YYYY').toLowerCase() : 'N/A',
    crop: text => text.length > 60 ? `${text.substr(0, 57)}...` : text,
    state: state => <div className="text-center"><Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label></div>,
    actionButtons: (alias, rowData) => {
      const isNotificationPage = this.props.isNotificationPage;
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

      // PERMISSIONS
      const canUnpublishAnyItem = this.hasPermission([PERMISSIONS.UNPUBLISH_PRODUCT.id]);
      const canUnpublishOwnItem = this.hasPermission([PERMISSIONS.UNPUBLISH_PRODUCT_OWN.id]);
      const canUnpublish = canUnpublishAnyItem || (canUnpublishOwnItem && isItemOwner);

      const canValidate = this.hasPermission([PERMISSIONS.VALIDATE_PUBLICATION_PRODUCT.id]);

      const canEditAnyItem = this.hasPermission([PERMISSIONS.EDIT_PRODUCT.id]);
      const canEditOwnItem = this.hasPermission([PERMISSIONS.EDIT_PRODUCT_OWN.id]);
      const canEdit = canEditAnyItem || (canEditOwnItem && isItemOwner);

      const canDeleteAnyItem = this.hasPermission([PERMISSIONS.DELETE_PRODUCT.id]);
      const canDeleteOwnItem = this.hasPermission([PERMISSIONS.DELETE_PRODUCT_OWN.id]);
      const canDelete = canDeleteAnyItem || (canDeleteOwnItem && isItemOwner);

      const canPublishAnyItem = this.hasPermission([PERMISSIONS.PUBLISH_PRODUCT.id]);
      const canPublishOwnItem = this.hasPermission([PERMISSIONS.PUBLISH_PRODUCT_OWN.id]);
      const canPublish = canPublishAnyItem || (canPublishOwnItem && isItemOwner);

      const canRequestPublicationAnyItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_PRODUCT.id]);
      const canRequestPublicationOwnItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_PRODUCT_OWN.id]);
      const canRequestPublication = canRequestPublicationAnyItem || (canRequestPublicationOwnItem && isItemOwner);


      // ADD BUTTONS BASED ON PERMISSIONS
      const actions = [btnView];
      if (canEdit && !isNotificationPage) { actions.push(btnEdit); }
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

  createProduct = () => {
    let productId;
    this.itemActions.Create({
      editor_homepage: '',
      publication_date: null,
      specification: null,
      baseline: '',
      logo: null,
      name: 'Donnez un nom à votre produit!',
      creation_date: new Date().getTime(),
      state: PRODUCT.STATE.DRAFT,
      type: PRODUCT.TYPE.MOBILE,
      description: 'A description here',
    })
    .then(action => this.props.dispatch(action))
    .then(action => {
      productId = action.product.id;
    })
    .then(() => {
      // If we have any features that must always be activated then set them here (forceActive property)
      const activeFeatures = [];
      PRODUCT_AVAILABLE_FEATURES.forEach(feature => {
        if (feature.forceActive) {
          const featureData = {
            id_product: productId,
            id_feature: feature.id,
            isAvailable: true,
          };
          activeFeatures.push(this.itemActions.UpdateFeatureAvailability(featureData));
        }
      });
      return Promise.all(activeFeatures);
    })
    .then(actions => actions.forEach(action => this.props.dispatch(action)))
    .then(() => {
      setTimeout(() => {
        this.navigate(`/admin/product/edit/${productId}/summary`);
      }, 150);
    });
  };


  /*
   * Mark as pending an Item awaiting to be published by an admin. Call parent function to set PENDING the item
   */
  requestPublication = ({ id }) => {
    return this.itemActions.DemandPublication(id)
    .then(action => {
      console.log('action returned', action);
      return Promise.resolve(action);
    })
    .then(action => this.props.dispatch(action))
    .then(action => console.log('action success', action))
    .then(() => new Actions(this.props.tenant).UserNotifications.createProductPublicationRequestNotification({ users: this.props.users.toJS().all, currentUserId: this.props.user.toJS().id, productId: id }))
    .then(action => this.props.dispatch(action))
    .then(action => console.log('action success', action))
    .then(() => this.resetItemActions())
    .catch(err => console.log('requestPublication::err', err))
  };

  cancelPublicationRequest = ({ id }) => {
    return this.itemActions.Retire(id)
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
    return this.itemActions.Retire(id)
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
    this.setState({ modalConfirmEdit: false }, () => this.navigate(`/admin/product/edit/${this.state.itemToView.id}/summary`));
  };

  /*
   * Reset deleteItem state to null
   */
  resetItemActions = () => this.setState({ deleteItem: null, unpublishItem: null });

  hasPermission = permissions => this.props.user.toJS().permissions.isIntersected(permissions)

  render() {
    const isNotificationPage = this.props.isNotificationPage;
    const [ConfirmationPopup, ContentHeader] = [ConfirmationPopupCmpt, ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));

    let table = <div>No product registered</div>;

    const selectStatus = {
      options: [
        { value: ITEM.STATE.KEY.DRAFT, title: this.format({ id: 'draft' }) },
        { value: ITEM.STATE.KEY.PENDING, title: this.format({ id: 'pending' }) },
        { value: ITEM.STATE.KEY.PUBLISHED, title: this.format({ id: 'published' }) },
      ],
    };
    const filteredProducts = this.props.isNotificationPage ? this.props.productList.filter(p => p.state === ITEM.STATE.KEY.PENDING) : this.props.productList.filter(p => p.state !== ITEM.STATE.KEY.DELETED);
    if (this.props.productList.length > 0) {
      table = (
        <DataTable data={filteredProducts} dtStyle="dark" className="test-classname">
          <DataColumn field="name" title={ this.format({ id: 'name' }) } sortable={true} md={2} searchable={true} />
          <DataColumn field="keywords" title={ this.format({ id: 'keywords' }) } md={2} transform={this.transform.keywords} />
          <DataColumn field="created_by" title={ this.format({ id: 'creator' }) } md={2} transform={this.transform.lookUser} />
          <DataColumn field="last_update" title={ this.format({ id: 'last_updated_at' }) } md={1} transform={this.transform.showDate} />
          <DataColumn field="state" title={ this.format({ id: 'state' }) } sortable={true && !isNotificationPage} md={1} transform={this.transform.state} searchable={true && !isNotificationPage} searchOptions={selectStatus} />
          <DataColumn field="alias" title={ this.format({ id: 'actions' }) } md={1} transform={this.transform.actionButtons} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
      );
    }
    const canCreateProducts = this.props.user.toJS().permissions.isIntersected([PERMISSIONS.CREATE_PRODUCT.id]) && !this.props.isNotificationPage;
    return (
      <div className="container">
      {
        canCreateProducts &&
           <ContentHeader contentTitle="products" >
             <Button onClick={this.createProduct} className="btn-add" >
               + <FormattedMessage id="CREATE_PRODUCT" />
             </Button>
           </ContentHeader>
      }
        <div>
          {table}
          <ConfirmationPopup
            show={this.state.modalDelete}
            onHide={() => {this.setState({ modalDelete: false });}}
            onAction={this.delete}
            actionStyle="danger"
            action={ this.format({ id: 'remove' })}
            title={ this.format({ id: 'confirmation' })}
            >
            <div><FormattedMessage id="confirmation_remove_product" /></div>
          </ConfirmationPopup>
          <ConfirmationPopup
            show={this.state.modalUnpublish}
            onHide={() => {this.setState({ modalUnpublish: false });}}
            onAction={this.unpublish}
            actionStyle="warning"
            action={ this.format({ id: 'unpublish' })}
            title={ this.format({ id: 'confirmation' })}
            >
            <div><FormattedMessage id="question_unpublish_product" /></div>
          </ConfirmationPopup>
          <ConfirmationPopup
            show={this.state.modalConfirmEdit}
            onHide={() => {this.setState({ modalConfirmEdit: false });}}
            onAction={this.edit}
            actionStyle="warning"
            action={ this.format({ id: 'modify' })}
            title={ this.format({ id: 'confirmation' })}
            >
            <div><FormattedMessage id="warning_modify_product" /></div>
          </ConfirmationPopup>
          <ModalProduct
            show={this.state.modalViewItem}
            onHide={() => {this.setState({ modalViewItem: false });}}
            allowValidate = {this.props.user.id_role === USER.ROLE.ADMIN}
            { ...this.props }
            />
        </div>
      </div>
    );
  }
}

export default Products;
