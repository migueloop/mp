import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class Bundle extends Components {
  static propTypes = {
    bundle: React.PropTypes.object.isRequired,
    link: React.PropTypes.bool.isRequired,
  };

  static defaultProps = {
    route: '/bundle',
    link: false,
  };


  render() {
    const { route, bundle, link, ...others } = this.props;
    let bundleView = (
      <div>
        <div className="thumb">
          <img
            className="photo u-photo"
            src={ bundle.logoUrl }
            alt={ bundle.title || '' }
            />
        </div>
        <div className="info">
          <p className="brand p-brand">
            { bundle.editor ? bundle.editor.title : '' }
          </p>
          <h4 className="title fn p-name">
            { bundle.title || '' }
          </h4>
        </div>
      </div>
    );
    if (link) {
      bundleView = (
        <Link to={`${route}/${bundle.alias}`} className="url u-url" rel="bundle">
          {bundleView}
        </Link>
      );
    }

    return (

     <div className={'product hproduct h-product'} {...others}>
        {bundleView}
      </div>

    );
  }
}

const _components = {
  default: connector(Bundle),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}

