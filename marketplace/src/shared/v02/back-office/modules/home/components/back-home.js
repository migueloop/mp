import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Admin from './admin';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  user: state.get('v02').get('common').get('user'),
}))
class HomeBO extends Components {

  render() {
    const HomePage = Admin;
    return (
      <div className="container voffset-top-2">
       <HomePage { ...this.props } />
      </div>
    );
  }
}

export default HomeBO;
