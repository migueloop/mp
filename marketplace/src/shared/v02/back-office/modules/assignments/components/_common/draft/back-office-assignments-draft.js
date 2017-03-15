import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import { FormattedMessage } from 'react-intl';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import DataTableCmpt from 'v02/back-office/generic-components/datatable-v2';
import { ITEM, ASSIGNMENT } from 'helpers/constants';
import { ShortDate } from 'v02/back-office/generic-components/dates';
import SummaryCmpt from 'v02/back-office/modules/assignments/components/_common/table-details/assignment';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
  assignments: state.get('v02').get('backOffice').get('assignments').get('all'),
}));

class AssignmentsDraft extends Components {
  constructor(props) {
    super(props);
    this.state = {
      showAllItems: false,
    };
  }

  onCheck = () => this.setState({ showAllItems: !this.state.showAllItems })

  getData = assignments => assignments.filter(assignment => {
    const assignmentId = parseInt(this.props.location.query.assignmentId, 10);
    if (assignmentId && assignmentId !== assignment.id) {
      return false;
    }
    // if all timelines inside the assignments are complete hide the assignment
    if (assignment.items.reduce((completed, item) => (completed && item.completed), true)) {
      return false;
    }
    if (!this.state.showAllItems && assignment.state.id === ITEM.STATE.VALIDATED) {
      return false;
    }
    return true;
  })

  transform = {
    date: date => <ShortDate date={date} />,
    item: items => {
      if (items.length > 1) {
        return items.find(item => item.bundle).bundle.title;
      }
      return items[0].product.name;
    },
    state: state => <Label state={state} style={{ textTransform: 'uppercase' }}><FormattedMessage id={state.state} /></Label>,
    // state: state => <Status type={state} />,
  }

  search = {
    state: (filter, jsxObject, rowData) => parseInt(filter, 10) === parseInt(rowData.state.id, 10),
  }

  render() {
    const [DataTable, Summary] = [DataTableCmpt, SummaryCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const states = [
      { value: ITEM.STATE.DRAFT, title: this.format({ id: ASSIGNMENT.STATE.DRAFT }) },
      { value: ITEM.STATE.PENDING, title: this.format({ id: ASSIGNMENT.STATE.PENDING }) },
      { value: ITEM.STATE.VALIDATED, title: this.format({ id: ASSIGNMENT.STATE.VALIDATED }) },
    ];
    return (
      <div className="container">
        <div className="" style={{ padding: '0px 0px 10px 0px' }}>
          <Input type="checkbox" checked={this.state.showAllItems} onClick={this.onCheck} className="checkbox-custom">
            <label className="checkbox-custom-label"><FormattedMessage id="VIEW_ALL_ASSIGNMENTS" /></label>
          </Input>
        </div>
        <DataTable data={this.getData(this.props.assignments.toJS())} >
          <DataTable.DataColumn field="assignedAt" title={this.format({ id: 'assigned_at' })} size={2} sortable={true} transform={this.transform.date} />
          <DataTable.DataColumn field="idPoSystem" title={this.format({ id: 'assignment_id' })} size={2} search />
          <DataTable.DataColumn field="items" title={this.format({ id: 'name' })} size={4} sortable={true} transform={this.transform.item} search />
          <DataTable.DataColumn field="state" title={this.format({ id: 'state' })} size={4} transform={this.transform.state} search={this.search.state} searchType="select" searchOptions={states} className="ABC" />
          <DataTable.SummaryColumn ><Summary /></DataTable.SummaryColumn>
        </DataTable>
      </div>
    );
  }
}

const _components = {
  default: connector(AssignmentsDraft),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
