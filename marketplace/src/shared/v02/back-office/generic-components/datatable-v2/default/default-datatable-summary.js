import React from 'react';

export default class Summary extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  static defaultProps = {}

  render() {
    return <div />;
  }
}
