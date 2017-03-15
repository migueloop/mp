import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import BundleCmpt from './_common/bundle';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class Bundles extends Components {
  static propTypes = {
    bundles: React.PropTypes.array.isRequired,
    link: React.PropTypes.bool.isRequired,
    omit: React.PropTypes.array,
    onSelect: React.PropTypes.func,
  }

  static defaultProps = {
    itemsPerPage: 12,
    omit: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      page: 1,
    });
  }

  paginationProperties = {
    items: 3,
    maxButtons: 3,
    bsSize: 'small',
    next: true,
    prev: true,
    onSelect: (event, selectedEvent) => {
      this.setState({
        page: selectedEvent.eventKey,
      });
    },
  };

  render() {
    // Tenant specific
    const tenant = this.props.tenant;
    const [Bundle] = [BundleCmpt].map(Component => Component.get(tenant));
    const start = this.props.itemsPerPage * (this.state.page - 1);

    const aBundles = this.props.bundles
      .filter(oBundle => this.props.omit.map(p => p.id).indexOf(oBundle.id) === -1);

    const grid = aBundles.slice(start, start + this.props.itemsPerPage)
      .map(oBundle => {
        let bundleProps = {};

        if (this.props.onSelect) {
          bundleProps = {
            onClick: () => {this.props.onSelect(oBundle);},
          };
        }

        return (
          <Col xs={12} sm={6} md={3} lg={2} key={oBundle.id}>
            <Bundle
              {...bundleProps}
              bundle={oBundle}
              style={{ cursor: 'pointer' }}
              link={this.props.link}
              />
          </Col>
        );
      });

    if (!aBundles.length) {
      return (
        <div className="mp-products">
          <h3><FormattedMessage id="bundles_empty" /></h3>
        </div>
      );
    }

    return (
      <div className="mp-products grid">
        {/* Grid */}
        <Row>
          {grid}
        </Row>
        {/* Pagination */}
        <nav className="pages">
          <Pagination {...this.paginationProperties}
            items={Math.ceil(aBundles.length / this.props.itemsPerPage)}
            activePage={this.state.page}
            />
        </nav>
      </div>
    );
  }
}

const _components = {
  default: connector(Bundles),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
