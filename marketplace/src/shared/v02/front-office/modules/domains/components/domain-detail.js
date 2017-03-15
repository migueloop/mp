import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Actions } from 'v02/flux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import HeaderCmpt from 'v02/front-office/generic-components/catalog/header';
import ProductsCmpt from 'v02/front-office/generic-components/catalog/products';
import BundlesCmpt from 'v02/front-office/generic-components/catalog/bundles';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  domain: state.get('v02').get('frontOffice').get('domains').get('current'),
}));

class Domain extends Components {
  static getActions(tenant, params = {}, query = {}) {
    const domainId = Domain.getId(params);
    const actions = new Actions(tenant);
    return [
      actions.FrontOffice.Domains.fetchOne(domainId),
      actions.FrontOffice.Domains.fetchProducts(domainId),
    ];
  }

  static getClientActions(tenant, params = {}, query = {}) {
    const actions = new Actions(tenant);
    return [
      actions.FrontOffice.Domains.fetchProducts(Domain.getId(params)),
      actions.FrontOffice.Domains.fetchBundles(Domain.getId(params)),
    ];
  }

  constructor(props) {
    super(props);
    this.state = {
      active: 'products',
      loading: false,
    };
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    if (!this.state.loading && this.props.domain && Domain.getId(props.params) !== this.props.domain.get('id')) {
      this.load(props);
    }
  }

  load = props => {
    this.setState({
      loading: true,
    }, () => {
      Promise.all(
        Domain.getActions(props.tenant, props.params)
          .concat(Domain.getClientActions(this.props.tenant, this.props.params))
          .map(this.props.dispatch)
      )
        .then(() => { this.setState({ loading: false }); });
    });
  }

  setMenu = item => () => {
    this.setState({
      active: item,
    });
  }

  onFilter = filters => {
    this.setState({
      filters,
    });
  }

  render() {
    // Tenant specific
    const { tenant } = this.props;
    if (this.state.loading || !this.props.domain.get('id') || this.props.domain.get('id') !== Domain.getId(this.props.params)) {
      return (
        <section className="mp-corner">
          <h3><FormattedMessage id="corner_loading" /></h3>
        </section>
      );
    }
    const [Header, Products, Bundles] =
      [HeaderCmpt, ProductsCmpt, BundlesCmpt].map(cmpt => cmpt.get(tenant));
    const domain = this.props.domain.toJS();
    const highlightProducts = domain.products
      .filter(product => {
        const currentDomain = product.domains.find(productDomain => productDomain.id === domain.id);
        return currentDomain.product_corner.highlight_product > 0;
      });
    return (
      <section className={`mp-corner thematic ${(domain.name ? `thematic-${domain.name.toLowerCase()}` : '')}`}>
        {/* TODO: replace thematic-{corner.alias} by thematic-custom{corner.custom} */}
        <div className="container">
          {/* Header */}
          <Header
            title={domain.name}
            corner={domain}
            logo={domain.logoUrl}
            bestProducts={highlightProducts}
            route="/product/"
            />
          {/* Menu */}
          <div className="mp-menu">
            <ul>
              <li onClick={this.setMenu('products')} className={this.state.active === 'products' ? 'active' : ''}>
                <span className="a"><FormattedMessage id="corner_products" /></span>
              </li>
              <li onClick={this.setMenu('bundles')} className={this.state.active === 'bundles' ? 'active' : ''}>
                <span className="a">
                  <FormattedMessage id="corner_bundles" />
                </span>
              </li>
            </ul>
          </div>
          <Products show={this.state.active === 'products'} keywords={domain.keywords} products={domain.products} />
          <Bundles show={this.state.active === 'bundles'} keywords={domain.keywords} bundles={domain.bundles} />
        </div>
      </section>
    );
  }
}

const _components = {
  default: connector(Domain),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
