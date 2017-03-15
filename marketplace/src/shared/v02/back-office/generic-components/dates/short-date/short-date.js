import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';

export default class ShortDate extends Component {
  static propTypes = {
    date: React.PropTypes.number,
    children: React.PropTypes.string,
  }

  render() {
    return (
      <FormattedDate value={new Date(this.props.date || this.props.children)} />
    );
  }
  
}
