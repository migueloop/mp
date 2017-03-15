import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Navigation from './tabs/navigation';
import Header from './header';
import ProductTypeCmpt from './product-type';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Actions from 'flux/actions';
import { PRODUCT } from 'helpers/constants';
import Spinner from 'react-spinjs';

if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

const stateToProps = state => {
  return {
    product: state.get('v02').get('backOffice').get('products').get('current').get('item'),
    productIsFetching: state.get('v02').get('backOffice').get('products').get('current').get('isFetching'),
    users: state.get('v02').get('backOffice').get('users').get('all'),
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user'),
    notification: state.get('notification'),
    platforms: state.get('misc').get('platforms'),
    features: state.get('v02').get('backOffice').get('features').get('all'),
    domains: state.get('v02').get('backOffice').get('domains').get('all'),
  };
};

class Edit extends Components {

  static clientRequiredActionKeys = [
    'BackOffice.Products.fetchOne',
    'BackOffice.Users.fetchAll',
    'BackOffice.Domains.fetchAll',
  ];

  static featureName() {
    return 'products.edit';
  }

  static childContextTypes = {
    product: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      update: this.update,
      save: this.save,
    };
  }

  save = fields => () => {
    const lastChange = this.state.history[this.state.history.length - 1];
    if (!Array.isArray(fields)) {
      fields = [fields];
    }

    const obj = fields.reduce((ob, field) => {
      let value = this.props.product.toJS()[field];
      if (field === 'links') {
        value = value.filter(link => link.url.length > 0);
      }
      if (value !== lastChange[field]) {
        ob[field] = value;
      }
      return ob;
    }, {});

    if (Object.keys(obj).length === 0) {
      return;
    }
  };

  onChangeFeatureAvailability = (sFeature, bIsAvailable) => {
    new Actions(this.props.tenant).Products.UpdateFeatureAvailability({
      id_product: this.props.params.id,
      id_feature: sFeature,
      isAvailable: bIsAvailable,
    })
    .then(action => {
      this.props.dispatch(action);
      this.props.notification.add({ message: this.format({ id: 'product_updated' }), level: 'success' });
    })
    .catch(err => {
      this.props.notification.add({ message: this.format({ id: 'error_updating_product' }), level: 'error' });
    });
  };

  onChangeProductType = value => {
    const links = [];
    const obj = { type: value, links };
    const product = Object.assign({}, this.props.product.toJS(), obj);
    this.setState({
      product,
    }, () => {
      new Actions(this.props.tenant).Products.Edit(this.props.params.id, obj)
      .then(action => {
        this.props.dispatch(action);
        this.props.notification.add({ message: this.format({ id: 'product_updated' }), level: 'success' });
      })
      .catch(err => this.props.notification.add({ message: this.format({ id: 'error_updating_product' }), level: 'error' }));
    });
  };

  render() {
    const product = this.props.product.toJS();
    const productIsFetching = this.props.productIsFetching;
    if (productIsFetching) {
      return <Spinner />;
    }
    const [ProductType] = [ProductTypeCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let links = [];
    let link = null;
    switch (product.type) {
      case PRODUCT.TYPE.MOBILE:
        const platforms = this.props.platforms && this.props.platforms.toJS() || [];
        links = platforms.map(p => {
          const existing = product.links.find(l => l.name.toLowerCase() === p.name.toLowerCase());
          return {
            image: `/public/images/platforms/${p.name.toLowerCase()}.png`,
            name: p.name.toUpperCase(),
            url: existing ? existing.url : '',
          };
        });
        break;
      case PRODUCT.TYPE.MATERIAL:
        links = ['', '', ''].map((url, index) => {
          const l = product.links[index];
          return {
            image: l ? l.image : '/public/images/customUrls/map-marker.png',
            name: 'REGULAR_LINK',
            url: l ? l.url : '',
          };
        });
        break;
      case PRODUCT.TYPE.SAAS:
        links = ['', ''].map((url, index) => {
          const l = product.links[index];
          return {
            image: l ? l.image : '/public/images/customUrls/map-marker.png',
            name: 'REGULAR_LINK',
            url: link ? l.url : '',
          };
        });
        break;
      case PRODUCT.TYPE.SERVICE:
        link = product.links[0];
        links = [{
          image: link ? link.image : '/public/images/customUrls/map-marker.png',
          name: 'REGULAR_LINK',
          url: link ? link.url : '',
        }];
        break;
      case PRODUCT.TYPE.LINE:
        link = product.links[0];
        links = [{
          image: link ? link.image : '/public/images/customUrls/map-marker.png',
          name: 'REGULAR_LINK',
          url: link ? link.url : '',
        }];
        break;
      default:
        break;
    }
    return (
      <div className="container">
        <article itemScope itemType="http://schema.org/Product" className="mp-product h-product">
          <Row className="padding-top padding-bottom">
            <Col md={12} >
              <Navigation { ...this.props } />
            </Col>
          </Row>
          <Col md={9}>
            <Row className="padding-bottom row-no-hmargin">
              <Col md={12}>
                <Header {...this.props} />
              </Col>
            </Row>
            <div className="tabs-content">
              {/* Passing down props to children */}
              {React.cloneElement(this.props.children, { ...this.props })}
            </div>
          </Col>
          <Col md={3}>
            <ProductType
              type={product.type}
              links={links}
              save={this.save}
              onChangeType={this.onChangeProductType}
              onChange={this.update}
              { ...this.props }
              />
          </Col>
          <div style={{ clear: 'both' }}></div>
        </article>
      </div>
    );
  }
}

const _components = { default: connect(stateToProps)(Edit) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
