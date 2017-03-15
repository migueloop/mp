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

  render() {
    return (
      <div className="container">
        <iframe src="https://sncf-bi360-config.digitaldimension.services/fichedeligne/Fiche_de_ligne/list" className="billing-system-offers-bo" />
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
  default: connect(stateToProps)(Gdp),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
