import React from 'react';
import ReactDOM from 'react-dom';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Well from 'react-bootstrap/lib/Well';
import Input from 'react-bootstrap/lib/Input';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import HtmlEditor from 'v02/back-office/modules/products/components/edit/html-editor';
import { MultiSelect } from 'react-selectize';
import SpecificationCmpt from 'v02/back-office/modules/products/components/edit/specification';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  languages: state.get('settings').get('languages'),
}));

class Features extends Components {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  static featureName() {
    return 'products.features.features';
  }

  static contextTypes = {
    product: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
    save: React.PropTypes.func.isRequired,
  };

  // TODO: Pas over all app to check fields with a maximum of chars and do the same IF and show an error message
  featureChange = (index, field) => value => {
    //
    // Parse DB fields with a limit of chars
    // Also, we don't mind the limit of chars of the description field, because is a text.
    let bCharsLimitExceeded = false;

    if (field !== 'description' && value.length > 100) {
      bCharsLimitExceeded = true;
    }

    if (!bCharsLimitExceeded) {
      const features = this.props.product.toJS().features.concat([])
        .sort((a, b) => a.order - b.order);

      features[index][field] = value;
      this.context.update('features')(features);
    } else {
      this.props.notification.add({
        message: 'Vous ne devez pas dépasser 100 caractères',
        level: 'error',
      });
    }
  };

  addFeature = () => {
    const features = this.props.product.toJS().features.concat([])
    .sort((a, b) => a.order - b.order)
    .map((feature, index) => {
      feature.order = index + 1;
      return feature;
    })
    .concat([{
      name: '',
      description: '',
      id_product: this.props.product.toJS().id,
      order: this.props.product.toJS().features.length + 1,
    }]);

    this.context.update('features')(features);
    // setTimeout(this.context.save('features'), 100);
  };

  deleteFeature = index => () => {
    let features = this.props.product.toJS().features.concat([]);
    features.splice(index, 1);
    features = features.map((feature, i) => {
      feature.order = i + 1;
      return feature;
    });
    this.context.update('features')(features);
    setTimeout(this.context.save('features'), 100);
  };

  test = index => value => {
  };

  render() {
    const [Specification] = [SpecificationCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const languages = this.props.languages.toJS();
    const languageOptions = {
      options: languages.map(l => ({ label: l.abbreviation, value: l.id })),
      values: this.props.product.toJS().languages.map(k => ({ label: k.abbreviation, value: k.id })),
      onBlur: this.context.save('languages'),
      onValuesChange: (languages, callback) => {
        this.context.update('languages')(languages.map(k => ({ id: k.value, abbreviation: k.label })));
        callback();
      },
      renderValue: item => (
        <div className="simple-value">
          <span
            onClick={() => {
              this.context.update('languages')(this.props.product.toJS().languages
                .filter(clickedItem => item.value !== clickedItem.id));
            }}
            >
            {item.label}
          </span>
        </div>
      ),
    };

    const removeStyle = {
      color: '#FFF',
      backgroundColor: 'rgba(255,0,0,0.7)',
      position: 'absolute',
      top: -15,
      right: -15,
      width: 30,
      height: 30,
      borderRadius: 15,
      cursor: 'pointer',
      fontSize: 18,
      paddingTop: 3,
      paddingLeft: 5,
    };

    const features = this.props.product.toJS().features
      .sort((a, b) => a.order - b.order)
      .map((feature, index) => (
        <Col key={index} md={4} style={{ height: 600, marginBottom: 15 }}>
          <Well style={{ height: '100%', position: 'relative' }}>
            <div style={removeStyle} onClick={this.deleteFeature(index)}><Glyphicon glyph="remove" /></div>
            <Input
              type="text"
              value={feature.name}
              onBlur={this.context.save('features')}
              onChange={({ target: { value } }) => { this.featureChange(index, 'name')(value);}}
              className="featureName mp-field"
              />
            <HtmlEditor
              style={{ maxHeight: 510, minHeight: 510, height: 'auto', overflowY: 'auto' }}
              value={feature.description}
              onBlur={this.context.save('features')}
              onChange={this.featureChange(index, 'description')}
              className="featureDescription form-control mp-field"
              />
          </Well>
        </Col>
      ));

    if (features.length < 6) {
      features.push(
        <Col className="addNewFeature" md={4} key="add" style={{ height: 600, marginBottom: 15 }} onClick={this.addFeature}>
          <Well style={{ height: '100%' }}>
            <h3><FormattedMessage id="click_to_add_new_feature" /></h3>
          </Well>
        </Col>
      );
    }

    return (
      <div >
        <Well>
          <Row>
            <Col md={4}>
              <label style={{ width: '100%' }}>
                <span><FormattedMessage id="version" /></span>
                <Input className="versionInput mp-field" type="text" onChange={({ target }) => this.context.update('version')(target.value)}
                  value={this.props.product.toJS().version}
                  onBlur={this.context.save('version')}
                  />
              </label>
            </Col>
            <Col md={4} className="product-bo-languages">
              <label style={{ width: '100%' }}>
                <span><FormattedMessage id="languages" /></span>
                <MultiSelect className="languagesMultiselect" {...languageOptions} />
              </label>
            </Col>
            <Col md={4} className="product-bo-sheet-spec">
              <Specification
                random={Math.random()}
                specification={this.props.product.toJS().specification}
                resources={this.props.product.toJS().resources}
                { ...this.props }
                />
            </Col>
          </Row>
        </Well>
        <div>{features}</div>
      </div>
    );
  }
}

const _components = {
  default: connector(Features),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
