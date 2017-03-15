import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Button from 'react-bootstrap/lib/Button';
import Label from 'react-bootstrap/lib/Label';
import { FormattedMessage } from 'react-intl';
import { DataTable, DataColumn, Pagination } from 'react-datatable-bootstrap';
import TableActions from 'v02/back-office/generic-components/table-actions';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ContentHeaderCmpt from 'v02/back-office/generic-components/content-header';


class Assignments extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  /*
   * @param tenant
   * @param dispatch
   * @param params
   * @param query
   * @returns {Promise|Promise.<T>}
   */
  static fetchData(tenant, dispatch, params = {}, query = {}) {
    const Action = new Actions(tenant);
    // Insert here the Action to fetch the needed data
    return Promise.all([])
    .then(actions => Promise.resolve(actions))
    .then(() => Action.Seo.set({ type: '', data: {} }))
    .then(action => Promise.resolve(dispatch(action)));
  }

  getAssignments = () => this.props.assignments.toJS().filter(assignment => {
    const retVal = assignment.state === ITEM.STATE.KEY.VALIDATED && assignment.assigned_to_info.id === this.props.user.id;
    return retVal;
  });

  /**
   * Set the columns to view depending on the user's permissions
   * @returns {Array} with the DataColumns to show
   * @private
   */
  getColumns = () => {
    const aColumns = [];
    const oIdPoSystem = (<DataColumn field="id_po_system" title={ 'Id' } sortable={true} md={1} searchable={true} />);
    const oShowDate = (<DataColumn field="assigned_at" title={ this.format({ id: 'assigned_at' }) } sortable={true} md={2} searchable={true} transform={this.transform.showDate} />);
    const oAssignedToInfo = (<DataColumn field="assigned_to_info" title={ this.format({ id: 'assignment_assigned_to' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedTo} />);
    const oAssignedByInfo = (<DataColumn field="assigned_by_info" title={ this.format({ id: 'assignment_assigned_by' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedBy} />);
    const oState = (<DataColumn field="state" title={ this.format({ id: 'state' })} md={1} transform={this.transform.state} />);
    const oActions = (<DataColumn field="alias" title={ this.format({ id: 'action' })} md={1} transform={this.transform.actions} />);
    const oItemsInfo = (<DataColumn field="items" title={ this.format({ id: 'content' })} md={2} transform={this.transform.itemsInfo} />);

    aColumns.push(oIdPoSystem);
    aColumns.push(oShowDate);
    aColumns.push(oAssignedToInfo);
    aColumns.push(oAssignedByInfo);
    aColumns.push(oItemsInfo);
    aColumns.push(oState);
    aColumns.push(oActions);
    return aColumns;
  };

  transform = {
    showDate: date => {
      return `${moment(date).format('D MMM. YYYY').toLowerCase()} ${this.format({ id: 'at' })} ${moment(date).format('h:mm a')}`;
    },
    assignedBy: assignedByInfo => assignedByInfo ? `${assignedByInfo.name} ${assignedByInfo.lastname}` : '',
    assignedTo: assignedToInfo => assignedToInfo ? `${assignedToInfo.name} ${assignedToInfo.lastname}` : '',
    itemsInfo: aItems => {
      return aItems.map((i, index) => {
        let item = null;
        // if it's a bundle (won't show the products inside)
        if (i.id_bundle && !i.id_product) {
          item = this.props.bundles.toJS().find(b => b.id === parseInt(i.id_bundle, 10));
          return item && (<Label key={index} style={{ textTransform: 'uppercase', cursor: 'pointer' }} onClick={() => this.props.showModal('bundle', item)}>{item.title}</Label>);
        }
        if (!i.id_bundle && i.id_product) { // if it's a product not in a bundle
          item = this.props.products.toJS().find(p => p.id === parseInt(i.id_product, 10));
          return item && (<Label key={index} style={{ textTransform: 'uppercase', cursor: 'pointer' }} onClick={() => this.props.showModal('product', item)}>{item.name}</Label>);
        }
        return null;
      })
      .filter(item => item !== null);
    },
    actions: (id, rowData) => {
      const actions = [];
      // Show/view button
      actions.push(<TableActions.Button key="1" style={{ backgroundColor: '#999999' }} onClick={() => { this.navigate(`/admin/assignment/detail/${rowData.id}`); }} icon="eye-open" text={ this.format({ id: 'view_detail' })} />);
      return <TableActions>{actions}</TableActions>;
    },
    state: state => <Label style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label>,
    suivi: (id, rowData) => {
      return (
        <div className="text-center">
          <button className="btn btn-default" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <Glyphicon glyph="eye-open" onClick={() => { this.props.showModal('timeline', rowData); }} />
          </button>
        </div>
      );
    },
  };

  render() {
    const [ContentHeader] = [ContentHeaderCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let table = <div xs={12}><FormattedMessage id="assignment_no_found" /></div>;
    const aAssignments = this.getAssignments();
    if (aAssignments.length > 0) {
      table = (
        <div>
          <DataTable data={aAssignments} dtStyle="dark">
            {this.getColumns()}
            <Pagination maxButtons={3} itemPerPage={8} ellipsis={false} />
          </DataTable>
        </div>
      );
    }

    return (
      <div className="container">
        <ContentHeader contentTitle="assignations_to_me" />
        <div>{table}</div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    assignments: state.get('assignments'),
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user').toJS(),
  };
}

const _components = {
  default: connect(stateToProps)(Assignments),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
