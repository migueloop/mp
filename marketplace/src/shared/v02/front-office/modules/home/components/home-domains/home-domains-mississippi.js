import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class HomeCornersMsp extends Components {
  render() {
    /* TODO: need corner.css or corner.color... */
    const grid = this.props.domains.map(domain => (
      <Col sm={6} md={4} lg={3} key={domain.id}>
        <div className={'corner' + (domain.name ? ' corner-' + domain.name.trim().toLowerCase() : '') }>
          <Link to={`/domain/${domain.alias}`}>
            <div className="thumb"><img src={domain.logoUrl} alt="" /></div>
            <div className={`info ${domain.name}`}><h4 className="title">{domain.name}</h4></div>
          </Link>
        </div>
      </Col>
    ));

    return (
      <div className="mp-corners grid">
        <h2>{this.props.title}</h2>
        <Row>
          {grid}
          <Col sm={6} md={4} lg={3}>
            <div className="corner all">
              {/* TODO: rename catalog as catalogue... */}
              <Link to="/catalog/">
                <div className="thumb"><img src="/public/images/corner-all.png" alt="" /></div>
                <div className="info">
                  <h4 className="title"><FormattedMessage id="com_catalogue" /></h4>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connector(HomeCornersMsp);
