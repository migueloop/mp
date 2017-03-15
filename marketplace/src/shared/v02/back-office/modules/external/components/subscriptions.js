import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';

class Subscriptions extends Components {

  render() {
    const oSubscriptions = (<span className="centered-message-title"><h2>Pas d'abonnement disponibles</h2></span>);
    if (this.props.user.subscriptionsUrl) {
      // oSubscriptions = (<iframe src={this.props.user.subscriptionsUrl} className="billing-system-offers-bo" scrolling="no"></iframe>)
    }
    return <div>{oSubscriptions}</div>;
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user').toJS(),
  };
}

export default connect(stateToProps)(Subscriptions);
