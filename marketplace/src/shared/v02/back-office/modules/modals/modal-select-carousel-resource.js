import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Pagination from 'react-bootstrap/lib/Pagination';
import Input from 'react-bootstrap/lib/Input';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { FormattedMessage } from 'react-intl';

class ModalSelectCarouselResource extends Components {

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      itemPerPage: 12,
      resourceIndexToDelete: -1,
      resourceToDelete: {},
      resourceToView: {},
      search: '',
      show: false,
      aCarouselResources: [],
      showModalDeleteResource: false,
      showModalViewResource: false,
    };
  }


  static propTypes = {
    show: React.PropTypes.bool.isRequired,
    hide: React.PropTypes.func.isRequired,
    onDeleteResource: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onUpload: React.PropTypes.func,
    resources: React.PropTypes.func.isRequired,
  };


  /**
   * Called when the user confirm in the DELETE RESOURCE MODAL that wants to delete it.
   * Will call the props function to dispatch the right action
   */
  confirmDeleteResource = () => {
    // remove from the state array of available resources the removed one
    const aCarouselResources = this.state.aCarouselResources;
    aCarouselResources.splice(this.state.resourceIndexToDelete, 1);

    this.props.onDeleteResource(this.state.resourceToDelete);

    this.setState({
      aCarouselResources,
      showModalDeleteResource: false,
      resourceToDelete: {},
    });
  };


  /**
   * Called when an user ask for delete a resource in the list of the resource.
   * Will set in the state the resource info waiting to confirm in the next modal which is asking to confirm deletion
   * @param {object} oResource resource information
   */
  deleteResource = (oResource, nIndex) => event => {
    event.preventDefault();

    this.setState({
      resourceIndexToDelete: nIndex,
      resourceToDelete: oResource,
      showModalDeleteResource: true,
    }, () => {setTimeout(() => {}, 300);});
  };


  /**
   * Handle when the checkbox of a resource shown is clicked in order to show it or not in the bundle carousel
   * @param {object} event of the click
   * @param {object} oResource resource information
   */
  handleClickShowInCarousel = event => (oResource, nIndex) => {
    const aCarouselResourcesShown = this.state.aCarouselResources;
    aCarouselResourcesShown[nIndex] = event.target.checked;

    oResource.show_carousel = event.target.checked;
    this.setState({ aCarouselResources: aCarouselResourcesShown }, () => {
      this.props.onSelect(oResource);
    });
  };


  /**
   * Get the resources to show in the modal in a proper component and style
   * @returns {object} React component with the view conating all resources
   */
  getResources = () => {
    const start = (this.state.page - 1) * this.state.itemPerPage;
    let filteredResources = this.props.resources();
    const aCarouselResources = this.state.aCarouselResources;

    filteredResources = filteredResources.filter(r => r.nameCustom.indexOf(this.state.search) !== -1);

    const resources = filteredResources.slice(start, start + this.state.itemPerPage).map((oResource, index) => {
      aCarouselResources[index] = oResource.show_carousel ? true : false;

      // get the resource and inject it in a IMG element
      let resourceHtml = (
        <div>
          <img src={oResource.url} alt={oResource.nameCustom} className="modal-resources-image" />
          <div className="hover-container">
            <div className="hover-actions">
              <Button
                bsStyle="info"
                onClick={ this.viewResource(oResource) }>
                <FormattedMessage id="visualize" />
              </Button>
              <Button
                bsStyle="danger"
                onClick={ this.deleteResource(oResource, index) }>
                <FormattedMessage id="remove" />
              </Button>
            </div>
          </div>
        </div>

      );

      // If the resource is not an image, show a generic picture
      if (oResource.type.indexOf('image') === -1) {
        resourceHtml = (
          <div className="modal-resources-no-image">
            <img src="/public/images/placeholders/resource.png" alt={oResource.nameCustom} />
          </div>
        );
      }

      // return view with the list of resources
      return (
        <Col
          ls={2} md={3} sm={4} xs={6}
          key={oResource.id}
          className="thumbnail-resource" >

          <div className="thumbnail-resource-caption">
            {oResource.nameCustom}
          </div>

          <div className="thumbnail-resource-img">
            <div>
              {resourceHtml}
            </div>
          </div>

          <div className="thumbnail-resource-footer">
            <input
              type="checkbox"
              checked={ aCarouselResources[index] ? aCarouselResources[index] : oResource.show_carousel }
              onClick={ event => {
                oResource.show_carousel = !oResource.show_carousel;
                this.handleClickShowInCarousel(event)(Object.assign({}, oResource), index);
              }}
              value={ oResource.id } />
            <label><FormattedMessage id="include_in_carousel" /></label>
          </div>

        </Col>
      );
    });

    return resources;
  };


  /**
   * Return the React object to show in the confirmation
   * @returns {XML}
   */
  getResourceToDelete = () => {
    return (
      <div>
        <img
          src={this.state.resourceToDelete.url}
          alt={this.state.resourceToDelete.nameCustom}
          style={{ maxWidth: '25%', transform: 'translateX(-50%)', left: '50%', display: 'block', position: 'relative' }} />
      </div>
    );
  };


  /**
   * Create the image React component with the url of the resource to see and set proper styles to center in the modal
   * @returns {object} React component with the img of the resource
   */
  getResourceToView = () => {
    return (
      <div>
        <img
          src={this.state.resourceToView.url}
          alt={this.state.resourceToView.nameCustom}
          style={{ maxWidth: '100%', transform: 'translateX(-50%)', left: '50%', display: 'block', position: 'relative' }} />
      </div>
    );
  };


  /**
   * Get the icon to show in the search bar
   * @returns {XML} the react component linked to the icon
   */
  getSearchIcon = () => {
    return (<Glyphicon glyph="search" />);
  };


  /**
   * Handle upload a new file. Then re render the in order to show the new resource uploaded
   * @param {object} files
   */
  onUpload = files => {
    this.props.onUpload(files, 'resource');

    // force render in order to show in the modal the new uploaded resource
    setTimeout(() => {
      this.forceUpdate();
    }, 1200);
  };


  /**
   * Toggle the state of the boolean to show or not the modal to confirm the resource deletion
   */
  toggleModalDeleteResource = () => {
    this.setState({ showModalDeleteResource: !this.state.showModalDeleteResource });
  };


  /**
   * Toggle the state of the boolean to show a resource bigger
   */
  toggleModalViewResource = () => {
    this.setState({
      showModalViewResource: !this.state.showModalViewResource,
      resourceToView: {},
    });
  };


  viewResource = oResource => event => {
    event.preventDefault();
    this.setState({
      showModalViewResource: true,
      resourceToView: oResource,
    });
  };


  render() {
    const filteredResources = this.props.resources().filter(resource => resource.nameCustom.indexOf(this.state.search) !== -1);
    let buttonUpload = (<div></div>);

    if (this.props.onUpload) {
      buttonUpload = (
        <Dropzone
          style={{ width: 'auto', height: 'auto', border: 'none' }}
          onDrop={this.onUpload}
          accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')} >
            <Button bsStyle="success"><FormattedMessage id="download" /></Button>
        </Dropzone>
      );
    }

    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.hide}
          bsSize="large"
          className="modal-select-resource" >
          <Modal.Header>
            <Col md={4}>
              <Modal.Title><FormattedMessage id="select_resource" /></Modal.Title>
            </Col>
            <Col md={2} className="modal-upload-resource-btn">
              {buttonUpload}
            </Col>
            <Col md={4} mdOffset={2} className="search-box">
              <Input
                type="text"
                addonBefore={this.getSearchIcon()}
                value={this.state.search}
                onChange={evt => this.setState({ search: evt.target.value, page: 1 })} />
            </Col>
          </Modal.Header>

          <Modal.Body><Row>{ this.getResources() }</Row></Modal.Body>

          <Modal.Footer>
            <div>
              <Pagination
                prev next items={Math.ceil(filteredResources.length / this.state.itemPerPage)}
                maxButtons={3}
                activePage={this.state.page}
                onSelect={ (evt, selected) => this.setState({ page: selected.eventKey })}
                style={{ display: filteredResources.length > this.state.itemPerPage ? '' : 'none' }} />
                <Button bsStyle="primary" className="close-modal" onClick={this.props.hide}><FormattedMessage id="close" /></Button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModalDeleteResource} onHide={this.toggleModalDeleteResource} bsSize="large" >
          <Modal.Header><h4><FormattedMessage id="delete_resource" /></h4></Modal.Header>
          <Modal.Body>
            <Row style={{ textAlign: 'center' }}><h4><FormattedMessage id="confirm_delete_resource" /></h4></Row>
            <Row>{ this.getResourceToDelete() }</Row>
          </Modal.Body>

          <Modal.Footer>
            <div>
              <Button bsStyle="danger" onClick={this.confirmDeleteResource}><FormattedMessage id="remove" /></Button>
              <Button bsStyle="primary" onClick={this.toggleModalDeleteResource}><FormattedMessage id="close" /></Button>
            </div>
          </Modal.Footer>
        </Modal>


        <Modal
          show={this.state.showModalViewResource}
          onHide={this.toggleModalViewResource}
          bsSize="large" >

          <Modal.Header>Voir la ressource</Modal.Header>

          <Modal.Body>
            <Row>
              { this.getResourceToView() }
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <div>
              <Button
                bsStyle="primary"
                onClick={this.toggleModalViewResource}><FormattedMessage id="close" /></Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}


const _components = {
  default: connect(stateToProps)(ModalSelectCarouselResource),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
