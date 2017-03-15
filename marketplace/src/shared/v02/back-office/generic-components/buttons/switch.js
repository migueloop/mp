import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import SwitchBtn from 'react-bootstrap-switch';

if (process.browser) {
  require('react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css');
}

class Switch extends Components {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: null,
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
  };

  static propsTypes = {
    onChange: React.PropTypes.func.isRequired,
    isChecked: React.PropTypes.boolean,
  }


  componentWillMount() {
    this.setState({ isChecked: this.props.isChecked });
  }


  render() {
    const formattedMessage = this.context.intl.formatMessage;
    const props = { onText: formattedMessage({ id: 'on' }), offText: formattedMessage({ id: 'off' }), ...this.props };
    return (
      <div style={{ marginLeft: '35%' }}>
        <SwitchBtn { ...props } state={ this.props.isChecked } animate={ true } onChange={ (element, state) => this.props.onChange(state) } />
      </div>
    );
  }
}

const _components = { default: Switch };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
