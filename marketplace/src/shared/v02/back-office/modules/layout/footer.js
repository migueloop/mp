import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';


@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}))


class Footer extends Components {


  constructor(props) {
    super(props);
    this.__dirname = __dirname;
  }


  render() {
    return (

      <footer className="mp-footer" role="contentinfo">

        <div className="container">
          <Row>
            <Col mdOffset={4} smOffset={6} md={8} sm={6} componentClass="nav">
              <ul className="legal">
                <li><a href="#privacy"><FormattedMessage id="footer_privacy" /></a></li>
                <li><a href="#eula"><FormattedMessage id="footer_eula" /></a></li>
                <li>Powered by <a href="http://theintuiteevmarketplace.com/">The intuiteev Marketplace</a></li>
                <li>© 2015 - {moment(new Date()).format('YYYY')} Intuiteev</li>
              </ul>
            </Col>
          </Row>
        </div>

      </footer>

    );
  }


}


const _components = {
  default: Footer,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
