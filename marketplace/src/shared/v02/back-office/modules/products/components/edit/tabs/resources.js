import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { PRODUCT } from 'helpers/constants';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone';
import EditResourceModalCmpt from 'v02/back-office/modules/products/components/edit/modal-edit-resource';
import Actions from 'flux/actions';
import ModalBase from 'v02/back-office/generic-components/modals/modal-base';
import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import { FormattedMessage } from 'react-intl';
import { Actions as ActionsV02 } from 'v02/flux';

class Resources extends Components {
  constructor(props) {
    super(props);
    this.state = {
      deleteResource: null,
    };
    this.resourceTimeout = null;
  }

  static featureName() {
    return 'products.features.resources';
  }

  static contextTypes = {
    product: React.PropTypes.object,
    save: React.PropTypes.func,
    update: React.PropTypes.func,
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  onDrop = files => {
    const resource = {
      id: this.props.product.toJS().id,
      resource: {
        file: files[0],
      },
    };
    new Actions(this.props.tenant).Products.AddResource(resource)
    .then(action => this.props.dispatch(action));
  };

  groupResources(resources) {
    const oResources = { Videos: [], Images: [], Documents: [], Others: [] };

    return resources.reduce((previous, current) => {
      if (current.type.startsWith(PRODUCT.RESOURCE.APPLICATION)) {
        previous.Documents.push(current);
        return previous;
      } else if (current.type.startsWith(PRODUCT.RESOURCE.IMAGE)) {
        previous.Images.push(current);
        return previous;
      } else if (current.type.startsWith(PRODUCT.RESOURCE.VIDEO)) {
        previous.Videos.push(current);
        return previous;
      }

      previous.Others.push(current);
      return previous;
    }, oResources);
  }

  showResources(resources, placeholder) {
    return resources.map((resource, index) => {
      let resourceHtml = <img src="" alt="" />;

      if (resource.type.indexOf('image') == -1) {
        resourceHtml = (
          <img src={placeholder} alt={resource.name_custom} />
        );
      } else {
        resourceHtml = (
            <div className="image-wrapper" style={{ backgroundImage: `url(/public/uploads/products/${this.props.product.toJS().id}/${resource.name})` }}>
            </div>
        );
      }

      return (
        <Col key={index} xs={6} sm={4} md={3} lg={3}>
          <div className="thumbnail">
            <div className="thumbnail-caption">{resource.name_custom}</div>
            {resourceHtml}
            <div className="hover-bg">
              <div className="hover-actions">
                <Button className="btn-view" onClick={this.openModal(resource)}><FormattedMessage
                  id="preview" /></Button>
                <Button className="btn-edit"
                  onClick={() => this.setState({ editResource: resource.id }) }><FormattedMessage
                    id="modify" /></Button>
                <Button className="btn-delete" onClick={() => {
                  this.setState({ deleteResource: resource });
                }}><FormattedMessage id="remove" /></Button>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }

  openModal = resource => () => {
    this.setState({
      modalType: resource.type,
      showModal: true,
      resource,
    });
  };

  deleteResource = () => {
    const resource = this.state.deleteResource;
    const id = this.props.product.toJS().id;
    new Actions(this.props.tenant).Products.DeleteResource({ id, resource })
    .then(action => this.props.dispatch(action));
    this.setState({ deleteResource: null });
  };

  updateResource = field => value => {
    const resources = this.props.product.toJS().resources.map(r => {
      if (r.id != this.state.editResource) {
        return r;
      }
      if (this.resourceTimeout) {
        clearTimeout(this.resourceTimeout);
      }

      this.resourceTimeout = setTimeout(this.context.save('resources'), 1000);

      const obj = {};
      obj[field] = value;
      return Object.assign({}, r, obj);
    });
    //
    this.context.update('resources')(resources);
  };

  render() {
    const [ConfirmationPopup, EditResourceModal] = [ConfirmationPopupCmpt, EditResourceModalCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const resources = this.groupResources(this.props.product.toJS().resources);
    const sections = Object.keys(resources).map((sectionTitle, index) => {
      let placeholder = undefined;
      if (sectionTitle !== 'Images') {
        placeholder = `/public/images/placeholders/${sectionTitle}.png`;
      }
      return (
        <div key={index}>
          <Row>
            <Col xs={12}>
              <h3>{ this.format({ id: sectionTitle.toLowerCase() })}</h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {this.showResources(resources[sectionTitle], placeholder)}
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <div>
        <Row>
          <Col md={3} mdOffset={9}>
            <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }} onDrop={this.onDrop} >
              <Button bsStyle="primary" style={{ width: '100%', padding: 0 }}><FormattedMessage id="add_resource" /></Button>
            </Dropzone>
          </Col>
        </Row>
        {sections}
        <ModalBase show={this.state.showModal} onHide={() => this.setState({ showModal: false })} resourceSpecification={this.state.resource} type={this.state.modalType} />
        <ConfirmationPopup show={!!this.state.deleteResource} onHide={() => this.setState({ deleteResource: null })} onAction={ this.deleteResource } actionStyle="danger" action="Delete" title={ this.format({ id: 'confirmation' }) } >
          <div><FormattedMessage id="confirm_delete_resource" /></div>
        </ConfirmationPopup>

        <EditResourceModal resource={this.state.editResource}
          product={this.props.product.toJS()}
          show={!!this.state.editResource}
          hide={() => this.setState({ editResource: null })}
          update={this.updateResource}
          { ...this.props }
          />

      </div>
    );
  }
}

const _components = { default: Resources };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
