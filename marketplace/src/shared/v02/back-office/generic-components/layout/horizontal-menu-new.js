import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class MenuHorizontal extends Components {

  render() {
    const items = React.Children.map(this.props.children, child => {
      return <li>{child}</li>;
    });
    return (
      <nav className="navbar">
        <ul className={'nav navbar-nav'}>{items}</ul>
      </nav>
    );
  }
}

export default MenuHorizontal;
