import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Actions from 'flux/actions';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => {
  return ({
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    user: state.get('v02').get('common').get('user'),
    loggedIn: !!state.get('v02').get('common').get('user').get('id'),
  });
});

class Toolbar extends Components {

  constructor(props) {
    super(props);
    this.state = {
      showAccount: false,
      showMenu: false,
      showRegister: false,
      allowSelectRole: true,
    };
  }

  ShowEditorForm = evt => {
    evt.preventDefault();
    this.setState({
      showRegister: true,
      allowSelectRole: false,
    });
  };

  ShowCustomerForm = evt => {
    evt.preventDefault();
    this.setState({
      showRegister: true,
      allowSelectRole: true,
    });
  };

  HideRegisterForm = evt => {
    this.setState({
      showRegister: false,
    });
  };

  toggleAccount = evt => {
    evt.preventDefault();
    if (!this.props.loggedIn) {
      window.location = '/login';
      return;
    }
    this.setState({
      showAccount: !this.state.showAccount,
      showMenu: false,
    });
  };

  toggleMenu = evt => {
    evt.preventDefault();
    this.setState({
      showAccount: false,
      showMenu: !this.state.showMenu,
    });
  };

  changeLocale = language => () => {
    new Actions(this.props.tenant).Locale.setLocale(language)
      .then(action => {
        this.props.dispatch(action);
      });
  };

  render() {

    const languages = ['FR', 'ES', 'EN'].map(l => (
      <span key={l} style={{ cursor: 'pointer', color: 'white' }}
        onClick={this.changeLocale(l)}>{l} </span>
    ));

    return (

      <nav className="mp-toolbar">

        {/* Languages */}
        <div
          className="hidden"
          style={{ position: 'absolute', left: 15, top: '50%', transform: 'translate(0,-50%)' }}
          >
          {languages}
        </div>

        <div className="container">

          {/* Buttons */}
          <ul className="links">
            <li>
              <a href="/admin"
                className="home">
                <i className="icono icono-home"></i>
                <span className="text"><FormattedMessage id="menu_home" /></span>
              </a>
            </li>
          </ul>

        </div>
      </nav>

    );
  }


}


const _components = {
  default: connector(Toolbar),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
