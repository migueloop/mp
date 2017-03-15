import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';

class ItemTypeColumn extends Components {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    currentType: React.PropTypes.array.isRequired,
    onChangeType: React.PropTypes.func.isRequired,
    selectLabel: React.PropTypes.string.isRequired,
    selectPlaceholder: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  };

  render() {
    // set the icon and literal of current type
    // we receive an array. In the position 0 the icon and 1 the literal
    let CurrentTypeIcon = this.props.currentType[0];
    let sCurrentTypeTitle = this.props.currentType[1];
    return (
      <div className="mp-sidebar">
        <Input value={this.props.type}
          type="select"
          label={this.props.selectLabel}
          placeholder={this.props.selectPlaceholder}
          onChange={({ target }) => this.props.onChangeType(target.value) }>
          <option>Article</option>
        </Input>
        <Row style={{ textAlign: 'center', marginLeft: '-10%' }}>
          <CurrentTypeIcon size={40} style={{ marginRight: '3%' }} />
          <label>{sCurrentTypeTitle}</label>
        </Row>
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
  default: connect(stateToProps)(ItemTypeColumn),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
