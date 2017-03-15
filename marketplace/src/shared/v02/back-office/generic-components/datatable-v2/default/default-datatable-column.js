import React from 'react';

export default class Column extends React.Component {
  static propTypes = {
    field: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    transform: React.PropTypes.func,
    search: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),
    searchType: React.PropTypes.string,
    searchOptions: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.arrayOf(React.PropTypes.object)]),
    size: React.PropTypes.number,
  }

  static defaultProps = {
    search: false,
    searchType: 'text',
    searchOptions: false,
    transform: (value, rowData) => {
      return `${value}`;
    },
  }

  render() {
    return (
      <div />
    );
  }
}
