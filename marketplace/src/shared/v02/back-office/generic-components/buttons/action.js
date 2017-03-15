import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';

// const connector
class Action extends Components {
  static propsTypes = {
    onClick: React.PropTypes.func,
    width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    disabled: React.PropTypes.boolean,
  };

  static defaultProps = { width: '100%' };

  render() {
    return (
      <Button disabled={this.props.disabled} onClick={this.props.onClick} className={this.props.className} >
          <Glyphicon glyph={this.props.icon} className="ico ico-left" />
        {this.props.text}
      </Button>
    );
  }
}

export default Action;
