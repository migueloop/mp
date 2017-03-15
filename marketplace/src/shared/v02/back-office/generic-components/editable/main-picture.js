import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Button from 'react-bootstrap/lib/Button';
import Dropzone from 'react-dropzone';
import ModalSelectResourceCmpt from 'v02/back-office/modules/shared/modals/modal-select-resource';
import { FormattedMessage } from 'react-intl';

@connect(state => {
  try {
    const props = {
      tenant: state.get('v02').get('common').get('tenant').get('name'),
    };
    return props;
  }
  catch (e) {
    throw new Error(JSON.stringify({
      code: 500,
      message: 'Error parsing store',
      stack: e.stack,
    }));
  }
}) class MainPicture extends Components {
  constructor(props) {
    super(props);
    this.__dirname = __dirname;
    this.state = {
      changeMainPicture: false,
      hoverImage: false,
      showModalSelectResource: false,
      showRemovePictureButton: false,
    };
  }

  static contextTypes = {
    changeImage: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
  };

  static propTypes = {
    pictureUrl: React.PropTypes.string.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    pictureToChange: React.PropTypes.string.isRequired,
    resources: React.PropTypes.func.isRequired,
  };


  onMouseOverImage = () => {
    this.setState({ hoverImage: true });
  };


  onMouseOutImage = () => {
    this.setState({ hoverImage: false });
  };


  /*
   * When a resource in the modal is selected, call to parent function indicating that we are changing logo image
   * @param {object} oResource has the information of the resource
   *
   */
  onSelectResource = oResource => {
    this.context.changeImage(oResource, this.props.pictureToChange);
  };


  onUpload = files => {
    this.props.onUpload(files, this.props.pictureToChange);
    this.onMouseOutImage();
  };


  removeMainPicture = () => {
    this.context.changeImage(null, this.props.pictureToChange);
  };


  setShowRemoveImageButton = s => {
    this.props.pictureUrl.includes('placeholders') ? this.setState({ showRemovePictureButton: false }) : this.setState({ showRemovePictureButton: true });
  };


  showModalResource = () => {
    this.setState({ showModalSelectResource: true });
  };


  toggleModalSelectResource = () => {
    this.setState({ showModalSelectResource: !this.state.showModalSelectResource });
  };


  render() {
    let [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div>
        <div className="thumbnail" onMouseOver={this.onMouseOverImage} onMouseOut={this.onMouseOutImage} >

          <div className="hover-container">
            <img src={this.props.pictureUrl} className="item-bo-main-picture" />

            <div className="hover-actions">

              <Button bsStyle="info" onClick={this.showModalResource} ><FormattedMessage id="Sélectionner" /></Button>
              <Dropzone style={{ width: '100%', height: 'auto', border: 'none', textAlign: 'center' }} onDrop={this.onUpload} accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}>
                <Button bsStyle="success" className="edit-logo-other-actions"><FormattedMessage id="Télécharger" /></Button>
              </Dropzone>
              <Button bsStyle="default" onClick={this.removeMainPicture}
                style={{ display: this.state.hoverImage && !this.props.pictureUrl.includes('placeholders') ? 'block' : 'none' }}><FormattedMessage id="Retirer" /></Button>

            </div>

          </div>
        </div>

        <ModalSelectResource show={this.state.showModalSelectResource}
          hide={this.toggleModalSelectResource}
          onSelect={this.onSelectResource}
          resources = {this.props.resources}
          />
      </div>
    );
  }
}

const _components = {
  default: MainPicture,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
