import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Input from 'react-bootstrap/lib/Input';
import ActionColumnCmpt from './action-column';
import Carousel from 'v02/back-office/generic-components/editable/carousel';
import KeywordsCmpt from 'v02/back-office/modules/bundles/components/edit/tabs/multiselects/keywords';
import CornersCmpt from 'v02/back-office/modules/bundles/components/edit/tabs/multiselects/corners';
import { FormattedMessage } from 'react-intl';


if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

class summary extends Components {

  constructor(props) {
    super(props);
    this.state = {
      baseline: this.props.bundle.baseline,
      description: this.props.bundle.description,
    };
  }


  static propTypes = {
    bundle: React.PropTypes.object.isRequired,
    save: React.PropTypes.func.isRequired,
    onDeleteResource: React.PropTypes.func.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired,
    toggleShowInCarousel: React.PropTypes.func.isRequired,
  };


   /**
   * Used when an input or textarea of bundle change the value.
   * Basically, we update the state to render it
   * @param {string} sValue new value
   * @param {string} sField field to change
   */
  onChangeInput = (sValue, sField) => {
    // update db field
    this.props.update(sField)(sValue);

    // set max chars to check the maximum length
    switch (sField) {
      case 'baseline':
        sValue.length <= 59 && this.setState({ baseline: sValue });
        break;
      case 'description':
        sValue.length <= 119 && this.setState({ description: sValue });
        break;
      default:
        break;
    }
  };


  /**
   * Set the object to send to the multi select components. Basically set the functions to call when we
   * select a new corner or keywords
   * @param {string} sMultioSelect should be corners or keywords
   * */
  setMultiSelectProps = sMultiSelect => {
    // Set object to send information to the MultiSelect components
    const oMultiSelectProperties = {
      item: 'bundle',
      item_info: Object.assign({}, this.props.bundle),
      corners: this.props.corners,
      update: {},
      save: {},
    };

    if (sMultiSelect === 'corners') {
      oMultiSelectProperties.save.corners_keywords = this.props.save(['corners', 'keywords']);
      oMultiSelectProperties.update.corners = this.props.update('corners');
    }
    else if (sMultiSelect === 'keywords') {
      oMultiSelectProperties.save.keywords = this.props.save('keywords');
    }

    oMultiSelectProperties.update.keywords = this.props.update('keywords');
    return oMultiSelectProperties;
  };


  render() {
    const [ActionColumn, Keywords, Corners] =
      [ActionColumnCmpt, KeywordsCmpt, CornersCmpt].map(cmpt => cmpt.get(this.props.tenant));

    const oCornerProps = this.setMultiSelectProps('corners');
    const oKeywordsProps = this.setMultiSelectProps('keywords');

    // set action column properties
    const oActionColumnProps = {
      url: '',
      save: this.props.save,
    };

    return (
      <div>

        <Row>

          <Col md={3} className="resources">
            <Carousel
              id_item={this.props.bundle.id}
              items="bundles"
              resources={this.props.getResources}
              onDeleteResource={this.props.onDeleteResource}
              onUpload={this.props.onUpload}
              toggleShowInCarousel={this.props.toggleShowInCarousel}/>
          </Col>

          <Col md={6} className="summary">
            <Input
              value={this.state.baseline}
              onChange={ ({ target }) => {
                this.onChangeInput(target.value, 'baseline ');
              } }
              placeholder="Baseline. Maximum 60 caractères"
              type="text"
              onBlur={this.props.save('baseline')}
              name="baseline"/>

            <div className="form-group">
              <label>
                <FormattedMessage id="targeted_bundle"/>
              </label>
              <Corners {...oCornerProps} />
            </div>

            <div className="form-group">
              <label>
                <FormattedMessage id="keyword_label"/>
              </label>
              <Keywords {...oKeywordsProps} />
            </div>

            <div className="form-group">
              <label>
                <FormattedMessage id="bundle_description"/>
              </label>
              <textarea
                style={{ width: '100%' }}
                type="text"
                rows={2}
                value={this.state.description}
                onChange={({ target }) => {
                  this.onChangeInput(target.value, 'description');
                }}
                onBlur={this.props.save('description')}
                id="create-bundle-description"/>
            </div>
          </Col>

          <Col md={3} className="action-column">
            <ActionColumn {...oActionColumnProps} />
          </Col>

        </Row>

      </div>
    );
  }
}

function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
    corners: state.get('corners').toJS(),
  };
}

const _components = {
  default: connect(stateToProps)(summary),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
