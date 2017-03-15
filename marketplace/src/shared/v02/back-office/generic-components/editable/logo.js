import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Dropzone from 'react-dropzone';
import Popover from 'react-bootstrap/lib/Popover';
import Overlay from 'react-bootstrap/lib/Overlay';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ReactDOM from 'react-dom';
import { ITEM } from 'helpers/constants';
import ModalSelectResourceCmpt from 'v02/back-office/modules/modals/modal-select-resource';
import { FormattedMessage } from 'react-intl';

class Logo extends Components {

  constructor(props) {
    super(props);
    this.state = {
      showPopoverButtons: false,
      showModalSelectResource: false,
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    changeImage: React.PropTypes.func.isRequired,
    logoUrl: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    resources: React.PropTypes.func.isRequired,
  };


  /*
  * When a resource in the modal is selected, call to parent function indicating that we are changing logo image
  * @param {object} oResource has the information of the resource
  *
  */
  onSelectResource = oResource => {
    this.props.changeImage(oResource, ITEM.RESOURCES.LOGO);
  };


  onUpload = files => {
    this.props.onUpload(files, ITEM.RESOURCES.LOGO);
    this.togglePopoverButtons();
  };


  /*
  * Remove the popover of buttons and call to parent function to display a generic placeholder and save it in th DB and in the state
  */
  removeLogo = () => {
    this.togglePopoverButtons();
    this.props.changeImage(null, ITEM.RESOURCES.LOGO);
  };


  /*
  * Compose the view of the popover shown when the logo image is clicked. Three buttons are shown: Select from existing (will call the ModalSelectResourceCmpt),
  * upload (will show the client OS window to select a file) and remove the logo shown (will place a generic image)
  */
  selectLogoPopover = () => {
    const formattedMessage = this.context.intl.formatMessage;
    return (
      <Popover id="popoverUpdateLogo" title={ formattedMessage({ id: 'update_logo' }) } className="popover-change-logo" >
        <Row>
          <Col xs={12} md={12} lg={12} sm={12}>
            <Button bsStyle="info"
              onClick={this.toggleModalSelectResource}
              style={{ width: '100%' }}><FormattedMessage id="select" /></Button>
          </Col>
          <Col xs={12} md={12} lg={12} sm={12}>
            <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }}
              onDrop={this.onUpload}
              accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}>
              <Button bsStyle="success"
                style={{ width: '100%' }}
                className="edit-logo-other-actions"><FormattedMessage id="upload" /></Button>
            </Dropzone>
          </Col>
          <Col xs={12} md={12} lg={12} sm={12} className="edit-logo-other-actions">
            <Button bsStyle="warning"
              style={{ width: '100%', marginTop: '-1%', display: this.state.showPopoverButtons && !this.props.logoUrl.includes('placeholders') ? 'block' : 'none' }}
              onClick={this.removeLogo}><FormattedMessage id="withdraw" /></Button>
          </Col>
        </Row>
      </Popover>
    );
  };


  /*
  * Called when we have to show or hide the Modal Select Resource. Always at the beginning set to hide the popover with actions buttons shown when click the logo img
  */
  toggleModalSelectResource = () => {
    this.setState({ showPopoverButtons: false });
    this.setState({ showModalSelectResource: !this.state.showModalSelectResource });
  };


  /*
  * Show or hide popover with action buttons when the logo img is clicked
  */
  togglePopoverButtons = () => {
    this.setState({ showPopoverButtons: !this.state.showPopoverButtons });
  };


  render() {
    let [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <Col md={4}>
        <img className="photo u-photo item-header-logo"
          src={this.props.logoUrl}
          alt={this.props.name}
          itemProp="image"
          target="item_editable_img_logo"
          onClick={this.togglePopoverButtons} />
        <Overlay placement="bottom"
          show={this.state.showPopoverButtons}
          container={this}
          target={() => ReactDOM.findDOMNode(this.refs.item_editable_img_logo)}>
          {this.selectLogoPopover()}
        </Overlay>
        <ModalSelectResource show={this.state.showModalSelectResource}
          hide={this.toggleModalSelectResource}
          onSelect={this.onSelectResource}
          resources = {this.props.resources}
          />
      </Col>
    );
  }

}

export default Logo;
