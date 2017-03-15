import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';

import Dropzone from 'react-dropzone';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { PERMISSIONS } from 'helpers/constants';

import Actions from 'flux/actions';
import { Actions as ActionsV02 } from 'v02/flux';

import Components from 'v02/common/generic-components/base-component';
import ModalSelectResourceCmpt from 'v02/back-office/modules/products/components/edit/modal-select-resource';

const update = key => data => console.log('update::', key, '::data::', data);
const save = key => data => console.log('save::', key, '::data::', data);
class Header extends Components {
  constructor(props) {
    super(props);
    this.state = {
      changeLogo: false,
      product: props.product.toJS(),
    };
    this.actions = new ActionsV02(props.tenant);
  }
  changeLogo = resource => {
    this.setState({ changeLogo: false });
    update('logo')(resource.id);
    setTimeout(save(['logo']), 150);
  };
  onDrop = files => {
    const product = this.props.product.toJS();
    new Actions(this.props.tenant).Products.AddResource({ id: product.id, resource: { file: files[0] } })
    .then(action => {
      this.props.dispatch(action);
      if (action.product.resource.id) {
        const logoResource = product.resources.find(r => r.id === action.product.resource.id);
        update('logoUrl')(`/public/uploads/products/${product.id}/${logoResource.name}`);
      } else {
        update('logoUrl')('/public/images/placeholders/product.png');
      }
      update('logo')(action.product.resource.id);
      setTimeout(save('logo'), 150);
    })
    .catch(err => console.log(err));
  };
  updateName = ({ target }) => {
    let { value } = target;
    value = value.replace(/\#/g, '');
    update('name')(value);
  };
  saveProduct = () => {
    console.log('save product', this.state.product);
    this.props.dispatch(this.actions.BackOffice.Products.update(this.state.product));
  };
  onFocus = ({ target }) => {
    const { value } = target;
    if (value === this.format({ id: 'product_name_placeholder' })) update('name')('');
  };

  updateProductOwner = e => {
    this.setState({ product: Object.assign({}, this.state.product, { createdBy: parseInt(e.target.value, 10) }) }, () => {
      this.saveProduct();
    });
  };

  render() {
    const product = this.props.product.toJS();
    const updateLogo = (
      <Popover id="popoverUpdateLogo" title={ this.format({ id: 'update_logo' }) }>
        <Row>
          <Col xs={12}>
            <Button bsStyle="info" onClick={() => this.setState({ changeLogo: true })} style={{ width: '100%' }} >
              <FormattedMessage id="select" />
            </Button>
          </Col>
          <Col xs={12}>
            <Dropzone
              style={{ width: 'auto', height: 'auto', border: 'none' }}
              onDrop={this.onDrop}
              accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}
              className="productLogoInputWrapper"
              >
              <Button bsStyle="success" style={{ width: '100%' }}><FormattedMessage id="upload" /></Button>
            </Dropzone>
          </Col>
        </Row>
      </Popover>
    );
    const [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const permissions = this.props.user.get('permissions').toJS();
    const productOwners = this.props.users.toJS().filter(u => u.permissions.indexOf(PERMISSIONS.CREATE_PRODUCT.id) !== -1);
    console.log('productOwners', productOwners);
    let cornerArea = product.editor ? <Link to={`/editor/${product.editor.alias}`}>{product.editor.title}</Link> : '';
    if (permissions.isIntersected([PERMISSIONS.CHANGE_PRODUCT_OWNER.id])) {
      cornerArea = (<Input
        type="select"
        label={this.format({ id: 'select_owner' })}
        placeholder={this.format({ id: 'select_owner' })}
        onChange={this.updateProductOwner}
        >
        {productOwners.map(user => <option selected={this.state.product.createdBy === user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>)}
      </Input>);
    }
    return (
      <header>
        <Col md={4}>
          <OverlayTrigger trigger="click" placement="bottom" rootClose overlay={updateLogo} >
            <img className="photo u-photo"
              style={{ maxHeight: '150px', maxWidth: '100%', cursor: 'pointer' }}
              src={product.logoUrl}
              alt={product.name}
              itemProp="image"
              />
          </OverlayTrigger>
        </Col>
        <Col md={8}>
          <p className="brand p-brand h-card">{cornerArea}</p>
          <Input name="name"
            type="text"
            value={ this.state.product && this.state.product.name || this.format({ id: 'product_name_placeholder' }) }
            style={{ marginTop: 5 }}
            onChange={ e => this.setState({ product: Object.assign({}, this.state.product, { name: e.target.value }) }) }
            onBlur={ this.saveProduct }
            onFocus={ this.onFocus }
            />
        </Col>
        <ModalSelectResource
          show={this.state.changeLogo}
          hide={() => this.setState({ changeLogo: false })}
          onSelect={this.changeLogo}
          resources={ product.resources.filter(p => p.logo !== product.logo && p.type.startsWith('image')) }
          { ...this.props }
          />
      </header>
    );
  }
}
export default Header;
