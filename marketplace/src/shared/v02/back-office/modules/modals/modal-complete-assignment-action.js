/**
 * Created by cjgm on 6/10/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Loader from 'v02/back-office/generic-components/spinner';
import { FormattedMessage } from 'react-intl';

class ModalCompleteAssignmentAction extends Components {

  constructor(props) {
    super(props);
    this.state = { showDoneMessage: false };
  }

  static propTypes = {
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    item: React.PropTypes.object.isRequired,
    onConfirm: React.PropTypes.func.isRequired,
    loaded: React.PropTypes.bool.isRequired,
  };

  onHide = () => {
    this.setState({ showDoneMessage: false });
    this.props.onHide();
  };

  render() {
    if (!this.props.show || !this.props.item) { return null; }

    const question = <div style={{ marginTop: '-12%', marginLeft: '36%', marginBottom: '8%' }}><FormattedMessage id="action_done_confirmation" /></div>;

    const actionDone = <div style={{ marginTop: '-12%', marginLeft: '36%', marginBottom: '8%' }}><FormattedMessage id="action_done" /></div>;

    const contentMessage = this.state.showDoneMessage ? actionDone : question;

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-half">
        <Modal.Header><Modal.Title><FormattedMessage id="action_done" /></Modal.Title></Modal.Header>
        <Modal.Body><Loader loaded={this.props.loaded} content={contentMessage} style={{ width: '48px', height: '48px' }} /></Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onHide}><FormattedMessage id="close" /></Button>
          <Button bsStyle="info" onClick={this.props.onConfirm} disabled={ !this.props.loaded } ><FormattedMessage id="action_done" /></Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return { tenant: state.get('tenant') };
}

const _components = {
  default: connect(stateToProps)(ModalCompleteAssignmentAction),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
