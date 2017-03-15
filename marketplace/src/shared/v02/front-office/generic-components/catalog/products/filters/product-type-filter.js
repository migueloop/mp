import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { PRODUCT } from 'helpers/constants';
import { FormattedMessage } from 'react-intl';

import AllIcon from 'react-icons/lib/fa/asterisk';
import MobileIcon from 'react-icons/lib/md/phone-android';
import SaasIcon from 'react-icons/lib/md/cloud-queue';
import MaterialIcon from 'react-icons/lib/md/devices-other';
import ServiceIcon from 'react-icons/lib/md/person';
import LineIcon from 'react-icons/lib/go/git-branch';


class ProductTypeFilter extends Components {

  constructor(props) {
    super(props);
    this.state = { type: '' };
  }

  static propTypes = {
    onFilter: React.PropTypes.func.isRequired,
  }

  filter = evt => {
    this.setState({ type: evt.currentTarget.value });
    this.props.onFilter({ type: evt.currentTarget.value });
  }

  render() {
    const productTypes = Object.keys(PRODUCT.TYPE).map(type => {
      // / TODO: localize!!! vvvvv ?!! vvvvvv
      const name = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

      let Icon = 'span';
      switch (name) {
        case 'Mobile':
          Icon = MobileIcon;
          break;
        case 'Service':
          Icon = ServiceIcon;
          break;
        case 'Saas':
          Icon = SaasIcon;
          break;
        case 'Material':
          Icon = MaterialIcon;
          break;
        case 'Line':
          Icon = LineIcon;
          break;
        default :
          // Icon = AllIcon;
          break;
      }

      return (
        <label key={type} className="control-label radio">
          <input
            name="type"
            type="radio"
            value={type}
            checked={this.state.type === type}
            onChange={this.filter}
            />
          <span className="caption">
            <Icon className={'ico-left ico-' + name.toLowerCase()} />
            <span className="text">{name}</span>
          </span>
        </label>
      );
    });
    return (
      <div className="types">
        <label className="control-label radio">
          {/* <AllIcon size={25}/>{' '} */}
          <input name="type" type="radio"
            value=""
            checked={ this.state.type === '' }
            onChange={this.filter}
            />
          <span className="caption">
            <AllIcon className={'ico-left ico-all'} />
            <span className="text"><FormattedMessage id="corner_all_types" /></span>
          </span>
        </label>
        {productTypes}
      </div>
    );
  }
}

const connector = connect(state => ({ tenant: state.get('tenant') }));
const _components = { default: connector(ProductTypeFilter) };
export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
