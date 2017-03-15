/**
 * Created by cjgm on 6/22/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class TitleSncf extends Components {
  render() {
    return (
      <div className="mp-header-title">
        <div className="container">
          <Row>
            <Col sm={6}>
              <h1 className="brand" style={{ float: 'left' }}>
                <ul className="cobrand">
                  <li>
                    <a
                      className="intuiteev"
                      href="/"
                      >
                      <img src="/public/images/logo.png" />
                      <span className="text">SNCF</span>
                    </a>
                  </li>
                </ul>
              </h1>
            </Col>
            <Col sm={6} componentClass="aside">
              <ul className="cobrand">
                <li>
                  <a
                    className="intuiteev"
                    href="http://theintuiteevmarketplace.com/" rel="external"
                    target="_blank">
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

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    seo: state.get('settings').get('seo').toJS(),
  };
}


export default connect(stateToProps)(TitleSncf);
