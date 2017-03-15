import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import PackageIcon from 'react-icons/lib/fa/th';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class ActionsColumn extends Components {
  render() {
    return (
      <div className="mp-sidebar">
        <div className="category">
          <h4><span className="product-type pull-left" style={ { marginRight: '10', marginTop: '-1' } }>
            <PackageIcon />
          </span>
            {'PACKAGE'}
          </h4>
        </div>
        <div className="actions">
            <div className="buy">
              <p>
                <span>Obtenir</span>
              </p>
            </div>
        </div>
        <ul className="tools">
          <li>
            <a href="#" className="community"><i className="icono icono-community"></i>Communauté</a>
          </li>
        </ul>
      </div>
    );
  }
}

const _components = {
  default: connector(ActionsColumn),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
