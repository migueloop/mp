import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { SaveItem } from 'helpers/items';
import { ITEM } from 'helpers/constants';
import Header from 'v02/back-office/generic-components/editable/header';
import TabsCmpt from 'v02/back-office/modules/bundles/components/edit/tabs/navigation';
import { Actions } from 'v02/flux';

class EditBundle extends Components {

  constructor(props) {
    super(props);
    console.log(this.props.currentBundle);
    this.state = {
      bundle: Object.assign({}, this.props.currentBundle),
    };
  }

  static requiredActionKeys = [
    'BackOffice.Bundles.fetchOne',
  ];

  /**
   * Update the state of curren bundle
   * @param oNewResource
   * @param sImage
   */
  handleModifiedImage = (oNewResource, sImage) => {
    const oTmpBundle = Object.assign({}, this.state.bundle);

    switch (sImage) {
      case ITEM.RESOURCES.LOGO:
        oTmpBundle.logo_info.url = oNewResource ? oNewResource.url : ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
        oTmpBundle.logo_info.id = oNewResource ? oNewResource.id : null;
        oTmpBundle.logo_info.type = oNewResource ? oNewResource.type : null;
        oTmpBundle.logo_id = oNewResource ? oNewResource.id : null;
        oTmpBundle.resources.push(oNewResource);
        // save to DB
        this.setState({
          bundle: oTmpBundle,
        }, () => { setTimeout(this.save('logo_info'), 150); });
        break;
      case ITEM.RESOURCES.MAIN_PICTURE:
        break;
      case ITEM.RESOURCES.EDITOR_LOGO:
        break;
      case ITEM.RESOURCES.RESOURCE:
        oTmpBundle.resources.push(oNewResource);
        this.setState({ bundle: oTmpBundle });
        break;
    }
  };


  /**
   * Call the action to delete a resource from the list of bundles resource.
   * This is triggered from the modal that shows all the resources uploaded
   * @param {object} oResource resource information
   */
  onDeleteResource = oResource => {
    const oBundle = Object.assign({}, this.state.bundle);
    let indexToDelete = -1;
    let isLogo = false;

    oBundle.state_id = ITEM.STATE.DRAFT;
    oBundle.state = ITEM.STATE.KEY.DRAFT;

    // look for the resource in the state
    // and remove it. Check also if is set as logo
    oBundle.resources.forEach((r, index) => {
      if (oResource.id === r.id) {
        indexToDelete = index;
        isLogo = oResource.id === this.state.bundle.logo_id;
      }
    });

    // check if the resource deleted is also the logo
    if (isLogo) {
      oBundle.logo_info.url = ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
      oBundle.logo_info.id = null;
      oBundle.logo_info.type = null;
      oBundle.logo_id = null;
    }

    // remove from resources and set state
    oBundle.resources.splice(indexToDelete, 1);
    this.setState({ bundle: oBundle });

    // call the action
    new Actions(this.props.tenant).Bundles.DeleteResource({
      id_item: this.state.bundle.id,
      id_resource: oResource.id,
    })
      .then(action => {
        this.props.dispatch(action);
      })
      .catch(err => {
        console.log('ERROR deleting bundle resource: ', err);
      });
  };


  /**
   * Get the list of resources of current bundle
   * @returns {array} of resources objects with information
   */
  getResources = () => {
    console.log(this.state.bundle.resources);
    if(this.state.bundle.resources){
      return this.state.bundle.resources.filter(oResource => oResource.type.startsWith('image') || oResource.type.startsWith('video'));
    }
  };


  /**
   * Throw the action when a new component is added to the bundle. Will dispatch an action with the id of the product
   * and the url logo in order to show it in the bundle components list
   * @param {object} oComponent contains id, logo, name and show_order fields. For now is a product
   */
  onAddComponent = oComponent => {
    new Actions(this.props.tenant).Bundles.AddComponent({
      id_item: this.state.bundle.id,
      component: oComponent,
    })
    .then(action => {
      const oBundle = Object.assign({}, this.state.bundle);

      oBundle.state_id = ITEM.STATE.DRAFT;
      oBundle.state = ITEM.STATE.KEY.DRAFT;
      oBundle.components.push(oComponent);
      this.setState({ bundle: oBundle });
      this.props.dispatch(action);
    })
    .catch(err => console.log('ERROR adding bundle component: ', err));
  };


  /**
   * Throw the action to delete a component from the bundle
   * @param {number} nComponentId the id of the component. For now is a product
   * @param {number} nOrder order inm which is shown
   */
  onDeleteComponent = (nComponentId, nOrder) => {
    new Actions(this.props.tenant).Bundles.DeleteComponent({
      id_item: this.state.bundle.id,
      id_component: nComponentId,
      show_order: nOrder,
    })
      .then(action => {
        const oBundle = Object.assign({}, this.state.bundle);

        oBundle.state_id = ITEM.STATE.DRAFT;
        oBundle.state = ITEM.STATE.KEY.DRAFT;

        // remove element from components array view in the exact position of show_order field
        oBundle.components.forEach((bc, index) => {
          if (+bc.show_order === nOrder) {
            oBundle.components.splice(index, 1);
          }
        });

        this.setState({ bundle: oBundle });
        this.props.dispatch(action);
      })
      .catch(err => {
        console.log('ERROR deleting bundle component: ', err);
      });
  };


  /**
   * Called when a new resource is uploaded
   * @param {array} The array given by browser when a resource is selected in system window. Usually the uploaded file information is in the position 0
   * @param {sImage} The target image that will contain the uploaded image. One of ITEMS.RESOURCES (logo, main_picture, editor_logo...)
   */
  onUpload = (aFiles, sImage) => {
    const oResource = aFiles[0];
    oResource.show_carousel = false;
    oResource.carousel_order = null;

    const oResourceData = {
      id_item: this.state.bundle.id,
      sImage,
      resource: oResource,
    };

    new Actions(this.props.tenant)
      .Bundles.AddResource(Object.assign({}, oResourceData))
      .then(action => {
        this.props.dispatch(action);
        // update state
        this.handleModifiedImage(action.bundle.resource, sImage);
      })
      .catch(err => {
        console.log('ERR: ', err);
      });
  };


  /**
   * MKP-905 Refactor me
   * Save to DB
   * @param {string, array} fields
   */
  save = field => () => {
    const oSaveInfo = {
      item: this.state.bundle,
      item_name: 'Bundle',
      fields: field,
      history: this.state.history,
      props: this.props,
    };

    // Save bundle and set the new state of the bundle
    SaveItem(oSaveInfo)
      .then(result => {
        result.state_id = ITEM.STATE.DRAFT;
        result.state = ITEM.STATE.KEY.DRAFT;
        this.setState({ bundle: result });
      })
      .catch(error => {
        console.log('Save Item error:', error);
      });
  };


  /**
   * Se the information to render the header such as function to save, update, upload logo
   * editor information, name of the bundle, etc...
   * @returns {object} with all the information needed
   */
  setHeaderInfo = () => {
    return {
      changeImage: this.handleModifiedImage,
      editor: this.state.bundle.editor,
      logoUrl: this.state.bundle.logoUrl,
      onUpload: this.onUpload,
      resources: this.getResources,
      showEditorLink: true,
      save: this.save,
      title: this.state.bundle.title,
      update: this.update,
    };
  };


  /**
   * Update the bundle state
   * @param {string} field name must match with the bundle object field
   */
  update = field => value => {
    const oBundle = Object.assign({}, this.state.bundle);

    if (field === ITEM.RESOURCES.LOGO) {
      oBundle.logo_info.id = value;
      oBundle.logo_id = value;
    }

    oBundle[field] = value;
    this.setState({
      bundle: oBundle,
    });
  };


  /**
   * Set resource show_carousel field in order to show it or not in the carousel
   * @param {object} oResource
   */
  toggleShowInCarousel = oResource => {
    new Actions(this.props.tenant)
      .Bundles.ToggleShowResourceCarousel({
        id_item: this.state.bundle.id,
        id_resource: oResource.id,
        show_carousel: oResource.show_carousel,
      })
      .then(action => {
        const oTmbBundle = Object.assign({}, this.state.bundle);

        oTmbBundle.state_id = ITEM.STATE.DRAFT;
        oTmbBundle.state = ITEM.STATE.KEY.DRAFT;
        oTmbBundle.resources.forEach(oTmpResource => {
          if (oTmpResource.id === oResource.id) {
            oTmpResource.show_carousel = oResource.show_carousel;
          }
        });
        this.setState({ bundle: oTmbBundle });
        this.props.dispatch(action);
      })
      .catch(err => {
        console.log('ERR: ', err);
      });
  };

  render() {
    const [Tabs] = [TabsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const children = React.Children.map(this.props.children, child => (
      React.cloneElement(child, {
        random: Math.random(),
        bundle: this.state.bundle,
        getResources: this.getResources,
        save: this.save,
        onAddComponent: this.onAddComponent,
        onDeleteComponent: this.onDeleteComponent,
        onDeleteResource: this.onDeleteResource,
        onUpload: this.onUpload,
        update: this.update,
        toggleShowInCarousel: this.toggleShowInCarousel,
      })
    ));

    return (
      <div className="container mp-bundles">
        <article itemScope itemType="http://schema.org/Product" className="mp-product h-product">

          <Row className="header">
            <Col md={6}>
              <Header {...this.setHeaderInfo()} />
            </Col>
          </Row>
          <Row className="menu">
            <Tabs bundle_id={this.state.bundle.id} openContactUsModal={this.openContactModal} forceRender={Math.random()} />
          </Row>
          <Row className="content">
            {children}
          </Row>
          <div style={{ clear: 'both' }}></div>
        </article>
      </div>
    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('tenant'),
    bundles: state.get('v02').get('backOffice').get('bundles').get('all').toJS(),
    currentBundle:  state.get('v02').get('backOffice').get('bundles').get('current').toJS(),
    notification: state.get('notification'),
  };
}

const _components = {
  default: connect(stateToProps)(EditBundle),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
