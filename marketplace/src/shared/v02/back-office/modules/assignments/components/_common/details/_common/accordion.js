/**
 ** Created by Justin on 25/08/16.
 **/
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ToggleIcon from 'react-icons/lib/fa/caret-right';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import DetailsCmpt from './gdp-details';

class Accordion extends Components {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  static propTypes = {
    itemInfo: React.PropTypes.object.isRequired,
  };


  render() {
    const [Details] = [DetailsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const itemInfo = this.props.itemInfo;
    return (
      <div className={ `list-item-row list-item-row-collapsible ${this.state.open ? 'open' : 'closed'}` } >
        <Row className="row-eq-height">
          <Col className="col-collapse">
            <Button className="collapse-toggle" onClick={ () => this.setState({ open: !this.state.open })} >
              <ToggleIcon />
            </Button>
            </Col>
          <Row className="row-eq-height">
            <Col xs={2}>
              <img className="item-logo" src={itemInfo.product.logoUrl} alt={itemInfo.product.name} />
            </Col>
            <Col className="item-name" xs={6}>
              {itemInfo.product.name}
            </Col>
            <Col className="item-name" xs={2} >
              <FormattedMessage id="type" />: <FormattedMessage id={itemInfo.product.type} />
            </Col>
          </Row>
        </Row>

        <Panel collapsible expanded={this.state.open}>
          <Row>
            <Col xs={2} />
            <Col className="item-actions" xs={8}>
              {/* created_by: itemInfo.product.created_by, created_at: moment(itemInfo.product.created_at).format('D MMM. YYYY'), */}

            </Col>
          </Row>
        </Panel>
      </div>

    );
  }

}


function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

const _components = {
  default: connect(stateToProps)(Accordion),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
