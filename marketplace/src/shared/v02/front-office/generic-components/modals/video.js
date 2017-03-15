import React from 'react';
import Components from 'v02/common/generic-components/base-component';

class Video extends Components {

  render() {
    return (
      <video className="modalContentMedia" controls>
        <source src={this.props.URL} type={this.props.videoType} />
      </video>
    );
  }
}

export default Video;
