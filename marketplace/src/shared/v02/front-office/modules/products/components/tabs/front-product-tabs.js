import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { PRODUCT_AVAILABLE_FEATURES } from 'helpers/constants/features';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('frontOffice').get('products').get('current'),
}));

class Tabs extends Components {
  onSelect = tab => () => {
    this.props.onSelect(tab);
  }
  render() {
    const product = this.props.product.toJS();
    const tabsBaseUrl = `/product/${product.alias}`;

    const productTabs = PRODUCT_AVAILABLE_FEATURES.reduce((tabs, PRODUCT_FEATURE) => {
      if (product.availableFeatures.find(availableFeature => availableFeature.idFeature === PRODUCT_FEATURE.id)) {
        return tabs.concat([
          (<li key={PRODUCT_FEATURE.id}>
            {
              this.props.onSelect ?
                (<a href="#" className={this.props.active === PRODUCT_FEATURE.id ? 'active' : ''} onClick={this.onSelect(PRODUCT_FEATURE.id)}><FormattedMessage id={PRODUCT_FEATURE.id} /></a>)
                : <Link activeClassName={'active'} to={`${tabsBaseUrl}/${PRODUCT_FEATURE.route}`}><FormattedMessage id={PRODUCT_FEATURE.id} /></Link>
            }
          </li>),
        ]);
      }
      return tabs;
    }, []);

    return (
      <nav className="mp-menu mp-product-tabs">
        <ul className="links">
          {productTabs}
        </ul>
      </nav>
    );
  }
}

const _components = {
  default: connector(Tabs),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
