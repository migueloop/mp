import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import { Link } from 'react-router';
import Actions from 'flux/actions';
import ModalTimeLineCmpt from 'v02/back-office/modules/modals/modal-timeline';
import Menu from 'v02/back-office/generic-components/layout/horizontal-menu-new';

class Assignments extends Components {

  constructor(props) {
    super(props);
    this.actions = new Actions(this.props.tenant);
    this.state = {
      timeline: {},
      timelineModal: false,
    };
  }

  hideModal = sModal => {
    switch (sModal) {
      case 'timeline':
        return this.setState({ timeline: null, timelineModal: false });
      default:
        break;
    }
  };

  showModal = (sModal, oData) => {
    switch (sModal) {
      case 'timeline':
        this.setState({ timeline: oData, timelineModal: true });
        break;
      default:
        break;
    }
  };

  _getMenuItems() {
    const menuitems = [
      { url: '/admin/follow-ups/draft', title: this.format({ id: 'orders_manage' }) },
      { url: '/admin/follow-ups/in-progress', title: this.format({ id: 'in_progress' }), extraInfo: this.format({ id: 'action_can_be_required' }) },
      { url: '/admin/follow-ups/done', title: this.format({ id: 'done' }) },
    ];
    return menuitems;
  }


  render() {
    const [ModalTimeLine] = [ModalTimeLineCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const children = React.Children.map(this.props.children, child => (
      React.cloneElement(child, {
        random: Math.random(),
        showModal: this.showModal,
        hideModal: this.hideModal,
        detail: this.detail,
        ...this.state,
      })
    ));

    const menuitems = this._getMenuItems();
    const menu = menuitems.map(data => {
      let extraInfo = (<span></span>);
      if (data.extraInfo) {
        extraInfo = (
          <span style={{ position: 'absolute', right: '0', bottom: '20' }} className="hidden-sm-down" >
              <OverlayTrigger placement="right" overlay={ <Tooltip id="tooltip">{data.extraInfo}</Tooltip> }>
                <Glyphicon glyph="info-sign" />
              </OverlayTrigger>
          </span>);
      }
      return (<Link key={data.id} to={data.url} activeClassName="active" id={data.id} >{data.title}{extraInfo}</Link>);
    });

    return (
      <div className="container">
        <div className="page-header"><Menu>{menu}</Menu></div>
        <Row><Col xs={12} className="table-container">{children}</Col></Row>
        { !!this.state.timelineModal && <ModalTimeLine assignment={this.state.timeline} show={!!this.state.timelineModal} onHide={() => this.hideModal('timeline')} /> }
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
  default: connect(stateToProps)(Assignments),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
