import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class GdpDetail extends Components {
  render() {
    if (!this.props.details) {
      return <div />;
    }

    return (
      <Row>
        {Object.keys(this.props.details)
          .reduce((values, key) => {
            const isArray = key.indexOf('[]') !== -1;
            return values.concat([{
              key: key.replace('[]', ''),
              value: isArray ? this.props.details[key]
                .map(id => this.format({ id }))
                .join(', ') : this.props.details[key],
            }]);
          }, [])
          .map(item => (
            <Col sm={6} xs={12}>
              <strong>{this.format({ id: item.key })}</strong>: {this.format({ id: item.value || 'N/A' })}
            </Col>
          ))}
      </Row>
    );
  }
}

const _components = {
  default: GdpDetail,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
