import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { PRODUCT } from 'helpers/constants';
import { connect } from 'react-redux';
import ModalBase from 'v02/front-office/generic-components/modals/modal-base';
import { PRODUCT_RESOURCES } from 'helpers/constants/features';
import HorizontalResourceListCmpt from '../_common/horizontal-resource-list';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('frontOffice').get('products').get('current'),
}));

class Resources extends Components {
  constructor(props) {
    super(props);
    this.state = {
      modalType: '',
      showModal: false,
    };
  }

  groupResources(resources) {
    const oResources = { Videos: [], Images: [], Documents: [], Others: [] };
    return resources.reduce((previous, current) => {
      if (current.type.startsWith(PRODUCT.RESOURCE.APPLICATION)) {
        previous.Documents.push(current);
        return previous;
      }
      if (current.type.startsWith(PRODUCT.RESOURCE.IMAGE)) {
        previous.Images.push(current);
        return previous;
      }
      if (current.type.startsWith(PRODUCT.RESOURCE.VIDEO)) {
        previous.Videos.push(current);
        return previous;
      }
      previous.Others.push(current);
      return previous;
    }, oResources);
  }

  openModal = resource => () => {
    this.setState({
      modalType: resource.type,
      showModal: true,
      resource,
    });
  };

  closeModal = () => {
    this.setState({
      modalType: '',
      showModal: false,
    });
  };


  render() {
    // Tenant specific
    const tenant = this.props.tenant;
    const product = this.props.product.toJS();

    if (!product.availableFeatures.find(productFeatures => PRODUCT_RESOURCES.id === productFeatures.idFeature)) {
      return <div>Not Available</div>;
    }
    const [HorizontalResourceList] = [HorizontalResourceListCmpt].map(Component => Component.get(tenant));
    const resources = this.groupResources(product.resources);
    const sections = Object.keys(resources).map(sectionTitle => {
      let placeholder = undefined;
      if (sectionTitle !== 'Images') {
        placeholder = `/public/images/placeholders/${sectionTitle}.png`;
      }
      return (
          <HorizontalResourceList key={sectionTitle} title={sectionTitle} onClick={this.openModal}
            resources={resources[sectionTitle]} placeholder={placeholder} />
      );
    });

    return (
      <div className="mp-tab mp-tab-resources">
        {/* Resources */}
        <div className="mp-blocks resources">
          {sections}
        </div>
        {/* Modal (medias) */}
        <ModalBase show={this.state.showModal} onHide={this.closeModal}
          resourceSpecification={this.state.resource} type={this.state.modalType} />
      </div>
    );
  }
}


const _components = {
  default: connector(Resources),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
