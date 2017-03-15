/**
 * Created by cjgm on 5/26/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import { USER } from 'helpers/constants';
import UsersCmpt from './users-multiselect';
import { FormattedMessage } from 'react-intl';

if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

class SingleUserSelector extends Components {

  static propTypes = {
    user_info: React.PropTypes.object,
    user_info_key: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired,
  };


  render() {
    const [Users] = [UsersCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const oSelectProps = {
      update: this.props.update,
      user_info: this.props.user_info,
      user_info_key: this.props.user_info_key,
      users: this.props.users,
    };

    return (
        <div>
          <h3><FormattedMessage id="assignment_users_assigned" /></h3>
          <Users {...oSelectProps} />
        </div>
    );
  }

}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    users: state.get('backoffice').get('users').toJS().filter(u => !(u.deleted_at && u.id_role === USER.ROLE.CUSTOMER)),
  };
}

const _components = {
  default: connect(stateToProps)(SingleUserSelector),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
