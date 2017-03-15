import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
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
      show: false,
    };
  }


  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    resources: React.PropTypes.func.isRequired,
  };

  static contextTypes = {
    intl: React.PropTypes.object,
  };


  getSearchIcon = () => {
    return (<Glyphicon glyph="search" />);
  };


  getResources = () => {
    const start = (this.state.page - 1) * this.state.itemPerPage;
    let filteredResources = this.props.resources();

    filteredResources = filteredResources.filter(r => r.nameCustom.indexOf(this.state.search) !== -1);

    const resources = filteredResources.slice(start, start + this.state.itemPerPage).map(resource => {
      // get the resource and inject it in a IMG element
      let resourceHtml = (
        <img src={resource.url} alt={resource.name_custom} className="modal-resources-image" />
      );

      // If the resource is not an image, show a generic picture
      if (resource.type.indexOf('image') === -1) {
        resourceHtml = (
          <div className="modal-resources-no-image">
            <img src="/public/images/placeholders/resource.png" alt={resource.name_custom} />
            <p >{resource.name_custom}</p>
          </div>
        );
      }

      // return view with the list of resources
      return (
        <Col
          ls={2} md={3} sm={4} xs={6} key={resource.id} onClick={() => this.props.onSelect(resource) }
          style={{ height: 'auto', cursor: 'pointer', marginTop: 10, marginBottom: 10 }} >
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

    return resources;
  };


  render() {
    const filteredResources = this.props.resources().filter(resource => resource.nameCustom.indexOf(this.state.search) !== -1);

    return (
      <Modal show={this.props.show} onHide={this.props.hide} bsSize="large" className="modal-select-resource">
        <Modal.Header>
          <Col md={6}>
            <Modal.Title>Sélectionner une ressource</Modal.Title>
          </Col>
          <Col md={4} mdOffset={2} className="search-box">
            <Input
              type="text" addonBefore={this.getSearchIcon()}
              value={this.state.search}
              onChange={evt => this.setState({ search: evt.target.value, page: 1 })} />
          </Col>
        </Modal.Header>

        <Modal.Body>
          <Row>
            {this.getResources()}
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <div>
            <Pagination
              prev next items={Math.ceil(filteredResources.length / this.state.itemPerPage)}
              maxButtons={3}
              activePage={this.state.page} style={{}}
              onSelect={(evt, selected) => this.setState({ page: selected.eventKey })}
              style={{ display: filteredResources.length > this.state.itemPerPage ? '' : 'none' }} />
            <Button bsStyle="primary" onClick={ this.props.hide }><FormattedMessage id="close" /></Button>
          </div>
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
  default: connect(stateToProps)(ModalSelectResource),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
