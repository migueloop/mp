import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Actions } from 'v02/flux';

class CookieAcceptance extends Components {
  acceptCookie = () => {
    const actions = new Actions(this.props.tenant, this.props.user.get('token'));
    this.props.dispatch(actions.FrontOffice.Cookie.setCookieDisclaimer(true));
  };
  render() {
    if (this.props.acceptedCookie) {
      return null;
    }
    // TODO: remove this inline stlye
    const style = {
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#FFF',
      textAlign: 'center',
      padding: '3px 0',
    };

    const buttonStyle = {
      fontWeight: 'bold',
      cursor: 'pointer',
      marginLeft: 5,
      color: '#FFF',
    };
    return (
      <div style={style}>
      <FormattedMessage id="cookie_warning" />
        <Link to="/disclaimer" style={buttonStyle}><FormattedMessage id="cookie_learn_more" /></Link>
        <span onClick={this.acceptCookie} style={buttonStyle}><FormattedMessage id="cookie_accept" /></span>
      </div>
    );
  }
}

export default CookieAcceptance;
