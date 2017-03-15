import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Field extends Components {

  static propTypes = {
    children: React.PropTypes.element.isRequired,
    field: React.PropTypes.object.isRequired,
  };

  hasError = field => {
    if (field.touched) {
      return {
        hasFeedback: true,
        bsStyle: field.invalid ? 'error' : 'success',
      };
    }
    return {};
  };

  render() {
    const { field } = this.props;
    const hasError = this.hasError(field);
    const children = React.Children.map(this.props.children, children => {
      return React.cloneElement(children, { ...field, ...hasError });
    });
    return (
      <div>
        {children}
        <div className={`help-text ${field.touched && field.invalid ? 'has-error' : 'hide'}`}>
          <label >
            {field.touched ? field.error : ''}
          </label>
        </div>
      </div>
    );
  }
}

const _components = { default: Field };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
