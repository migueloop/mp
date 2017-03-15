import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Pagination from './default-datatable-pagination';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import { FormattedMessage } from 'react-intl';

import Column from './default-datatable-column';
import Summary from './default-datatable-summary';

// TODO: Refactor to store the displayed data on the state!!

class Datatable extends Components {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    itemPerPage: React.PropTypes.number,
    summarySize: React.PropTypes.number,
    sort: React.PropTypes.object,
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  static DataColumn = Column
  static SummaryColumn = Summary

  static defaultProps = {
    itemPerPage: 10,
    summarySize: 33,
    sort: {
      field: null,
      asc: 'asc',
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      rowSelected: undefined,
      filters: {},
      sort: props.sort,
    };
  }

  preventDefault = evt => {
    console.log('prevent default, return false');
    evt.stopPropagation();
    evt.preventDefault();
    return false;
  }

  applySort = columns => (rowA, rowB) => {
    if (this.state.sort.field === null) {
      return 0;
    }
    const sortable = columns.find(column => column.props.field === this.state.sort.field).props.sortable;
    let sortFunc = (a, b) => (a > b);

    if (typeof sortable === 'function') {
      sortFunc = sortable;
    }

    let sort = sortFunc(rowA[this.state.sort.field], rowB[this.state.sort.field]);
    sort = this.state.sort.asc ? sort : !sort;
    return sort ? 1 : -1;
  }

  applyFilters = rowData => {
    const filters = Object.keys(this.state.filters);
    const filtersFunctions = this.fetchColumns().reduce((functions, column) => {
      if (typeof column.props.search === 'function') {
        functions[column.props.field] = {
          search: column.props.search,
        };
      } else {
        functions[column.props.field] = {
          search: (filter, data) => `${data}`.toLowerCase().indexOf(`${filter}`.toLowerCase()) !== -1,
        };
      }
      functions[column.props.field].transform = column.props.transform;
      return functions;
    }, {});
    if (filters.length === 0) {
      return true;
    }

    return !filters
      .find(filter => {
        return !filtersFunctions[filter].search(this.state.filters[filter], filtersFunctions[filter].transform(rowData[filter], rowData), rowData);
      });
  }

  setFilter = field => evt => {
    const { filters } = this.state;
    filters[field] = evt.target.value;
    if (filters[field] === '') {
      delete filters[field];
    }
    this.setState({
      filters,
    });
  }

  fetchColumns = () => {
    return React.Children.toArray(this.props.children)
      .filter(child => child.type === Datatable.DataColumn);
  }

  getColumnsSizes = columns => {
    const totalSpace = 12;
    const usedSpace = columns.reduce((total, column) => (total + column.props.size), 0);
    if (usedSpace > totalSpace) {
      return columns.map(column => totalSpace / columns.length);
    }
    return columns.map(column => column.props.size || totalSpace / columns.length);
  }

  getData = () => {
    const columns = this.fetchColumns();
    const start = (this.state.activePage - 1) * this.props.itemPerPage;
    const end = start + this.props.itemPerPage;
    return this.props.data
      .filter(this.applyFilters)
      .sort(this.applySort(columns))
      .slice(start, end);
  }

  _getSummary = () => React.Children.toArray(this.props.children)
    .find(child => child.type === Datatable.SummaryColumn);

  getSummary = () => {
    const SummaryComponent = this._getSummary();
    if (!SummaryComponent) {
      return (
        <div>
          <div className="container">
            <Row style={{ marginTop: '47px' }}>
              <Col xs={2} className="v-list-label"></Col>
              <Col xs={8} className="v-list-label"><h3><FormattedMessage id="no_summary_component" /></h3></Col>
            </Row>
          </div>
        </div>
      );
    }

    if (this.getData().length === 0) {
      return (
        <div>
          <div className="container">
            <Row style={{ marginTop: '47px' }}>
              <Col xs={8} className="v-list-label"><h3><FormattedMessage id="no_items_to_display" /></h3></Col>
            </Row>
          </div>
        </div>
      );
    }

    if (this.state.rowSelected === undefined) {
      return (
        <div>
          <div className="container">
            <Row style={{ marginTop: '47px' }}>
              <Col xs={2} className="v-list-label"><span className="arrow-please-select"></span></Col>
              <Col xs={8} className="v-list-label"><h3><FormattedMessage id="please_select_detail" /></h3></Col>
            </Row>
          </div>
        </div>
      );
    }

    const data = this.getData()[this.state.rowSelected];

    if (!data) {
      return this.setState({
        rowSelected: undefined,
      });
    }

    return React.cloneElement(SummaryComponent.props.children, {
      data,
    });
  };

  getHeader = columns => {
    const columnsSizes = this.getColumnsSizes(columns);
    return columns.map((column, i) => {
      let props = {
        key: i,
        xs: columnsSizes[i],
        className: 'th',
      };

      let options = null;
      if (column.props.searchOptions) {
        options = column.props.searchOptions.map(select => (
          <option key={select.value} value={select.value}>{select.title}</option>
        ));

        options.unshift(<option key="SELECT..." value="">Select...</option>);
      }
      const searchText = this.format({ id: 'search' });
      const popoverLeft = (
        <Popover id={`search-${column.props.field}`} title={searchText}>
          {
            <Input type={column.props.searchType} value={this.state.filters[column.props.field]}
              onChange={this.setFilter(column.props.field)}
              placeholder={searchText}
              >
              {options}
            </Input>
          }
        </Popover>
      );
      const headerOptions = [];

      if (column.props.search) {
        headerOptions.push(
          <OverlayTrigger onClick={this.preventDefault} rootClose trigger="click" placement="left" overlay={popoverLeft}>
            <Glyphicon glyph="filter" className="filter" />
          </OverlayTrigger>
        );
      }

      if (column.props.sortable) {
        props = Object.assign({}, props, {
          className: `${props.className} pointer`,
          onClick: () => {
            this.setState({
              sort: {
                field: column.props.field,
                asc: column.props.field !== this.state.sort.field ? true : !this.state.sort.asc,
              },
            });
          },
        });

        const sortTypeIcon = this.state.sort.asc ? 'bottom' : 'top';

        if (column.props.field === this.state.sort.field) {
          headerOptions.push(
            <span className="sort">
                <Glyphicon glyph={`triangle-${sortTypeIcon}`} />
            </span>
          );
        }
      }

      return (
        <Col {...props}>
          {column.props.title}
          {headerOptions.length > 0 && (
            <div className="datatable-header-options">
              {headerOptions}
            </div>
          )}
        </Col>
      );
    });
  }

  getRows = columns => {
    const columnsSizes = this.getColumnsSizes(columns);

    const body = this.getData()
      .map((rowData, rowIndex) => {
        const row = columns.map((column, i) => {
          const props = {
            key: i,
            xs: columnsSizes[i],
            className: 'td',
          };
          return (
            <Col {...props}>
              {column.props.transform(rowData[column.props.field], rowData)}
            </Col>
          );
        });
        return (
          <Row
            onClick={this.select(rowData, rowIndex)}
            key={rowIndex}
            className={`rows-alt selectable ${rowIndex === this.state.rowSelected ? 'active' : ''}`}
            >
            {row}
          </Row>
        );
      });

    if (body.length < this.props.itemPerPage) {
      const numberOfRowToAdd = this.props.itemPerPage - body.length;
      const emptyRow = columns.map((column, key) => {
        const props = {
          key,
          xs: columnsSizes[key],
          className: 'td',
        };
        return (
          <Col {...props} >{' '}</Col>
        );
      });
      for (let i = 0; i < numberOfRowToAdd; i++) {
        body.push(
          <Row key={`fill-${i}`} className="rows-alt">{emptyRow}</Row>
        );
      }
    }
    return body;
  }

  select = (rowData, rowSelected) => () => {
    this.setState({
      rowSelected,
      rowData,
    });
  }

  changePage = page => {
    this.setState({
      activePage: page,
      rowSelected: undefined,
    });
  }

  render() {
    const columns = this.fetchColumns();
    const header = this.getHeader(columns);

    const body = this.getRows(columns);

    const summarySize = Math.round((this.props.summarySize * 12) / 100);

    return (
      <div>
        <div className="datatable-component">
          <Row>
            <Col id="datatable-list" xs={12 - summarySize}>
              <div>
                <Row>{header}</Row>
                {body}
              </div>
            </Col>
            <Col id="datatable-detail" xs={summarySize}>
              <Col className="th datatable-detail-header"><FormattedMessage id="summary" /></Col>
              <div style={{ padding: '0 25px' }}>
              {this.getSummary()}
              </div>
            </Col>
          </Row>
        </div>
        <Pagination onSelect={this.changePage} items={Math.ceil(this.props.data.length / this.props.itemPerPage)} maxButtons={10} itemPerPage={10} ellipsis={true} />
      </div>
    );
  }
}

export default Datatable;
