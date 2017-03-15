import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Col } from 'react-bootstrap';
import _ from 'underscore';

class Error extends Components {

  constructor(props) {
    super(props);
    console.log('Error props:', this.props.error);
  }
  static defaultProps = {
    error: { code: 500, message: 'Internal Server Error', stack: '' },
  };

  static contextTypes = {};
  render() {
    const stack = _.isObject(this.props.error.stack) ? JSON.stringify(this.props.error.stack, null, 2) : this.props.error.stack;
    const code = _.isObject(this.props.error.code) ? JSON.stringify(this.props.error.code, null, 2) : this.props.error.code;
    const message = _.isObject(this.props.error.message) ? JSON.stringify(this.props.error.message, null, 2) : this.props.error.message;
    return (
      <Col
        md={8}
        mdOffset={2}
        sm={8}
        smOffset={2}
        xs={12}
        style={{ backgroundColor: '#FFFFFF', marginTop: 30, minHeight: 300, borderRadius: 10 }}
        >
        <h1>Error: {code}</h1>
        <h2>{message}</h2>
        {stack && <pre>{stack}</pre>}
      </Col>
    );
  }
}

const _components = { default: Error };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
