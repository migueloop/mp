import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Pagination from 'react-bootstrap/lib/Pagination';

export default class PaginationComponent extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    activePage: React.PropTypes.number,
    pages: React.PropTypes.number.isRequired,
    onSelect: React.PropTypes.func,
  }

  static defaultProps = {
    activePage: 1,
  }

  constructor(props) {
    super(props);
    this.state = {
      active: props.activePage,
    };
  }

  onSelect = (event, selectedEvent) => {
    this.setState({ active: selectedEvent.eventKey });
    this.props.onSelect && this.props.onSelect(selectedEvent.eventKey);
  }

  render() {
    return (
      <Row>
        { this.props.items > 1 &&
        <Col xsOffset={2} xs={8} style={{ textAlign: 'center' }}>
          <Pagination onSelect={this.onSelect} prev next first last ellipsis items={this.props.items} maxButtons={10} activePage={this.state.active}/>
        </Col>
        }
      </Row>
    );
  }
}
