import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import LineOptionsFormCmpt from 'v02/back-office/modules/assignments/components/assignment-option-forms/line-form-1';

class LineOptions extends Components {

  onSubmitForm = e => {
    e.preventDefault();
    console.log('Form submitted', e);
  }

  render() {
    const [LineOptionsForm] = [LineOptionsFormCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return <div className="mp-tab mp-tab-line-options"><LineOptionsForm onSubmit={this.onSubmitForm} /></div>;
  }
}

const _components = { default: LineOptions };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
