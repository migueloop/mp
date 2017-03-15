import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import HeaderCmpt from 'v02/front-office/generic-components/catalog/header';
import ProductsCmpt from 'v02/front-office/generic-components/catalog/products';
import BundlesCmpt from 'v02/front-office/generic-components/catalog/bundles';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('v02').get('frontOffice').get('products').get('all'),
  bundles: state.get('v02').get('frontOffice').get('bundles').get('all'),
  keywords: state.get('v02').get('common').get('misc').get('keywords'),
}));

class Domain extends Components {

  static requiredActionKeys = [
    'FrontOffice.Products.fetchAll',
    'FrontOffice.Bundles.fetchAll',
    'Common.Misc.fetchKeywords',
  ];

  constructor(props) {
    super(props);
    this.state = {
      active: 'products',
      loading: false,
    };
  }

  componentWillReceiveProps(props) {
    if (!this.state.loading && this.props.domain && Domain.getId(props.params) !== this.props.domain.get('id')) {
      this.load(props);
    }
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
    const [Header, Products, Bundles] =
      [HeaderCmpt, ProductsCmpt, BundlesCmpt].map(cmpt => cmpt.get(tenant));
    const [products, bundles, keywords] =
      [this.props.products, this.props.bundles, this.props.keywords].map(item => item.toJS());
    return (
      <section className="mp-corner thematic">
        <div className="container">
          {/* Header */}
          <Header
            title={'Catalog'}
            logo={'/public/images/placeholders/product.png'}
            bestProducts={[]}
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
          <Products show={this.state.active === 'products'} keywords={keywords} products={products} />
          <Bundles show={this.state.active === 'bundles'} keywords={keywords} bundles={bundles} />
        </div>
      </section>
    );
  }
}

export default connector(Domain);
