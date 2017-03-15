/**
 * Created by cjgm on 5/9/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';

import { Row, Col, Collapse, Fade } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import { PRODUCT } from 'helpers/constants';

import ProductTypesFilterCmpt from './filters/product-type-filter';
import TextFilterCmpt from './filters/text-filter';
import PlatformFilterCmpt from './filters/platform-filter';
import KeywordFilterCmpt from './filters/keyword-filter';
import CornerFilterCmpt from './filters/domain-filter';
import { Actions } from 'v02/flux';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  platforms: state.get('v02').get('common').get('misc').get('platforms'),
}));

class ProductsFilters extends Components {
  static propTypes = {
    onFilter: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showFilters: props.showFilters,
      filters: {
        type: '',
        name: '',
        keywords: [],
        platform: '',
      },
    };
  }

  componentDidMount() {
    this.props.dispatch(new Actions(this.props.tenant).Common.Misc.fetchPlatforms());
  }

  toggle = () => {
    this.setState({
      showFilters: !this.state.showFilters,
    });
  };

  onFilter = filter => {
    const filters = Object.assign({}, this.state.filters, filter);
    if (PRODUCT.TYPE[filters.type] !== PRODUCT.TYPE.MOBILE) {
      filters.platform = '';
    }
    this.setState({ filters });
    this.props.onFilter(filters);
  };

  filter = evt => {
    const filters = Object.assign({}, this.state.filters);
    filters[evt.currentTarget.name] = evt.currentTarget.value;
    if (PRODUCT.TYPE[this.state.filters.type] !== PRODUCT.TYPE.MOBILE) {
      filters.platform = '';
    }
    this.setState({ filters });
    this.props.onFilter(filters);
  };

  render() {
    const [ProductTypesFilter, TextFilter, PlatformFilter, KeywordFilter, CornerFilter] =
      [ProductTypesFilterCmpt, TextFilterCmpt, PlatformFilterCmpt, KeywordFilterCmpt, CornerFilterCmpt]
        .map(Component => Component.get(this.props.tenant));
    return (
      <div className="mp-filters">
        <div className="toggle">
          <span onClick={this.toggle}>
            {/* TODO: icono icono-fiter */}
            <i className="glyphicon glyphicon-filter"></i>
            <FormattedMessage id="corner_filters" />
          </span>
        </div>
        <Collapse in={this.state.showFilters}>
          <div className="filters">
            <Row>
              <Col md={2}>
                <ProductTypesFilter onFilter={this.onFilter} />
              </Col>
              <Col md={3}>
                {/* TODO: localize... */}
                <TextFilter
                  field="name"
                  title="Nom"
                  placeholder="Filter par nom"
                  onFilter={this.onFilter}
                />
                <Fade in={PRODUCT.TYPE[this.state.filters.type] === PRODUCT.TYPE.MOBILE}>
                  <div>
                    <PlatformFilter
                      value={this.state.filters.platform}
                      platforms={this.props.platforms.toJS()}
                      onFilter={this.onFilter}
                    />
                  </div>
                </Fade>
                { this.props.hasCornerFilter ? <CornerFilter onFilter={this.onFilter} /> : '' }
              </Col>
              <Col md={7}>
                <KeywordFilter
                  selectedKeywords={this.props.selectedKeywords}
                  keywords={this.props.keywords}
                  onFilter={this.onFilter}
                />
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

const _components = {
  default: connector(ProductsFilters),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
