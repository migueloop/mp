import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Modal from 'react-bootstrap/lib/Modal';
import { PRODUCT } from 'helpers/constants';

class ModalEditResource extends Components {
  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.func.isRequired,
    product: React.PropTypes.object.isRequired,
    resource: React.PropTypes.number,
    update: React.PropTypes.func.isRequired,
  };

  render() {
    if (!this.props.resource) {
      return <div></div>;
    }

    const resource = this.props.product.resources.find(r => r.id === this.props.resource);
    let image = '';
    if (resource.type.startsWith(PRODUCT.RESOURCE.APPLICATION)) {
      image = '/public/images/placeholders/Documents.png';
    } else if (resource.type.startsWith(PRODUCT.RESOURCE.IMAGE)) {
      image = `/public/uploads/products/${this.props.product.id}/${resource.name}`;
    } else if (resource.type.startsWith(PRODUCT.RESOURCE.VIDEO)) {
      image = '/public/images/placeholders/Video.png';
    }

    return (
      <Modal show={this.props.show} onHide={this.props.hide} >
        <Modal.Header>
          Edit Resource
        </Modal.Header>

        <Modal.Body>
          <img src={image} style={{ maxHeight: 200, maxWidth: '100%', display: 'block', margin: '15px auto' }} alt="" />
          <label style={{ width: '100%' }}>
            <span>Name:</span>
            <input type="text" className="form-control" value={resource.name_custom}
              onChange={({ target: { value } }) => this.props.update('name_custom')(value)}
              />
          </label>
        </Modal.Body>
      </Modal>
    );
  }
}

const _components = { default: ModalEditResource };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
