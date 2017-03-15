import React from 'react';
import { connect } from 'react-redux';
import Component from 'v02/common/generic-components/base-component';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-bootstrap/lib/Modal';
import AssignationOptionFormCmpt from 'v02/back-office/modules/products/components/option-forms';
import Actions from 'flux/actions';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
}));

class AssignProductButton extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    product: React.PropTypes.object,
    tenant: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modalContent: null,
    };
  }

  onClick = () => {
    const item = this.props.product.toJS();
    const AssignmentFormOption = AssignationOptionFormCmpt.get(item.idAssignmentOptionForm, this.props.tenant);
    return this.setState({
      modalContent: (
        <AssignmentFormOption onSubmit={this.createAssignation} />
      ),
    });
  }

  createAssignation = assignmentOrderOptions => {
    const product = this.props.product.toJS();
    const user = this.props.user.toJS();
    const assignmentProductProps = {
      description: product.description,
      editor_title: `${user.name} ${user.lastname}`,
      id_item: product.id,
      id_product: product.id,
      logo: product.logo,
      name: product.name,
      type: 'product',
    };
    const assignnedToInfo = {
      id: user.id,
      email: user.email,
      lastname: user.lastname,
      name: user.name,
    };

    const assignment = {
      description: '',
      id_state: 2,
      assigned_at: new Date().getTime(),
      id_assigned_by: this.props.user.id,
      assigned_to_info: assignnedToInfo,
      items: [assignmentProductProps],
      assignmentOrderOptions,
    };

    // TODO: Change to V2!
    const actions = new Actions(this.props.tenant);
    actions.Assignments.Create(assignment)
    .then(action => this.props.dispatch(action))
    .then(action => {
      console.log('UserNotifications::action', action);
      return Promise.resolve(action);
    })
    .then(action => actions.UserNotifications.createAssignmentPublicationRequestNotification({ currentUserId: this.props.user.toJS().id, assignmentId: action.assignment.id }))
    .then(action => this.props.dispatch(action))
    .then(() => {
      // this.props.notification.add({ message: <FormattedMessage id="assignment_updated_success" />, level: 'success' })
      this.hideModal();
      console.log('created!');
    })
    .catch(err => console.error(err));
  }

  hideModal = () => {
    return this.setState({
      modalContent: null,
    });
  }
  render() {
    return (
      <div>
        <div className="buy" style={{ cursor: 'pointer' }} onClick={ this.onClick }>
          <p>
            <FormattedMessage id="product_buy" />
          </p>
        </div>
        <Modal show={!!this.state.modalContent} onHide={this.hideModal}>
          <Modal.Body>
            {this.state.modalContent}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const _components = {
  default: connector(AssignProductButton),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
