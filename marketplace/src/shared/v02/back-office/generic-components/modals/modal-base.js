import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

import Document from './document';
import Image from './image';
import Form from './form';
import Video from './video';

import { getProductResourceURL } from 'helpers/product';
import { getResourceType } from 'helpers/modal';
import { MODAL, MODELS } from 'helpers/constants';
import MdSend from 'react-icons/lib/md/send';
import MdFileDownload from 'react-icons/lib/md/file-download';
import * as models from './view-models';
import Action from 'flux/actions';
import { FormattedMessage } from 'react-intl';

class ModalBase extends Components {
  constructor(props) {
    super(props);
    this.state = {
      modalType: '',
      formData: {},
      sendForm: false,
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  componentWillReceiveProps(props) {
    this.getContentType(props);
  }

  getContentType = props => {
    const modalType = getResourceType(props.modalType);

    if (modalType === MODAL.CONTENT.FORM) {
      const model = new models.FormViewModel(props.formToShow);
      const modelName = model.getModels();

      this.setState({ modalType });
      this.setFormModel(modelName);
    }
  };

  onChangeFormField = evt => {
    const formData = Object.assign({}, this.state.formData);
    formData[evt.target.name] = evt.target.value;
    formData.type = this.props.formToShow;
    this.setState({ formData });
  };

  sendForm = evt => {
    const formData = Object.assign({}, this.state.formData);
    // set product id to send it
    formData[MODELS.MESSAGE.PRODUCT.PRODUCTID] = this.props.resourceSpecification.id_item;

    this.setState({ formData }, () => {
      // API CALL
      new Action(this.props.tenant)
      .Message.send(this.state.formData).then(action => {
        // dispatch Action to Store/Reducer
        this.props.dispatch(action);
        this.props.onHide();
      });
    });
  };

  setFormModel = modelName => {
    const formData = Object.assign({}, this.state.formData);
    for (const key of Object.keys(modelName)) {
      formData[key] = '';
    }
    // set default gender
    formData[MODELS.MESSAGE.PRODUCT.SEX] = MODELS.MESSAGE.PRODUCT.FEMALE;
    this.setState({ formData });
  };

  setModalFooter = (sResourceURL, sModalContentType) => {
    const formattedMessage = this.context.intl.formatMessage;
    if (sResourceURL) {
      // if is a MEDIA VIEWER MODAL, set a DOWNLOAD button
      if (sModalContentType !== MODAL.CONTENT.FORM) {
        // set button DOWNLOAD BUTTON
        return (
          <Modal.Footer>
            <a href={sResourceURL} download title={ formattedMessage({ id: 'download' }) } className="btn btn-default">
              <MdFileDownload />
              <FormattedMessage id="download" />
            </a>
            <Button onClick={this.props.onHide}>Fermer</Button>
          </Modal.Footer>
        );
      }
      // if is a FORM MODAL, set a SAVE button
      if (sModalContentType === MODAL.CONTENT.FORM) {
        return (
          <Modal.Footer>
            <Button title={ formattedMessage({ id: 'send' }) } onClick={this.sendForm} >
              <MdSend />
              <span title={ formattedMessage({ id: 'send' }) } >&nbsp;<FormattedMessage id="send" /></span>
            </Button>
            <Button onClick={this.props.onHide}>Annuler</Button>
          </Modal.Footer>
        );
      }
    }
  };

  render() {
    let sComponentToLoad = <h4>{MODAL.MESSAGE.ERROR.CONTENT.NO_RESOURCE_FOUND}</h4>;
    let sModalContentType;
    let sResourceURL;
    let sTitle = MODAL.MESSAGE.ERROR.HEADER.NO_RESOURCE_FOUND;
    let oModalFooter = null;

    if (this.props.resourceSpecification) {
      // get resource URL
      // TODO: Refactor this component to V02
      sResourceURL =
        getProductResourceURL(this.props.resourceSpecification.idProduct || this.props.resourceSpecification.id_product, this.props.resourceSpecification.name);

      // set modal Title
      sTitle = this.props.resourceSpecification.name_custom || '';

      // load proper component
      sModalContentType =
        this.props.modalType ? getResourceType(this.props.modalType) : getResourceType(this.props.type);
      // sModalContentType = getResourceType(this.props.modalType);

      switch (sModalContentType) {
        case MODAL.CONTENT.APPLICATION:
          sComponentToLoad = <Document URL={sResourceURL} />;
          break;
        case MODAL.CONTENT.FORM:
          sComponentToLoad = (
            <Form formToShow={this.props.formToShow} fields={this.state.formData}
              onChangeFormField={this.onChangeFormField}
              />
          );
          sTitle = MODAL.MESSAGE.CONTACT.HEADER;
          break;
        case MODAL.CONTENT.IMAGE:
          sComponentToLoad = <Image URL={sResourceURL} alt={sTitle} />;
          break;
        case MODAL.CONTENT.VIDEO:
          sComponentToLoad = <Video URL={sResourceURL} videoType={this.props.modalType} />;
          break;
        default:
          break;
      }
    }

    // if we have a valid resource, set download/save button
    oModalFooter = this.setModalFooter(sResourceURL, sModalContentType) || '';

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} className="resource-modal" bsSize="lg" animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{sTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="centered"> {sComponentToLoad}</div>
        </Modal.Body>
        {oModalFooter}
      </Modal>
    );
  }
}

export default ModalBase;
