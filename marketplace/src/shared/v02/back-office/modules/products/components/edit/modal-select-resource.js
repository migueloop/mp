import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Pagination from 'react-bootstrap/lib/Pagination';
import Input from 'react-bootstrap/lib/Input';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { FormattedMessage } from 'react-intl';

class ModalSelectResource extends Components {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      itemPerPage: 12,
      search: '',
    };
  }

  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    resources: React.PropTypes.array.isRequired,
  };

  render() {
    const searchIcon = <Glyphicon glyph="search" />;
    const start = (this.state.page - 1) * this.state.itemPerPage;
    const filteredResources = this.props.resources.filter(r => r.nameCustom.indexOf(this.state.search) !== -1);
    const resources = filteredResources.slice(start, start + this.state.itemPerPage).map(resource => {
      const sImgPath = `/public/uploads/products/${resource.idProduct}/${resource.name}`;
      let resourceHtml = <img src={sImgPath} alt={resource.nameCustom} style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, margin: 'auto' }} />;
      if (resource.type.indexOf('image') === -1) {
        resourceHtml = (
          <div>
            <img src="/public/images/placeholders/resource.png" alt={resource.nameCustom} style={{ height: '150', display: 'block', margin: '0 auto' }} />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{resource.nameCustom}</p>
          </div>
        );
      }

      return (
        <Col ls={2} md={3} sm={4} xs={6} key={resource.id} onClick={() => this.props.onSelect(resource) } style={{ height: 'auto', cursor: 'pointer', marginTop: 10, marginBottom: 10 }} >
          <div className="thumbnail">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
              <div className="hover-container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                {resourceHtml}
                <div className="hover-actions" style={{ backgroundColor: 'rgba(150,150,150,0.2)' }}></div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <Modal show={this.props.show} onHide={this.props.hide} bsSize="large">
        <Modal.Header>
          <Col md={6}><Modal.Title style={{ marginTop: 5 }}><FormattedMessage id="select_resource" /></Modal.Title></Col>
          <Col md={4} mdOffset={2} style={{ marginBottom: -15 }}>
            <Input type="text" addonBefore={searchIcon} value={this.state.search} onChange={evt => this.setState({ search: evt.target.value, page: 1 })} />
          </Col>
        </Modal.Header>
        <Modal.Body><Row>{resources}</Row></Modal.Body>
        <Modal.Footer>
          <div style={{ textAlign: 'center', marginTop: -20, position: 'relative' }}>
            <Pagination prev next items={Math.ceil(filteredResources.length / this.state.itemPerPage)} maxButtons={3}
              activePage={this.state.page}
              onSelect={(evt, selected) => this.setState({ page: selected.eventKey })}
              style={{ display: filteredResources.length > this.state.itemPerPage ? '' : 'none' }}
              />
            <Button bsStyle="primary" onClick={this.props.hide} style={{ position: 'absolute', right: 0, top: '50%', marginTop: -10 }} >
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

const _components = { default: ModalSelectResource };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
