import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Dropzone from 'react-dropzone';
import { FormattedMessage } from 'react-intl';

class ModalSlideshow extends Components {

  static propsTypes = {
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.func.isRequired,
    resources: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  onDrop = pos => evt => {
    this.props.onUpload(pos, evt);
  };

  onDelete = resource => () => {
    this.props.onDelete(resource);
  };

  onSelectFromResource = position => () => {
    this.props.onSelect(position);
  };

  render() {
    const hoverStyle = {
      position: 'absolute',
      top: '50%',
      marginTop: '-66px',
      left: 0,
      right: 0,
    };

    const slideshow = this.props.resources.map((resource, i) => {
      const html = (
        <Col key={i} xs={4}>
          <div className="thumbnail">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
              <div className="hover-container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <img src={`/public/uploads/products/${this.props.product.id}/${resource.name}`}
                  style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, margin: 'auto' }}
                  />
                <div className="hover-actions" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                  <div style={hoverStyle}>
                    <Row><Button bsStyle="info" onClick={this.onSelectFromResource(i + 1)}><FormattedMessage id="select" /></Button></Row>
                    <Row>
                      <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }}
                        onDrop={this.onDrop(i + 1)}
                        accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}
                        >
                        <Button bsStyle="success"><FormattedMessage id="upload" /></Button>
                      </Dropzone>
                    </Row>
                    <Row><Button bsStyle="danger" onClick={this.onDelete(resource)}><FormattedMessage id="remove" /></Button></Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
      return html;
    });

    if (slideshow.length < 6) {
      slideshow.push(
        <Col xs={4} key="newSlide" style={{ cursor: 'pointer' }}>
          <div className="thumbnail" style={{ cursor: 'pointer' }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
              <div className="hover-container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <img src="/public/images/placeholders/image_add.png"
                  style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, margin: 'auto' }}
                  />
                <div className="hover-actions" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                  <div style={{ ...hoverStyle, marginTop: -44 }}>
                    <Row><Button bsStyle="info" onClick={this.onSelectFromResource(slideshow.length + 1)}><FormattedMessage id="select" /></Button></Row>
                    <Row>
                      <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }}
                        onDrop={this.onDrop(slideshow.length + 1)}
                        accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}
                        >
                        <Button bsStyle="success"><FormattedMessage id="upload" /></Button>
                      </Dropzone>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    }

    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header><Modal.Title><FormattedMessage id="images" /></Modal.Title></Modal.Header>
        <Modal.Body><Row>{slideshow}</Row></Modal.Body>
        <Modal.Footer><Button bsStyle="primary" onClick={this.props.hide}><FormattedMessage id="close" /></Button></Modal.Footer>
      </Modal>
    );
  }
}

const _components = { default: ModalSlideshow };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
