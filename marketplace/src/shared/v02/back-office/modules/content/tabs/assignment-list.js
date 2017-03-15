import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import Actions from 'flux/actions';
import TableActions from 'v02/back-office/generic-components/table-actions';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import ModalAssignmentCmpt from 'v02/back-office/modules/modals/modal-assignment';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import ModalPurchaseOrderCmpt from 'v02/back-office/modules/modals/modal-purchase-order';
import ModalCompleteActionCmpt from 'v02/back-office/modules/modals/modal-complete-assignment-action';
import { PERMISSIONS, ITEM } from 'helpers/constants';
import { FormattedMessage } from 'react-intl';

class AssignmentList extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      deleteAssignment: false,
      cancelValidatedAssignment: null,
      modalAssignment: null,
      modifyAssignment: false,
      modalPurchaseOrder: false,
      modalTimeLine: false,
      deleteAssignmentModal: false,
      cancelValidatedAssignmentModal: false,
      itemPurchaseOrder: {},
      workflowId: null,
      completeActionModal: false,
      completeActionItem: {},
    };
    this.actions = new Actions(this.props.tenant);
  }

  /**
   * Set the columns to view depending on the user's permissions
   * @returns {Array} with the DataColumns to show
   * @private
   */
  _setColumns = () => {
    const format = this.context.intl.formatMessage;
    const aColumns = [];
    const oAssignedToInfo = (<DataColumn field="assigned_to_info" title={ format({ id: 'assignment_assigned_to' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedTo} />);
    const oAssignedByInfo = (<DataColumn field="assigned_by_info" title={ format({ id: 'assignment_assigned_by' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedBy} />);
    const oState = (<DataColumn field="state" title={ format({ id: 'state' })} sortable={true} searchable={true} md={1} />);
    const oTracking = (<DataColumn field="id_workflow_instance" title={ format({ id: 'track' })} md={1} transform={this.transform.suivi} />);
    const oPurchaseOrder = (<DataColumn field="id" title={ format({ id: 'purchase_order' })} md={1} transform={this.transform.purchaseOrder} />);
    const oActions = (<DataColumn field="alias" title={ format({ id: 'action' })} md={1} transform={this.transform.actions} />);
    const oNameItem = (<DataColumn field="items" title={ format({ id: 'name' })} md={1} />);
    const oItemsInfo = (<DataColumn field="items" title={ format({ id: 'content' })} md={1} transform={this.transform.itemsInfo} />);

    if (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id) !== -1) {
      aColumns.push(oAssignedByInfo);
      aColumns.push(oItemsInfo);
      aColumns.push(oTracking);
    }
    if (this.props.user.permissions.indexOf(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS.id) !== -1) {
      aColumns.push(oNameItem);
    }
    if (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_ALL_INFO.id) !== -1) {
      if (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id) === -1) { aColumns.push(oAssignedToInfo); }
      aColumns.push(oAssignedByInfo);
      aColumns.push(oState);
      if (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id) === -1) { aColumns.push(oTracking); }
      aColumns.push(oPurchaseOrder);
      aColumns.push(oActions);
    }

    return aColumns;
  };


  _setData = () => {
    if (this.props.user.permissions.indexOf(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS.id) !== -1) {
      return this.props.assignments.map(a => {
        const oTmp = {};
        a.items.map(i => {
          if (parseInt(i.id_owner, 10) === this.props.user.id) {
            oTmp.alias = i.alias;
            oTmp.id_po_system = i.id_po_system;
            oTmp.name = i.name;
            oTmp.id_item = i.id;
            oTmp.BOB = 'bob';
          }
        });
        console.log('oTmp:', oTmp);
        return Object.assign(oTmp, a);
      });
    }
    else {
      return this.props.assignments;
    }
  };

  transform = {
    findUser: userId => {
      const user = this.props.users.find(u => parseInt(u.id, 10) === parseInt(userId, 10));
      return `${user.name} (${user.email})`;
    },
    itemsInfo: aItems => {
      let item = {};
      const aItemsInfo = aItems.map(i => {
        if (i.id_bundle && !i.id_product) {
          item = this.props.bundles.find(b => b.id === parseInt(i.id_bundle, 10));
        }
        else {
          if (i.id_product) {
            item = this.props.products.find(p => p.id === parseInt(i.id_product, 10));
          }
        }
        return item.name || item.title;
      });
      return `${aItemsInfo.join()}`;
    },
    assignedBy: assignedByInfo => assignedByInfo ? `${assignedByInfo.name} ${assignedByInfo.lastname}` : '',
    assignedTo: assignedToInfo => assignedToInfo ? `${assignedToInfo.name} ${assignedToInfo.lastname}` : '',
    actions: (id, rowData) => {
      const formattedMessage = this.context.intl.formatMessage;
      const actions = [];

      // Modify button
      if (((this.props.user.permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id) !== -1) &&
        ((rowData.state !== ITEM.STATE.KEY.DELETED) && (rowData.state !== ITEM.STATE.KEY.PENDING)))) {
        actions.push(
          <TableActions.Button
            key="1"
            onClick={() => {this.setState({ modifyAssignment: rowData });}}
            icon="pencil"
            text={ formattedMessage({ id: 'modify' })}
            primary={true}
          />
        );
      }

      // Show button
      if ((this.props.user.permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT_OWN.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.CREATE_ASSIGNMENT.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_BASIC_INFO.id) !== -1)) {
        actions.push(
          <TableActions.Button
            key="2"
            style={{ backgroundColor: '#999999' }}
            onClick={() => {this.setState({ modalAssignment: rowData });}}
            icon="eye-open"
            text={ formattedMessage({ id: 'visualize' })} />
        );
      }

      // Validate button
      if (this.props.user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1 && rowData.state === ITEM.STATE.KEY.PENDING) {
        actions.push(
          <TableActions.Button
            key="4"
            style={{ backgroundColor: '#009933' }}
            onClick={() => {this.validate(rowData);}}
            icon="ok"
            text={ formattedMessage({ id: 'validate' })}
            />
        );
      }

      // Demand validation button
      if ((this.props.user.permissions.indexOf(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT.id) !== -1 ||
        this.props.user.permissions.indexOf(PERMISSIONS.REQUEST_VALIDATION_ASSIGNMENT_OWN.id) !== -1) &&
        rowData.state === ITEM.STATE.KEY.DRAFT &&
        this.props.user.activated) {
        actions.push(
          <TableActions.Button
            key="3"
            style={{ backgroundColor: '#009933' }}
            onClick={() => {this.demandValidation(rowData);}}
            icon="upload"
            text={ formattedMessage({ id: 'demand_validation' })}
            />
        );
      }

      // Cancel validation button
      if ((((this.props.user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id) !== -1) ||
          (this.props.user.permissions.indexOf(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT.id) !== -1) ||
          (this.props.user.permissions.indexOf(PERMISSIONS.CANCEL_PENDING_ASSIGNMENT_OWN.id) !== -1)) &&
          (rowData.state === ITEM.STATE.KEY.VALIDATED))) {
        actions.push(
          <TableActions.Button
            key="5"
            style={{ backgroundColor: '#f0ad4e' }}
            onClick={() => {this.setState({ cancelValidatedAssignment: rowData, cancelValidatedAssignmentModal: true });}}
            icon="remove"
            text={ formattedMessage({ id: 'withdraw' })}
            />
        );
      }

      // Delete button
      if (((this.props.user.permissions.indexOf(PERMISSIONS.CREATE_ASSIGNMENT.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT_OWN.id) !== -1) ||
        (this.props.user.permissions.indexOf(PERMISSIONS.VALIDATE_ASSIGNMENT.id) !== -1) &&
        (rowData.state !== ITEM.STATE.KEY.VALIDATED))) {
        actions.push(
          <TableActions.Button
            key="6"
            style={{ backgroundColor: '#990000' }}
            onClick={() => {this.setState({ deleteAssignment: rowData, deleteAssignmentModal: true });}}
            icon="trash"
            text={ formattedMessage({ id: 'remove' })}
          />
        );
      }

      // Action done button
      if ((this.props.user.permissions.indexOf(PERMISSIONS.VIEW_ASSIGNED_ASSIGNMENT_TO_OWN_ITEMS.id) !== -1)) {
        actions.push(
          <TableActions.Button
            key="6"
            style={{ backgroundColor: '#999999', width: '150%' }}
            onClick={() => {this.setState({ completeActionItem: rowData, completeActionModal: true });}}
            icon="ok"
            text={ formattedMessage({ id: 'action_done' })}
          />
        );
      }

      return <TableActions>{actions}</TableActions>;
    },
    suivi: (id, rowData) => {
      const [TableActions] = [TableActionsCmtp].map(cmpt => cmpt.get(this.props.tenant));
      const formattedMessage = this.context.intl.formatMessage;
      return (
        <TableActions>
          <TableActions.Button
            key="7"
            icon="eye-open"
            text={ formattedMessage({ id: 'track' })}
            primary={true}
            onClick={() => {this.setState({ workflowId: rowData.id_workflow_instance, modalTimeLine: true });}}
            />
        </TableActions>
      );
    },
    purchaseOrder: (id, rowData) => {
      const [TableActions] = [TableActionsCmtp].map(cmpt => cmpt.get(this.props.tenant));
      const formattedMessage = this.context.intl.formatMessage;
      return (
        <TableActions>
          <TableActions.Button
            key="8"
            style={{ width: 170 }}
            icon="eye-open"
            text={ formattedMessage({ id: 'purchase_order' })}
            primary={true}
            onClick={() => {this.setState({ itemPurchaseOrder: rowData, modalPurchaseOrder: true });}}
          />
        </TableActions>
      );
    },
  };


  cancelValidatedAssignment = () => {
    const { id } = this.state.cancelValidatedAssignment;

    this.actions.Assignments.CancelValidation(id)
    .then(action => {
      this.props.dispatch(action);
      this.setState({
        cancelValidatedAssignment: null,
        cancelValidatedAssignmentModal: false,
      });
    });
  };


  deleteAssignment = () => {
    const { id } = this.state.deleteAssignment;
    console.log('deleteAssignment', this.state.deleteAssignment);
    this.actions.Assignments.Delete(id)
    .then(action => {
      this.props.dispatch(action);
      this.setState({
        deleteAssignment: null,
        deleteAssignmentModal: false,
      });
    });
  };


  modifyAssignment = () => {
    const { id } = this.state.modifyAssignment;
    this.setState({ modifyAssignment: false }, () => this.navigate(`/admin/assignment/edit/${id}/summary`));
  };


  demandValidation = ({ id }) => {
    this.actions.Assignments.DemandValidation(id)
    .then(action => {
      this.props.dispatch(action);
      this.setState({ deleteAssignment: false });
    });
  };


  validate = ({ id }) => {
    this.actions.Assignments.Validate(id)
    .then(action => {
      this.props.dispatch(action);
      this.setState({ deleteAssignment: false });
    });
  };


  render() {
    const [ConfirmationPopup, ModalAssignment, ModalTimeLine, ModalPurchaseOrder, ModalCompleteAction] =
      [ConfirmationPopupCmpt, ModalAssignmentCmpt, ModalTimeLineCmpt, ModalPurchaseOrderCmpt, ModalCompleteActionCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let table = <div><FormattedMessage id="assignment_no_found" /></div>;
    const format = this.context.intl.formatMessage;
    const aColumns = this._setColumns();

    if (this.props.assignments.length > 0) {
      table = (
        <div>
          <DataTable data={this.props.assignments.filter(a => a.id_state !== ITEM.STATE.DELETED)} dtStyle="dark">
            {aColumns}
            <Pagination maxButtons={3} itemPerPage={8} ellipsis={false} />
          </DataTable>
        </div>
      );
    }

    return (
      <div>
        {table}
        <ConfirmationPopup
          show={!!this.state.deleteAssignmentModal} onHide={() => {this.setState({ deleteAssignment: null, deleteAssignmentModal: false });}}
          onAction={this.deleteAssignment}
          actionStyle="danger"
          action={ format({ id: 'remove' })}
          title={ format({ id: 'confirmation' })}
          >
          <div>You are about to delete this assignment? (this action can not be undone)</div>
        </ConfirmationPopup>
        <ConfirmationPopup
          show={!!this.state.modifyAssignment}
          onHide={() => {this.setState({ modifyAssignment: null });}}
          onAction={this.modifyAssignment}
          actionStyle="danger"
          action={ format({ id: 'modify' })}
          title={ format({ id: 'confirmation' })}
          >
          <div>Attention si vous modifiez un élément de la fiche , votre produit sera retirer</div>
        </ConfirmationPopup>
        <ConfirmationPopup
          show={!!this.state.cancelValidatedAssignmentModal}
          onHide={() => {this.setState({ cancelValidatedAssignment: null, cancelValidatedAssignmentModal: false });}}
          onAction={this.cancelValidatedAssignment}
          actionStyle="warning"
          action={ format({ id: 'withdraw' })}
          title={ format({ id: 'confirmation' })}
          >
          <div>Vous allez retirer ce commande</div>
        </ConfirmationPopup>
        <ModalAssignment workflowId={this.state.workflowId} show={!!this.state.modalAssignment} onHide={() => {this.setState({ workflowId: null, modalAssignment: false });}} />

        <ModalTimeLine
          assignment={this.state.assignmentTimeLine}
          show={!!this.state.modalTimeLine}
          onHide={() => {this.setState({ assignmentTimeLine: null });}} />

        <ModalPurchaseOrder
          item={this.state.itemPurchaseOrder}
          show={!!this.state.modalPurchaseOrder}
          onHide={() => {this.setState({ itemPurchaseOrder: null });}} />

        <ModalCompleteAction
          item={this.state.completeActionItem}
          show={!!this.state.completeActionModal}
          onHide={() => {this.setState({ completeActionItem: null });}} />
      </div>
    );
  }

}

function stateToProps(state) {
  return {
    notification: state.get('notification'),
  };
}

const _components = { default: connect(stateToProps)(AssignmentList) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
