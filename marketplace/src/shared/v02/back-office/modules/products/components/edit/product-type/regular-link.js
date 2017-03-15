import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import InputRegularLinkCmpt from './input-regular-link';

class RegularLink extends Components {
  changeLink = index => link => {
    const newLinks = this.props.links.concat([]);
    newLinks[index] = Object.assign({}, newLinks[index], link);
    this.props.onChange(newLinks);
  };

  render() {
    const [InputRegularLink] = [InputRegularLinkCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const inputs = this.props.links.map((link, index) => (
      <InputRegularLink onBlur={this.props.save} key={index} image={link.image} value={link.url}
        onChange={this.changeLink(index)}
        />
    ));
    return (
      <div>
        {inputs}
      </div>
    );
  }
}

const _components = { default: RegularLink };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
