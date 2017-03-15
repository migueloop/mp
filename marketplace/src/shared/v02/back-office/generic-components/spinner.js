import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import LoaderCmpt from 'react-loader';

class Spin extends Components {

  static propTypes = {
    options: React.PropTypes.object,
    loaded: React.PropTypes.bool.isRequired,
    content: React.PropTypes.object.isRequired,
  };

  render() {
    const options = {
      lines: this.props.options && this.props.options.lines || 13, // The number of lines to draw
      length: this.props.options && this.props.options.length || 20, // The length of each line
      width: this.props.options && this.props.options.width || 16, // The line thickness
      radius: this.props.options && this.props.options.radius || 38, // The radius of the inner circle
      scale: this.props.options && this.props.options.scale || 0.75, // Scales overall size of the spinner
      corners: this.props.options && this.props.options.corners || 0.9, // Corner roundness (0..1)
      color: this.props.options && this.props.options.color || '#000', // #rgb or #rrggbb or array of colors
      opacity: this.props.options && this.props.options.opacity || 0.3, // Opacity of the lines
      rotate: this.props.options && this.props.options.rotate || 52, // The rotation offset
      direction: this.props.options && this.props.options.direction || 1, // 1: clockwise, -1: counterclockwise
      speed: this.props.options && this.props.options.speed || 1.1, // Rounds per second
      trail: this.props.options && this.props.options.trail || 28, // Afterglow percentage
      fps: this.props.options && this.props.options.fps || 20, // Frames per second when using setTimeout() as a fallback for CSS
      zIndex: this.props.options && this.props.options.zIndex || 2e9, // The z-index (defaults to 2000000000)
      className: this.props.options && this.props.options.className || 'spinner', // The CSS class to assign to the spinner
      top: this.props.options && this.props.options.top || '50%', // Top position relative to parent
      left: this.props.options && this.props.options.left || '49%', // Left position relative to parent
      shadow: this.props.options && this.props.options.shadow || true, // Whether to render a shadow
      hwaccel: this.props.options && this.props.options.hwaccel || false, // Whether to use hardware acceleration
      position: this.props.options && this.props.options.position || 'absolute', // Element positioning
    };

    return (
      <div>
        <LoaderCmpt loaded={this.props.loaded} options={options} className="spinner">
          {this.props.content}
        </LoaderCmpt>
      </div>
    );
  }
}

export default Spin;
