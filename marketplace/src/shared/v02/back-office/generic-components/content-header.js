import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class ContentHeader extends Components {

  static propTypes = {
    contentActions: React.PropTypes.object.isRequired,
    contentTitle: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <header className="content-header">
        <Row>
          <Col xs={8}>
            <h3 className="content-title">
              {this.format({ id: this.props.contentTitle })}
            </h3>
          </Col>
          <Col xs={4} className="text-right">{this.props.children}</Col>
        </Row>
      </header>
    );
  }

}

const _components = {
  default: ContentHeader,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
