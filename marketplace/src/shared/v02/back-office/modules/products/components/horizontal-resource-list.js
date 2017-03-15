import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class HorizontalResourceList extends Components {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    resources: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
  }

  onClick = resource => evt => {
    evt.preventDefault();
    this.props.onClick(resource)();
  }

  render() {
    let resources = [];
    if (this.props.resources.length === 0) {
      resources.push(<Col><p key={'title'}>Aucune trouvée</p></Col>);
    } else {
      resources = this.props.resources.map((resource, index) => {
        let placeholderURL = this.props.placeholder || `/public/uploads/products/${resource.idProduct}/${resource.name}`;
        return (
          <Col key={index} xs={6} md={4} lg={3}>
            <div className="resource hentry h-entry">
              <Link to="#" className="url u-url" rel="bookmark" onClick={this.onClick(resource)}>
                <div className="thumb">
                  <img className="photo u-photo" src={placeholderURL} alt={resource.name_custom} />
                </div>
                <div className="info">
                  <h4 className="title fn p-name">
                    {resource.name_custom}
                  </h4>
                </div>
              </Link>
            </div>
          </Col>
        );
      });
    }

    return (
      <div className="section">
        <h3>{this.props.title}</h3>
        <Row>
          {resources}
        </Row>
      </div>
    );
  }
}

const _components = {
  default: connector(HorizontalResourceList),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
