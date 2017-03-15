import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import MobileIcon from 'react-icons/lib/fa/mobile';
import LineIcon from 'react-icons/lib/fa/mobile-phone';
import QuestionIcon from 'react-icons/lib/fa/question-circle';
import SaasIcon from 'react-icons/lib/fa/mixcloud';
import MaterialIcon from 'react-icons/lib/md/devices';
import ServiceIcon from 'react-icons/lib/md/room-service';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { PRODUCT } from 'helpers/constants';

import RegularLinkCmpt from './regular-link';
import MobileCmpt from './mobile';

if (process.browser) {
  require('./index.css');
}

const onChangeType = ({ target }) => console.log('onChangeType::', target.value);
const onChange = type => data => console.log('onChange::', type, '::', data);

class ProductType extends Components {
  saveLinks = () => this.props.save('links')({ links: this.props.links.filter(link => link.url.length > 0) });
  render() {
    const [RegularLink, Mobile] = [RegularLinkCmpt, MobileCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let Icon;
    let title;
    let Component;
    switch (this.props.type) {
      case PRODUCT.TYPE.MOBILE:
        Icon = MobileIcon;
        title = 'Application Mobile';
        Component = Mobile;
        break;
      case PRODUCT.TYPE.SERVICE:
        Icon = ServiceIcon;
        title = 'Service';
        Component = RegularLink;
        break;
      case PRODUCT.TYPE.SAAS:
        title = 'Application SaaS';
        Icon = SaasIcon;
        Component = RegularLink;
        break;
      case PRODUCT.TYPE.MATERIAL:
        Icon = MaterialIcon;
        title = 'Matérial & device';
        Component = RegularLink;
        break;
      case PRODUCT.TYPE.LINE:
        Icon = LineIcon;
        title = 'Line';
        Component = RegularLink;
        break;
      default:
        Icon = QuestionIcon;
        title = 'No type set';
        Component = RegularLink;
        break;
    }
    return (
      <div className="mp-sidebar">
        <Input
          value={this.props.type}
          type="select"
          label="Sélectionnez un type de produit"
          placeholder="select"
          onChange={ onChangeType }
          >
          <option value={PRODUCT.TYPE.MOBILE}>Application Mobile</option>
          <option value={PRODUCT.TYPE.MATERIAL}>{'Matérial & device'}</option>
          <option value={PRODUCT.TYPE.SAAS}>Application SaaS</option>
          <option value={PRODUCT.TYPE.SERVICE}>Service</option>
          <option value={PRODUCT.TYPE.LINE}>Line</option>
        </Input>
        <Row>
          <Col md={2} mdOffset={1} style={{ textAlign: 'center' }}><Icon size={40} /></Col>
          <Col md={8}><label>{title}</label></Col>
        </Row>
        <Col md={12}>
          <Component
            type={this.props.type}
            links={this.props.links}
            onChange={onChange('links')}
            save={this.saveLinks}
            { ...this.props }
            />
        </Col>
      </div>
    );
  }
}

const _components = { default: ProductType };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
