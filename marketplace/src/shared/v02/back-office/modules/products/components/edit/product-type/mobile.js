import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Input from 'react-bootstrap/lib/Input';
import AndroidIcon from 'react-icons/lib/fa/android';
import AppleIcon from 'react-icons/lib/fa/apple';
import WindowsIcon from 'react-icons/lib/fa/windows';

class Mobile extends Components {

  constructor(props) {
    super(props);
    this.saveTimeout = null;
  }
  changeLink = link => evt => {
    const newLinks = this.props.links.map(l => {
      if (link.name === l.name) {
        l.url = evt.target.value;
      }
      return l;
    });
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }
    this.saveTimeout = setTimeout(this.props.save, 1000);
    this.props.onChange(newLinks);
  };

  render() {
    const inputs = this.props.links.map(link => {
      let Icon;
      switch (link.name.toLowerCase()) {
        case 'android':
          Icon = <AndroidIcon />;
          break;
        case 'windows':
          Icon = <WindowsIcon />;
          break;
        case 'apple':
          Icon = <AppleIcon />;
          break;
        default:
          Icon = <span />;
      }

      return (
        <label key={link.name}>
          <Input className="mp-field" type="text" value={link.url} onChange={this.changeLink(link)} addonBefore={Icon} />
        </label>
      );
    });

    return <div>{inputs}</div>;
  }
}

const _components = { default: Mobile };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
