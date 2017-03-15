import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Row, Col, Pagination } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Product from './product';

class Products extends Components {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
    omit: React.PropTypes.array,
    link: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
  }

  static defaultProps = {
    itemsPerPage: 12,
    omit: [],
    link: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentWillReceiveProps() {
    this.setState({ page: 1 });
  }

  paginationProperties = {
    items: 3,
    maxButtons: 3,
    bsSize: 'small',
    next: true,
    prev: true,
    onSelect: (event, selectedEvent) => {
      this.setState({ page: selectedEvent.eventKey });
    },
  }

  render() {
    const start = this.props.itemsPerPage * (this.state.page - 1);
    const products = this.props.products
    .filter(product => this.props.omit.map(p => p.id).indexOf(product.id) === -1);
    const grid = products.slice(start, start + this.props.itemsPerPage)
    .map(product => {
      let productProps = {};
      if (this.props.onSelect) {
        productProps = {
          onClick: () => {this.props.onSelect(product);},
          className: 'cursor',
        };
      }
      return (
        <Col xs={6} sm={6} md={3} lg={2} key={product.id} >
          <Product product={product} {...productProps}
            link={product.url}
            />
        </Col>
      );
    });
    if (!products.length) {
      return (
        <div className="mp-products" >
          <h3><FormattedMessage id="products_empty" /></h3>
        </div>
      );
    }
    return (
      <div className="mp-products grid" >
        {/* Grid */}
        <Row>
          {grid}
        </Row>
        {/* Pagination */}
        <nav className="pages" >
          <Pagination {...this.paginationProperties}
            items={Math.ceil(products.length / this.props.itemsPerPage)}
            activePage={this.state.page}
            />
        </nav>
      </div>
    );
  }
}

const _components = {
  default: Products,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
