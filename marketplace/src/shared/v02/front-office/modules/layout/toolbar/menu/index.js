import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col, Panel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  domains: state.get('v02').get('frontOffice').get('domains').get('all'),
}));

class Menu extends Components {
  render() {
    const corners = this.props.domains.toJS().map(domain => {
      return (
        <li key={domain.id}>
          <Link to={`/domain/${domain.alias}`}>
            {domain.name}
          </Link>
        </li>
      );
    });

    return (
      <Panel bsClass="burger" collapsible expanded={this.props.show}>
        <div className="header-panel">
          <div className="container">
            <Row>
              <Col sm={4}>
                <h4><FormattedMessage id="com_corners" /></h4>
                <ul className="domains">
                  {corners}
                </ul>
              </Col>
              <Col sm={4}>
                <h4>
                  <Link to="/catalog">
                    <FormattedMessage id="com_catalogue" />
                  </Link>
                </h4>
                <h4><a href="#community"><FormattedMessage id="com_community" /></a></h4>
              </Col>
              <Col sm={4}>
                <h4><a href="#about"><FormattedMessage id="com_about" /></a></h4>
              </Col>
            </Row>
          </div>
        </div>
      </Panel>
    );
  }
}


const _components = {
  default: connector(Menu),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
