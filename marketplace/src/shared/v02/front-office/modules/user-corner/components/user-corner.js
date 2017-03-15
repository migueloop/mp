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
  userCorner: state.get('v02').get('frontOffice').get('userCorner').get('current'),
}));

class UserCorner extends Components {
  static getActions(tenant, params = {}, query = {}) {
    const userCornerId = UserCorner.getId(params);
    const actions = new Actions(tenant);
    return [
      actions.FrontOffice.UserCorner.fetchOne(userCornerId),
      actions.FrontOffice.UserCorner.fetchProducts(userCornerId),
    ];
  }

  static getClientActions(tenant, params = {}, query = {}) {
    const actions = new Actions(tenant);
    return [
      actions.FrontOffice.UserCorner.fetchProducts(UserCorner.getId(params)),
      actions.FrontOffice.UserCorner.fetchBundles(UserCorner.getId(params)),
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
    console.log('DID MOUNT', this.needReload(this.props));
    UserCorner.getActions(this.props.tenant, this.props.params)
      .concat(UserCorner.getClientActions(this.props.tenant, this.props.params))
      .map(this.props.dispatch);
  }

  componentWillReceiveProps(props) {
    if (this.needReload(props)) {
      this.setState({
        loading: true,
      }, () => {
        Promise.all(
          UserCorner.getActions(props.tenant, props.params)
            .concat(UserCorner.getClientActions(this.props.tenant, this.props.params))
            .map(this.props.dispatch)
        )
          .then(() => { this.setState({ loading: false }); });
      });
    }
  }

  needReload = props => {
    return !this.state.loading && !!this.props.userCorner && UserCorner.getId(props.params) !== this.props.userCorner.get('idUser');
  };

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

  groupKeywords(keywords, item) {
    if (!item.keywords) {
      return keywords;
    }
    return keywords.concat(item.keywords.reduce((uniqueKeywords, keyword) => {
      if (keywords.find(k => k.id === keyword.id)) {
        return uniqueKeywords;
      }
      return uniqueKeywords.concat([keyword]);
    }, []));
  }

  render() {
    // Tenant specific
    const { tenant } = this.props;
    if (this.state.loading || !this.props.userCorner.get('idUser') || this.props.userCorner.get('idUser') !== UserCorner.getId(this.props.params)) {
      return (
        <section className="mp-corner">
          <h3><FormattedMessage id="corner_loading" /></h3>
        </section>
      );
    }
    const [Header, Products, Bundles] =
      [HeaderCmpt, ProductsCmpt, BundlesCmpt].map(cmpt => cmpt.get(tenant));
    const userCorner = this.props.userCorner.toJS();
    return (
      <section className={`mp-corner thematic ${(userCorner.name ? `thematic-${userCorner.name.toLowerCase()}` : '')}`}>
        {/* TODO: replace thematic-{corner.alias} by thematic-custom{corner.custom} */}
        <div className="container">
          {/* Header */}
          <Header
            title={userCorner.title}
            logo={userCorner.logoUrl}
            bestProducts={[]}
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
          <Products show={this.state.active === 'products'} keywords={userCorner.products.reduce(this.groupKeywords, [])} products={userCorner.products} />
          <Bundles show={this.state.active === 'bundles'} keywords={userCorner.bundles.reduce(this.groupKeywords, [])} bundles={userCorner.bundles} />
        </div>
      </section>
    );
  }
}

export default connector(UserCorner);
