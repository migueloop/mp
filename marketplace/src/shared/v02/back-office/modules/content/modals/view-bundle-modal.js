import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import BundleContentCmpt from 'v02/back-office/modules/bundles/components/front-bundle';
import { FormattedMessage } from 'react-intl';

class modalBundle extends Components {
  static propTypes = {
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    bundle: React.PropTypes.object.isRequired,
  };

  render() {
    const [BundleContent] = [BundleContentCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName="modal-wide">
        <Modal.Header>
          <FormattedMessage id="bundle" />
        </Modal.Header>
        <Modal.Body>
          { this.props.bundle && <BundleContent params={{ alias: this.props.bundle.alias }} /> }
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle="primary"
            onClick={this.props.onHide} ><FormattedMessage id="close" /></Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  default: connect(stateToProps)(modalBundle),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
