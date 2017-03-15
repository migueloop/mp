/**
 * Created by cjgm on 5/26/16.
 */
import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Col from 'react-bootstrap/lib/Col';
import { FormattedMessage } from 'react-intl';
import ItemsCmpt from '../items';

class Summary extends Components {

  constructor(props) {
    super(props);
    this.state = {
      description: this.props.assignment.description,
    };
  }

  static propTypes = {
    assignment: React.PropTypes.object.isRequired,
    update: React.PropTypes.func.isRequired,
  };

  onAddItem = oNewItem => {
    console.log('oNewItem', oNewItem);
    oNewItem.id_assignment = this.props.assignment.id;
    this.props.update('items')(oNewItem);
  };

  render() {
    const [Items] = [ItemsCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div>
        <Col>
          <Items
            assignment={this.props.assignment}
            onAddItem={this.onAddItem} />
        </Col>
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
  default: connect(stateToProps)(Summary),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
