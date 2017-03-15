import React from 'react';
import Component from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Promise from 'bluebird';
import Actions from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';
import SingleUserSelectorCmpt from './single-user-selector';
import SummaryCmpt from 'v02/back-office/modules/assignments/components/edit/tabs/summary';
import { FormattedMessage } from 'react-intl';
import { ITEM } from 'helpers/constants';
import DeleteIcon from 'react-icons/lib/fa/times-circle';
import Modal from 'react-bootstrap/lib/Modal';
import getAssignmentOptionsForm from 'v02/back-office/modules/assignments/components/assignment-option-forms/get-form';
import formSerialize from 'form-serialize';

class Assignment extends Component {

  constructor(props) {
    super(props);
    let oAssignment = {
      description: '',
      id_assigned_by: null,
      id_state: ITEM.STATE.DRAFT,
    };
    let isEdited = !!this.props.params.id;
    // check if we are creating or editing an assignment. If in the url we have the id, we are editing it
    // in this case get the data of the assignment
    if (this.props.params.id) {
      oAssignment = this.props.assignments.toJS().find(a => a.id === parseInt(this.props.params.id, 10));
      isEdited = true;
    } else {
      oAssignment.items = [];
    }

    this.state = {
      assignment: Object.assign({}, oAssignment),
      dataToUpdate: {},
      isEdited,
      showAssignmentModal: false,
    };
  }

  /**
   * Call action to create new assignment
   */
  createAssignment = assignment => {
    assignment.items = assignment.items.map(i => {
      const itemCopy = Object.assign({}, i);
      delete itemCopy.id_assignment_option_form;
      return itemCopy;
    });
    return new Actions(this.props.tenant).Assignments.Create(assignment)
    .then(action => Promise.resolve(this.props.dispatch(action)))
    .then(() => Promise.resolve(this.props.notification.add({ message: <FormattedMessage id="assignment_updated_success" />, level: 'success' })))
    .then(() => Promise.resolve(this.closeAssignmentOrderModal()))
    .then(() => Promise.resolve(console.log('redirect to assignments')))
    .then(() => Promise.resolve(setTimeout(() => this.navigate('/admin/assignments/draft'), 350)))
    .catch(err => {
      console.log('ERR: ', err);
      this.props.notification.add({ message: <FormattedMessage id="assignment_updated_error" />, level: 'error' });
    });
  }

  onSubmitForm = e => {
    e.preventDefault();
    const isAssignmentValid = this.isAssignmentValid();
    // Check validation again
    if (!isAssignmentValid || !this.assignmentCanAddAssignationOptions()) {
      this.props.notification.add({ message: <FormattedMessage id="assignment_updated_error" />, level: 'error' });
      return;
    }
    const assignmentOrderOptions = formSerialize(e.target);
    const assignment = Object.assign({}, this.state.assignment, { assignmentOrderOptions });
    return this.createAssignment(assignment);
  }

  /**
   * Update the assignment. Will send all the object
   * @private
   */
  _update = () => {
    new Actions(this.props.tenant).Assignments.Update(this.state.assignment.id, this.state.dataToUpdate)
    .then(action => Promise.resolve(this.props.dispatch(action)))
    .then(() => Promise.resolve(this.props.notification.add({ message: <FormattedMessage id="assignment_updated_success" />, level: 'success' })))
    .then(() => Promise.resolve(setTimeout(() => this.navigate('/admin/assignments/draft'), 350)))
    .catch(err => this.props.notification.add({ message: <FormattedMessage id="assignment_updated_error" />, level: 'error' }));
  };

  /**
   * Throw the action to delete a component from the assignmtn
   * @param {number} nItemId the id of the component. For now is a product
   * @param {number} nAssignment assignment in which is shown
   */
  onDeleteItem = nItemId => {
    new Actions(this.props.tenant).Assignments.DeleteItem({ id: this.state.assignment.id, id_item: nItemId })
    .then(action => {
      const oAssignment = Object.assign({}, this.state.assignment, { item: null });
      this.setState({ assignment: oAssignment });
      this.props.dispatch(action);
    })
    .catch(err => console.log('ERROR deleting assignment component: ', err));
  };

  /**
   * Se the information to render in the single user selector: function to update
   * and the information of the user to which this assignment is assigned
   * @returns {object} with all the information needed
   */
  setUserSelectorInfo = () => ({ user_info: this.state.assignment.assigned_to_info, user_info_key: 'assigned_to_info', update: this.update });

  /**
   * Update the assignment state
   * @param {string} field name must match with the assignment object field
   */
  update = field => value => {
    const oAssignment = Object.assign({}, this.state.assignment);
    const oDataToUpdate = Object.assign({}, this.state.dataToUpdate);
    if (field === 'assigned_to_info') {
      oAssignment.assigned_at = Date.now();
    }
    // if we are updating items, convert it to an array
    if (field === 'items') {
      oDataToUpdate.items = oDataToUpdate.items || [];
      // TODO: in the future, when we can add more than one item, need to do a push. Now, we only set always first position
      oDataToUpdate[field][0] = value;
      oAssignment[field][0] = value;
    } else {
      oAssignment[field] = value;
      oDataToUpdate[field] = value;
    }
    this.setState({ assignment: oAssignment, dataToUpdate: oDataToUpdate });
  };

  openAssignmentModal = () => this.setState({ showAssignmentModal: true });

  isAssignmentValid = () => {
    let bValidatedFields = true;
    // check first all fields to show all error messages (if needed)
    if (!this.state.assignment.assigned_to_info) {
      this.props.notification.add({ message: <FormattedMessage id="assignment_updated_error_no_users" />, level: 'error' });
      bValidatedFields = false;
    }
    if (this.state.assignment.items.length < 1) {
      this.props.notification.add({ message: <FormattedMessage id="assignment_updated_error_no_components" />, level: 'error' });
      bValidatedFields = false;
    }
    return bValidatedFields;
  };
  assignmentCanAddAssignationOptions = () => this.state.assignment.items.length === 1 && this.state.assignment.items[0].type === 'product' && this.state.assignment.items[0].id_assignment_option_form;

  onClickAssignButton = e => {
    // return console.log('this.state', this.state);
    const isAssignmentValid = this.isAssignmentValid();
    if (!isAssignmentValid) { return; }
    if (this.state.isEdited) { return this._update(); }
    if (this.assignmentCanAddAssignationOptions()) {
      return this.openAssignmentModal();
    }
    return this.createAssignment(this.state.assignment);
  }

  /**
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
    // Set SEO data after load required fields in the state
    .then(() => Action.Seo.set({ type: '', data: {} }).then(action => Promise.resolve(dispatch(action))));
  }

  closeAssignmentOrderModal = e => this.setState({ showAssignmentModal: false });

  render() {
    const [Summary, SingleUserSelector] = [SummaryCmpt, SingleUserSelectorCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const AssignmentOptionsForm = getAssignmentOptionsForm(this.props.tenant, this.state.assignment.items[0] && this.state.assignment.items[0].id_assignment_option_form);
    const oChildrenProps = {
      random: Math.random(),
      assignment: this.state.assignment,
      update: this.update,
    };
    const children = React.Children.map(this.props.children, child => (
      React.cloneElement(child, oChildrenProps)
    ));
    let oAssignedToInfo = <div></div>;
    if (this.state.assignment.assigned_to_info) {
      oAssignedToInfo = (
        <div className="selected-users alert alert-info">
          { `${this.state.assignment.assigned_to_info.name} ${this.state.assignment.assigned_to_info.lastname}`}
          <span className="delete-icon" onClick={() => this.update('assigned_to_info')(null)} ><DeleteIcon /></span>
        </div>
      );
    }
    return (
      <div className="container mp-assignments">
        <article itemScope itemType="http://schema.org/Product" className="mp-product h-product">
          <Row className="padding-bottom">
            <Col xs={12} sm={12} md={8} lg={8} className="padding-top">{ children || <Summary {...oChildrenProps} /> }</Col>
            <Col xs={12} sm={12} md={4} lg={4} className="padding-top"><SingleUserSelector {...this.setUserSelectorInfo()} />{oAssignedToInfo}</Col>
          </Row>
          <Row className="padding-top">
            <Col xs={12} sm={12} md={8} lg={8} className="hidden-xs hidden-sm">
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="text-right">
              <Button className="white-button uppercase-text" style={{ width: '33%', float: 'left' }}>
                <Link to={'/admin/assignments'}> <FormattedMessage id="cancel" /></Link>
              </Button>
              <Button
                disabled={Object.getOwnPropertyNames(this.state.dataToUpdate).length === 0}
                className="grey-button uppercase-text"
                onClick={this.onClickAssignButton}
                style={{ width: '64%', float: 'right' }}
                >
                { this.state.isEdited ? <FormattedMessage id="assignment_update" /> : <FormattedMessage id="assignment_create" /> }
              </Button>
            </Col>
          </Row>
        </article>


        <Modal show={this.state.showAssignmentModal} onHide={this.closeAssignmentOrderModal} className="assignment-order-modal" bsSize="m" animation={true}>
          <Modal.Header closeButton><FormattedMessage id="assignment_order_options" /></Modal.Header>
          <Modal.Body>
            <div className="centered"><AssignmentOptionsForm onSubmit={this.onSubmitForm} /></div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    assignments: state.get('assignments'),
    notification: state.get('notification'),
  };
}

const _components = { default: connect(stateToProps)(Assignment) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
