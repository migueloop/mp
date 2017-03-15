import React from 'react';
import Components from 'v02/common/generic-components/base-component';

import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  seo: state.get('settings').get('seo').toJS(),
}));


class TitleHp extends Components {
  render() {
    return (
      <div className="mp-header-title">
        <div className="container">
          <Row>
            <Col xs={12} sm={4} >
              <h1 className="brand">
                <a href="/">{this.props.seo.title}</a>
              </h1>
            </Col>
            <Col xs={12} sm={8} >
              <ul className="cobrand">
                <li>
                  <a className="microsoft" href="http://www.microsoft.fr/" rel="external" target="_blank" >
                    <img src="/public/images/microsoft_logo.png" alt="Logo Microsoft" />
                    <span className="text">Microsoft</span>
                  </a>
                </li>
                <li>
                  <a className="hp" target="_blank" href="http://www.hp.fr/" rel="external" >
                    <img src="/public/images/hp_logo.png" alt="Logo HP" />
                    <span className="text">HP</span>
                  </a>
                </li>
                  <li>
                    <a className="intuiteev" href="http://theintuiteevmarketplace.com/" rel="external" target="_blank" >
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

export default connector(TitleHp);
