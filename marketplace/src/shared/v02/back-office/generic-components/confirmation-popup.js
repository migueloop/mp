import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { FormattedMessage } from 'react-intl';


class ConfirmationPopup extends Components {

  static defaultProps = {
    actionStyle: 'primary',
  };

  static propTypes = {
    actionStyle: React.PropTypes.string,
    action: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func.isRequired,
    onAction: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onHide}><FormattedMessage id="close" /></Button>
          <Button bsStyle={this.props.actionStyle} onClick={this.props.onAction}>{this.props.action}</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

const _components = { default: ConfirmationPopup };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
