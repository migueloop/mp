import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';

/*  import AndroidIcon from 'react-icons/lib/fa/android'
import AppleIcon from 'react-icons/lib/fa/apple'
import WindowsIcon from 'react-icons/lib/fa/windows'  */

class PlatformFilter extends Components {

  constructor(props) {
    super(props);
    this.state = { platform: '' };
  }

  filter = evt => {
    this.props.onFilter({ platform: evt.currentTarget.value });
  }


  render() {
    const platforms = this.props.platforms.map(platform => {
      // TODO platform.css or platform.icon
/*
      let Icon = ''
      switch (platform.name.toLowerCase()) {
        case 'android':
          Icon = AndroidIcon
          break
        case 'windows':
          Icon = WindowsIcon
          break
        case 'apple':
          Icon = AppleIcon
          break
      }
*/
      return (
        <label key={platform.id} className="control-label radio">
          <input
            name="platform" type="radio"
            onChange={this.filter}
            checked={this.props.value === platform.name}
            value={platform.name}
            />
          <span className="caption">
            {/* <Icon size={45}/> */}
            <i className={'icono icono-' + platform.name.toLowerCase()}></i>
            <span className="text">{platform.name}</span>
          </span>
        </label>
      );
    });
    return <div className="platforms">{platforms}</div>;
  }
}

const connector = connect(state => ({ tenant: state.get('tenant') }));
const _components = { default: connector(PlatformFilter) };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
