import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Document extends Components {

  render() {
    return (
      <iframe src={this.props.URL} frameBorder="0" style={{ width: '100%', height: '60vh' }}></iframe>
    );
  }
}

export default Document;
