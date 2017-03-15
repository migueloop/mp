import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import TitleHp from './hp';
import TitleSncf from './sncf';

// import TitleMsp             from './Msp'


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  seo: state.get('settings').get('seo').toJS(),
}));


class Title extends Components {
  render() {
    return (
      <div className="mp-header-title">
        <div className="container">
          <Row>
            <Col sm={6}>
              <h1 className="brand">
                <a href="/">{this.props.seo.title}</a>
              </h1>
            </Col>
            <Col sm={6} componentClass="aside">
              <ul className="cobrand">
                <li>
                  <a className="intuiteev"
                    href="http://theintuiteevmarketplace.com/" rel="external"
                    target="_blank"
                    >
                    <img src="/public/images/logo-intuiteev.png" />
                    <span className="text">Intuiteev</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


const _components = {
  default: connector(Title),
  hp: TitleHp,
  sncf: TitleSncf,
  decathlon: TitleSncf,
  airbus: TitleSncf,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
