import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import { Col, Input, Row, Well } from 'react-bootstrap';
import { MultiSelect } from 'react-selectize';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
}));

class Details extends Components {
  constructor(props) {
    super(props);
    this.__dirname = __dirname;
    this.state = {
      description: this.props.description,
    };
  }


  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };


  onChange = evt => {
    this.setState({
      description: evt.target.value,
    });
  };


  render() {
    const keywordsOptions = {

      values: this.props.keywords.map(keyword => ({ label: keyword.name, value: keyword.id })),
      options: this.props.keywordsAvailables.map(keyword => ({ label: keyword.name, value: keyword.id })),
      onValuesChange: (keywords, callback) => {
        this.props.update('keywords')({
          target: {
            value: keywords.map(k => ({ id: k.value, name: k.label, newOption: k.newOption })),
          },
        });
        callback();
      },
      createFromSearch: (options, values, search) => {
        if (search.length === 0 ||
          values.map(value => value.label.toLowerCase()).indexOf(search.toLowerCase()) !== -1) {
          return null;
        }
        return { label: search, value: search };
      },
      renderNoResultsFound: (values, search) => (
        <div className="no-results-found">
          {(() => {
            if (search.length === 0) {
              return 'Type a few characters to create a tag';
            } else if (values.map(value => value.label.toLowerCase()).indexOf(search.toLowerCase()) !== -1) {
              return 'Keyword already exists';
            }
            return false;
          })()}
        </div>
      ),
      renderValue: item => (
        <div className="simple-value">
          <span onClick={() => {
            this.props.update('keywords')({
              target: {
                value: this.props.keywords
                .filter(clickedItem => item.value !== clickedItem.id),
              },
            });
          }}
                >
            {item.label}
          </span>
        </div>
      ),
    };
    return (
      <Well bsSize="large">
        <Row>
          <Col md={4} mdOffset={1} sm={6}>
            <Input
              type="textarea"
              label={ this.format({ id: 'description' }) }
              placeholder={ this.format({ id: 'description' }) }
              name={ this.format({ id: 'description' }) }
              onChange={this.props.onChange('description')}
              value={this.props.description}
              onBlur={this.props.update('description')} />
          </Col>
          <Col md={4} mdOffset={2} sm={6}>
            <label className="control-label"><FormattedMessage id="keywords" /></label>
          <MultiSelect {...keywordsOptions} />
          </Col>
        </Row>
      </Well>
    );
  }
}

const _components = {
  default: connector(Details),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
