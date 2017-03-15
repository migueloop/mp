import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import HomeDomainsMsp from './home-domains-mississippi';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class HomeDomains extends Components {
  render() {
    /* TODO: need corner.css or corner.color... */
    const grid = this.props.domains.map(domain => {
      // let { id, name, alias, css, image } = corner
      // TODO: pass background as image for hover effects (Mississippi)
      // TODO: should be a component?
      return (
        <Col sm={6} md={6} lg={4} key={domain.id}>
          {/* TODO: replace corner-{corner.alias} by corner-custom{corner.custom} */}
          <div className={`corner ${domain.name ? ` corner-${domain.name.toLowerCase()}` : ''}`}>
            <Link to={`/domain/${domain.alias}`}>
              <div className="thumb" style={{ backgroundImage: `url(${domain.logoUrl})` }}>
                {/* <img src={domain.logoUrl} alt="" />*/}
              </div>
              <div className={`info ${!domain.name ? 'hidden' : ''}`}>
                <h4 className="title">{domain.name}</h4>
              </div>
            </Link>
          </div>
        </Col>
      );
    });

    return (
      <div className="mp-corners grid">
        <h2>{this.props.title}</h2>
        <Row>
          {grid}
          <Col sm={6} md={6} lg={4}>
            <div className="corner all">
              {/* TODO: rename catalog as catalogue... */}
              <Link to="/catalog/">
                <div className="thumb"><img src="/public/images/corner-all.png" alt="" /></div>
                <div className="info hidden">
                  <h4 className="title"><FormattedMessage id="corner_view_all" /></h4>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}


const _components = {
  default: connector(HomeDomains),
  mississippi: HomeDomainsMsp,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
