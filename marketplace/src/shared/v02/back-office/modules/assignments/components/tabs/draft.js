import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import moment from 'moment';
import Label from 'react-bootstrap/lib/Label';
import Input from 'react-bootstrap/lib/Input';
import { FormattedMessage } from 'react-intl';
import { ITEM, PERMISSIONS, ASSIGNMENT } from 'helpers/constants';
import { getProductType } from 'helpers/product';
import { DataColumn } from 'react-datatable-bootstrap';
import DatatableCmpt from 'v02/back-office/generic-components/datatable-v2';
import DatatableDetailCmpt from '../shared/datatable-detail-assignment';

class Assignments extends Components {

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showAllItems: false,
    };
  }

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

  getAssignments = () => {
    const state = this.props.location.query.state;
    const assignmentId = parseInt(this.props.location.query.assignmentId, 10);
    let assignments = this.props.assignments.toJS();
    if (assignmentId) {
      assignments = assignments.filter(assignment => assignment.id === assignmentId);
    }
    if (state) {
      assignments = assignments.filter(item => item.state === state);
    }
    assignments = assignments
    .filter(a => a.state !== ITEM.STATE.KEY.DELETED)
    .sort((a, b) => a.assigned_at - b.assigned_at);
    if (!this.state.showAllItems) {
      assignments = assignments.filter(a => a.state !== ITEM.STATE.KEY.VALIDATED);
    }
    // Only return this users assignments unless they have permission to view all of them.
    if (this.props.user.permissions.indexOf(PERMISSIONS.EDIT_ASSIGNMENT.id) !== -1) {
      return assignments;
    }
    return assignments.filter(assignment => assignment.id_assigned_by === this.props.user.id);
  };

  onCheck = () => this.setState({ showAllItems: !this.state.showAllItems })

  /**
   * Set the columns to view depending on the user's permissions
   * @returns {Array} with the DataColumns to show
   * @private
   */
  getColumns = () => {
    const selectStatus = {
      options: [
        { value: ITEM.STATE.KEY.DRAFT, title: this.format({ id: 'draft' }) },
        { value: ITEM.STATE.KEY.PENDING, title: this.format({ id: 'pending' }) },
        { value: ITEM.STATE.KEY.VALIDATED, title: this.format({ id: 'validated' }) },
      ],
    };
    const aColumns = [];
    const oIdPoSystem = (<DataColumn field="id_po_system" title={ this.format({ id: 'assignment_id' }) } sortable={true} md={1} searchable={true} />);
    const oShowDate = (<DataColumn field="assigned_at" title={ this.format({ id: 'assigned_at' }) } sortable={true} md={2} searchable={true} transform={this.transform.showDate} />);
    const oAssignedToInfo = (<DataColumn field="assigned_to_info" title={ this.format({ id: 'assignment_assigned_to' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedTo} />);
    const oAssignedByInfo = (<DataColumn field="assigned_by_info" title={ this.format({ id: 'assignment_assigned_by' })} sortable={true} md={3} searchable={true} transform={this.transform.assignedBy} />);
    const oState = (<DataColumn field="state" title={ this.format({ id: 'state' })} md={1} transform={this.transform.state} searchable={true} searchOptions={selectStatus} />);
    const oActions = (<DataColumn field="alias" title={ this.format({ id: 'action' })} md={1} transform={this.transform.actions} />);
    const oItemsInfo = (<DataColumn field="items" title={ this.format({ id: 'content' })} md={2} transform={this.transform.content} />);

    if (this.props.user.permissions.indexOf(PERMISSIONS.ASSIGNMENTS_LIST_ALL_INFO.id) !== -1) {
      aColumns.push(oIdPoSystem);
      aColumns.push(oShowDate);
      aColumns.push(oAssignedToInfo);
      aColumns.push(oAssignedByInfo);
      aColumns.push(oItemsInfo);
      aColumns.push(oState);
      aColumns.push(oActions);
    }
    return aColumns;
  };

  transform = {
    showDate: date => {
      return `${moment(date).format('D MMM. YYYY').toLowerCase()} ${this.format({ id: 'at' })} ${moment(date).format('hh:mm')}`;
    },
    user: assignedByInfo => {
      const user = this.props.users.find(u => parseInt(u.id, 10) === parseInt(data.id_assigned_to, 10));
      if (!user) return '';
      return `${user.name} ${user.lastname}`;
    },
    content: aItems => {
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
    label: aItems => {
      return aItems.map((i, index) => {
        let item = null;

        // if it's a bundle (won't show the products inside)
        if (i.id_bundle && !i.id_product) {
          item = this.props.bundles.toJS().find(b => b.id === parseInt(i.id_bundle, 10));
          return item && (<p>{item.title}</p>);
        }

        if (!i.id_bundle && i.id_product) { // if it's a product not in a bundle
          item = this.props.products.toJS().find(p => p.id === parseInt(i.id_product, 10));
          return item && (<p>{item.name}</p>);
        }

        return null;
      })
      .filter(item => item !== null);
    },
    type: items => {
      let text = ITEM.TYPES.SUPPORT;
      if (items.length > 1) {
        text = ITEM.TYPES.BUNDLE;
      } else {
        const item = items[0];
        const productMatch = item ? this.props.products.toJS().find(product => parseInt(product.id, 10) === parseInt(item.id_product, 10)) : false;
        if (!productMatch) {
          return <FormattedMessage id="no_product_found" />;
        }
        const itemType = productMatch.type;
        text = getProductType(itemType);
      }
      return <Label text={text} style={{ textTransform: 'uppercase' }} ><FormattedMessage id={text} /></Label>;
    },
    state: state => <Label state={state} style={{ textTransform: 'uppercase' }}><FormattedMessage id={state} /></Label>,
  };

  search = {
    state: (filter, jsxObject, rowData) => filter === rowData.state,
    type: (filter, jsxObject) => filter === jsxObject.props.text,
  }
  render() {
    const [Datatable, Summary] = [DatatableCmpt, DatatableDetailCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const data = this.getAssignments();
    const types = [
      { value: ITEM.TYPES.BUNDLE, title: this.format({ id: ITEM.TYPES.BUNDLE }) },
      { value: ITEM.TYPES.LINE, title: this.format({ id: ITEM.TYPES.LINE }) },
      { value: ITEM.TYPES.MATERIAL, title: this.format({ id: ITEM.TYPES.MATERIAL }) },
      { value: ITEM.TYPES.SUPPORT, title: this.format({ id: ITEM.TYPES.SUPPORT }) },
    ];
    const states = [
      { value: ASSIGNMENT.STATE.DRAFT, title: this.format({ id: ASSIGNMENT.STATE.DRAFT }) },
      { value: ASSIGNMENT.STATE.PENDING, title: this.format({ id: ASSIGNMENT.STATE.PENDING }) },
      { value: ASSIGNMENT.STATE.PUBLISHED, title: this.format({ id: ASSIGNMENT.STATE.PUBLISHED }) },
      { value: ASSIGNMENT.STATE.VALIDATED, title: this.format({ id: ASSIGNMENT.STATE.VALIDATED }) },
    ];
    return (
      <div className="row">
        <div className="" style={{ padding: '0px 0px 10px 0px' }}>
          <Input type="checkbox" checked={this.state.showAllItems} onClick={this.onCheck} className="checkbox-custom">
            <label className="checkbox-custom-label"><FormattedMessage id="VIEW_ALL_ASSIGNMENTS" /></label>
          </Input>
        </div>
        <Datatable data={data} >
          <Datatable.DataColumn field="assigned_at" title={this.format({ id: 'assigned_at' })} size={3} transform={this.transform.showDate} sortable={true} />
          <Datatable.DataColumn field="id_po_system" title={this.format({ id: 'assignment_id' })} size={2} search />
          <Datatable.DataColumn field="items" title={this.format({ id: 'label' })} size={4} transform={this.transform.label} sortable={true} />
          <Datatable.DataColumn field="state" title={this.format({ id: 'state' })} size={3} transform={this.transform.state} search={this.search.state} searchType="select" searchOptions={states} />
          <Datatable.SummaryColumn ><Summary { ...this.props } /></Datatable.SummaryColumn>
        </Datatable>
      </div>
    );
  }
}

/* <Datatable.DataColumn field="items" title={this.format({ id: 'type' })} size={2} transform={this.transform.type} search={this.search.type} searchType="select" searchOptions={types} /> */

function stateToProps(state) {
  return {
    assignments: state.get('assignments'),
    products: state.get('products'),
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
