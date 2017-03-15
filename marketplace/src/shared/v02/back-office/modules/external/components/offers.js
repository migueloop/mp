import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import Actions from 'flux/actions';

class Offers extends Components {
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
      Action.BackOffice.Billing.fetch(),
    ])
    .then(actions => {
      console.log(actions);
      return actions.forEach(dispatch);
    })
    .then(() => (
      Action.Seo.set({
        type: 'backoffice',
        data: {},
      })
    )).then(seoAction => {
      dispatch(seoAction);
      return Promise.resolve();
    });
  }

  componentDidMount() {
    console.log('component did mount');
    Offers.fetchData(this.props.tenant, this.props.dispatch);
  }

  render() {
    if (this.props.billing.disable) {
      return (
        <div>Billing system not enabled...</div>
      );
    }
    return (
      <iframe src={this.props.billing.endpoint.extended} className="billing-system-offers-bo" />
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    billing: state.get('backoffice').get('billing').toJS(),
  };
}

const _components = {
  default: connect(stateToProps)(Offers),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
