import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import Actions from 'flux/actions';

class Gdp extends Components {
  /*
  * @param tenant
  * @param dispatch
  * @param params
  * @param query
  * @returns {Promise|Promise.<T>}
  */
  static fetchData(tenant, dispatch, params = {}, query = {}) {
    const Action = new Actions(tenant);
    return Promise.all([
      Action.Seo.set({
        type: 'backoffice',
        data: {},
      }),
    ])
    .then(actions => {
      return actions.forEach(dispatch);
    });
  }

  componentDidMount() {
    Gdp.fetchData(this.props.tenant, this.props.dispatch);
  }

  render() {
    // TODO: Use Configuration file for this
    /* if (this.props.gdp.disable) {
      return (
        <div>gdp system not enabled...</div>
      );
    }*/
    return (
      <iframe src="http://gestion-actif.intuiteev.io" className="billing-system-offers-bo" />
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  default: connect(stateToProps)(Gdp),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
