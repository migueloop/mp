import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  bundle: state.get('v02').get('backOffice').get('bundles').get('current'),
}));

class Header extends Components {
  onSelectProduct = product => () => {
    if (this.props.onSelectProduct) {
      this.props.onSelectProduct(product);
    }
  }

  render() {
    const bundle = this.props.bundle.toJS();
    console.log(bundle);
    const bundleDomains = bundle.domains.map(domain => (
      <span className="category" key={domain.id}>{domain.name}</span>
    ));
    const products = bundle.products.map(product => (
        <div key={product.id} style={{ backgroundImage: `url(${product.logoUrl})`, cursor: 'pointer' }} className="thumb-square header-image" onClick={this.onSelectProduct(product)} />
    ));
    return (
      <header className="mp-article-header">

        <Row>
          <Col xs={12} sm={2} className="text-center">
            <div className="title-image">
              <img src={bundle.logoUrl} alt={bundle.title} />
            </div>
          </Col>

          <Col xs={6} sm={5}>
            <div>
              <p className="author">
                <Link to={`/user-corner/${bundle.owner.alias}`}>
                  {bundle.owner.title}
                </Link>
              </p>
              <h2 className="title">
                <Link to={`/bundle/${bundle.alias}`} className="url u-url" rel="bookmark">
                  {bundle.title}
                </Link>
              </h2>
              <h3 className="categories">
                {bundleDomains}
              </h3>
            </div>
          </Col>

          <Col xs={12} sm={5} className="thumb-list">
            {products}
          </Col>

        </Row>
      </header>
    );
  }
}


const _components = {
  default: connector(Header),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
