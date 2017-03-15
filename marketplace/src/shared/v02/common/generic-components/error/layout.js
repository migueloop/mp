import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Layout extends Components {

  static contextTypes = {};

  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="/public/stylesheets/bootstrap.min.css" />
        <link rel="stylesheet" href="/public/stylesheets/react-bootstrap-table-all.min.css" />
        <link rel="stylesheet" href="/public/stylesheets/selectize.css" />
        <link rel="stylesheet" href="/public/stylesheets/style.css" />
      </head>
      <body style={{ backgroundColor: '#c4c4c4' }} >
        {this.props.children}
      </body>
      </html>
    );
  }
}

export default Layout;
