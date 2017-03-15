import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Actions from 'flux/actions';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import moment from 'moment';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import ModalStockCmpt from 'v02/back-office/modules/modals/modal-stock';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';
import { Link } from 'react-router';

// import { PublishButtonCmpt } from 'components/back-office/buttons/buttons';

class StockDataTable extends Components {

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
    this.itemActions = new Actions(props.tenant).Bundles;
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
    const Action = new Actions(tenant);
    return Promise.all([
      // Insert here the Action to fetch the needed data
    ])
    .then(actions => Promise.resolve(actions))
    .then(action => Action.Seo.set({ type: '', data: {} }))
    .then(action => Promise.resolve(dispatch(action)));
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
    showDate: date => date ? moment(date).format('D MMM. YYYY').toLowerCase() : 'N/A',
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
      const canUnpublishAnyItem = this.hasPermission([PERMISSIONS.UNPUBLISH_STOCK.id]);
      const canUnpublishOwnItem = this.hasPermission([PERMISSIONS.UNPUBLISH_STOCK_OWN.id]);
      const canUnpublish = canUnpublishAnyItem || (canUnpublishOwnItem && isItemOwner);

      const canValidate = this.hasPermission([PERMISSIONS.VALIDATE_PUBLICATION_STOCK.id]);

      const canEditAnyItem = this.hasPermission([PERMISSIONS.EDIT_STOCK.id]);
      const canEditOwnItem = this.hasPermission([PERMISSIONS.EDIT_STOCK_OWN.id]);
      const canEdit = canEditAnyItem || (canEditOwnItem && isItemOwner);

      const canDeleteAnyItem = this.hasPermission([PERMISSIONS.DELETE_STOCK.id]);
      const canDeleteOwnItem = this.hasPermission([PERMISSIONS.DELETE_STOCK_OWN.id]);
      const canDelete = canDeleteAnyItem || (canDeleteOwnItem && isItemOwner);

      const canPublishAnyItem = this.hasPermission([PERMISSIONS.PUBLISH_STOCK.id]);
      const canPublishOwnItem = this.hasPermission([PERMISSIONS.PUBLISH_STOCK_OWN.id]);
      const canPublish = canPublishAnyItem || (canPublishOwnItem && isItemOwner);

      const canRequestPublicationAnyItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_STOCK.id]);
      const canRequestPublicationOwnItem = this.hasPermission([PERMISSIONS.REQUEST_PUBLICATION_STOCK_OWN.id]);
      const canRequestPublication = canRequestPublicationAnyItem || (canRequestPublicationOwnItem && isItemOwner);

      // ADD BUTTONS BASED ON PERMISSIONS
      const actions = [btnView];
      // if (canEdit && !isNotificationPage) {
      //   actions.push(btnEdit);
      // }
      // // set action button demand publication for an Author and the validate (publish) only for admins
      // if (canValidate && rowData.state === ITEM.STATE.KEY.PENDING) {
      //   actions.push(btnValidate);
      // }
      //
      // if (canRequestPublication && rowData.state === ITEM.STATE.KEY.DRAFT && !isNotificationPage) {
      //   actions.push(btnRequestPublication);
      // }
      //
      // if (canPublish && rowData.state === ITEM.STATE.KEY.DRAFT && !isNotificationPage) {
      //   actions.push(btnPublish);
      // }
      //
      // if (canUnpublish && rowData.state === ITEM.STATE.KEY.PUBLISHED && !isNotificationPage) {
      //   actions.push(btnUnpublish);
      // }
      //
      // if (canDelete && rowData.state !== ITEM.STATE.KEY.PUBLISHED && !isNotificationPage) {
      //   actions.push(btnDelete);
      // }
      //
      // if (canRequestPublication && rowData.state === ITEM.STATE.KEY.PENDING && !isNotificationPage) {
      //   actions.push(btnCancelPublicationrequest);
      // }
      return <div><TableActions>{actions}</TableActions></div>;
    },
  };

  getTableData = () => {
    const now = new Date().getTime() / 1000;
    const stock = this.props.stock.toJS();
    console.log('stock', stock);
    const tableData = [];
    const assignmentOrders = this.props.assignmentOrders.toJS();
    const productAssignmentOrders = assignmentOrders.filter(order => !!order.product);
    const data = {};
    productAssignmentOrders.forEach(order => {
      if (!data[order.product.id]) {
        data[order.product.id] = {
          id: order.product.id,
          productName: order.product.name,
          product: order.product,
          stockCount: 0,
          stockLastUpdatedAt: 0,
          orders: [],
        };
      }
      data[order.product.id].stockCount += 1;
      data[order.product.id].orders.push(order);
      const currentLastUpdate = data[order.product.id].stockLastUpdatedAt;
      data[order.product.id].stockLastUpdatedAt = order.assigned_at > currentLastUpdate ? order.assigned_at : currentLastUpdate;
    });
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        tableData.push(data[prop]);
      }
    }
    const updatedStockCount = tableData.map(item => {
      const stockMatches = stock.filter(stockRow => {
        return stockRow.id_product === item.id && stockRow.created_at < now;
      });
      console.log('stockMatches', stockMatches);
      const stockCountAdjustment = stockMatches.reduce((prev, next) => prev + next.count, 0);
      return Object.assign({}, item, { stockCount: item.stockCount + stockCountAdjustment });
    });
    console.log('updatedStockCount', updatedStockCount);
    return updatedStockCount;
  }

  /*
   * Return view with table populated if there are items, if not, a div with a
   * message indicating that there are no items
   * @returns {object} * HTML with the table populated of items
   */
  getTable = () => {
    const tableData = this.getTableData();

    if (tableData.length > 0) {
      return (
        <DataTable data={tableData} dtStyle="dark">
          <DataColumn field="productName" title={ this.format({ id: 'product' })} sortable={true} md={2} searchable={true} />
          <DataColumn field="stockCount" title={ this.format({ id: 'stock_count' })} md={2} />
          <DataColumn field="stockLastUpdatedAt" title={ this.format({ id: 'stock_last_added_at' })} md={2} transform={this.transform.showDate} />
          <DataColumn field="id" title={ this.format({ id: 'stock_movements' })} md={1} transform={this.transform.actionButtons} />
          <Pagination maxButtons={3} itemPerPage={10} ellipsis={false} />
        </DataTable>
      );
    }
    return <div><FormattedMessage id="no_stock_found" /></div>;
  };

  // ACTIONS

  /*
   * Mark as pending an Item awaiting to be published by an admin. Call parent function to set PENDING the item
   */
  requestPublication = ({ id }) => {
    return this.itemActions.DemandPublication(id)
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
    const [ConfirmationPopup, ModalStock] = [ConfirmationPopupCmpt, ModalStockCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const canCreateStock = this.props.user.toJS().permissions.indexOf(PERMISSIONS.CREATE_STOCK.id) !== -1 && !this.props.isNotificationPage;

    return (
      <div className="container">
        {canCreateStock &&
          <ContentHeader contentTitle="stock" >
          <Link className="btn-add btn" to="/admin/stock/new">+ <FormattedMessage id="CREATE_STOCK" /></Link>
          </ContentHeader>
        }
          <div>
            { this.getTable() }
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
            <ModalStock
              show={this.state.modalViewItem}
              onHide={() => {this.setState({ modalViewItem: false });}}
              product={this.state.itemToView}
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
    products: state.get('products'),
    assignments: state.get('assignments'),
    assignmentOrders: state.get('assignmentOrders'),
    stock: state.get('stock'),
  };
}

const _components = {
  default: connect(stateToProps)(StockDataTable),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
