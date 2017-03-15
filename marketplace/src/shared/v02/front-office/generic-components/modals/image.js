import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Image extends Components {

  render() {
    return <img src={this.props.URL} alt={this.props.alt} className="modalContentMedia" />;
  }
}

export default Image;
