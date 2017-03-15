import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import SwitchBtnCmpt from 'v02/back-office/generic-components/buttons/switch';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import _ from 'underscore';
import { PRODUCT_AVAILABLE_FEATURES } from 'helpers/constants/features';

class Settings extends Components {

  constructor(props) {
    super(props);
    this.switchButton = SwitchBtnCmpt.get(this.props.tenant);
  }

  static featureName() {
    return 'products.features.settings';
  }

  static propsTypes = {
    onChangeFeatureAvailability: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    if (this.props.onChangeTab) {
      this.props.onChangeTab('settings');
    }
  }

  getRows = currentlyEnabledFeatures => {
    return PRODUCT_AVAILABLE_FEATURES.map(feature => {
      const isEnabled = currentlyEnabledFeatures.isIntersected(feature.id);
      const MyRow = (
        <Row className="rows-alt">
          <Col xs={6}>{this.format({ id: feature.id })}</Col>
          <Col xs={6} className="text-right">{ this.transform.available(isEnabled, feature)}</Col>
        </Row>
      );
      return MyRow;
    });
  }

  onChangeSwitchButton = rowData => _.debounce(state => this.props.onChangeFeatureAvailability(rowData.id, state), 300);

  transform = {
    available: (isChecked, rowData) => {
      // If a feature is forced active then we disable it.
      const disabled = rowData.forceActive || false;
      const SwitchBtn = this.switchButton;
      const offText = this.format({ id: 'no' });
      const onText = this.format({ id: 'yes' });
      const onChange = this.onChangeSwitchButton(rowData);
      return <SwitchBtn disabled={ disabled } onText={ onText } offText={ offText } isChecked={ isChecked } onChange={ onChange } />;
    },
  };

  render() {
    const features = this.props.product.availableFeatures || [];
    const rows = this.getRows(features);
    return <div className="mp-tab mp-tab-summary"><div>{ rows }</div></div>;
  }
}

const _components = { default: Settings };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
