import React from 'react';
import { connect } from 'react-redux';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ActionButtonCmpt from 'v02/back-office/generic-components/buttons/action-small';
import moment from 'moment';
import { getProductType } from 'helpers/product';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { ITEM, PERMISSIONS } from 'helpers/constants';
import Button from 'react-bootstrap/lib/Button';
import IconView from 'react-icons/lib/md/remove-red-eye';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  products: state.get('products'),
  user: state.get('v02').get('common').get('user').toJS(),
}));

class DatatableDetail extends Components {

  render() {
    /*
    const userGroups = data.items.filter(group => {});
    const userGroupsJsx = userGroups.map(group => {
      return (
        <Row className="orders-list">
          <Col xs={12} className="col">{}</Col>
          <Col xs={12} className="col">{}</Col>
          <Col xs={12} className="col">{}</Col>
        </Row>
      );
    });
  */
    const data = this.props.data;
    if (!data) { return <div></div>; }
    console.log('USER', data);

    const dataGroupsNames = data.groups.map(group => {
      return (
        <Row>
          <Col xs={12} className="col">{group.name}</Col>
        </Row>
      );
    });

    const dataGroupsSquares = data.groups.map(group => {
      return (
          <Col xs={4}><div className="users-group">{group.name}</div></Col>
      );
    });


    return (
      <div>
        <div className="container">
          <Row>
            <h3><FormattedMessage id="user_info" /></h3>
          </Row>
          <Row>
            <Col xs={4} className="v-list-label"><FormattedMessage id="name" /></Col>
            <Col xs={8}>{data.firstName} {data.lastName}</Col>
          </Row>
          <Row>
            <Col xs={4} className="v-list-label"><FormattedMessage id="email" /></Col>
            <Col xs={8}>{data.email}</Col>
          </Row>
          <Row>
            <h3><FormattedMessage id="groups" /></h3>
          </Row>
          <Row>
            {dataGroupsSquares}
          </Row>
          <Row>
            <hr />
          </Row>
          <Row className="action-buttons">
            <Row><Col xs={12} className="text-right">
              <Button bsStyle="primary" className="btn-view btn btn-default" onClick={this.props.doSomething}>
                <IconView style={{ fontSize: '18px', marginRight: '7px' }} /> Voir / Modifier
              </Button>
            </Col>
            </Row>
          </Row>
        </div>
      </div>
    );
  }
}

const _components = {
  default: connector(DatatableDetail),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
