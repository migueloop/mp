import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Input from 'react-bootstrap/lib/Input';
import { FormattedMessage } from 'react-intl';

class action_column extends Components {

  constructor(props) {
    super(props);
    this.state = {
      urlToObtain: this.props.url,
    };
  }

  static propTypes = {
    url: React.PropTypes.string.isRequired,
    save: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="mp-sidebar">
        <label><FormattedMessage id="type_bundle_url" /></label>
        <Input value={this.state.urlToObtain}
          onChange={({ target }) => { this.setState({ urlToObtain: target.value }); }}
          placeholder="http://appurl.com"
          type="text"
          onBlur={this.props.save}
          />
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  'default': connect(stateToProps)(action_column),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
