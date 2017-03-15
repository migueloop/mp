import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import IconView from 'react-icons/lib/md/remove-red-eye';
import IconEdit from 'react-icons/lib/md/mode-edit';
import IconValidate from 'react-icons/lib/go/dash';
import IconRequest from 'react-icons/lib/md/help-outline';
import IconPublish from 'react-icons/lib/md/cloud-upload';
import IconUnpublish from 'react-icons/lib/md/cloud-download';
import IconDelete from 'react-icons/lib/go/x';
import IconWithdraw from 'react-icons/lib/fa/long-arrow-left';
import IconOK from 'v02/back-office/generic-components/icons/ok';

// const connector
class Action extends Components {
  static propsTypes = {
    onClick: React.PropTypes.func,
    width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    disabled: React.PropTypes.boolean,
  };

  static defaultProps = { width: '100%' };


  getButtonOptions = type => {
    switch (type) {
      case 'view':
        return { icon: <IconView />, text: this.format({ id: 'visualize' }), className: 'btn-view' };
      case 'detail':
        return { icon: <IconView />, text: this.format({ id: 'details' }), className: 'btn-view' };
      case 'edit':
        return { icon: <IconEdit />, text: this.format({ id: 'modify' }), className: 'btn-edit' };
      case 'validate':
        return { icon: <IconValidate />, text: this.format({ id: 'validate' }), className: 'btn-validate' };
      case 'ok':
        return { icon: <IconOK />, text: this.format({ id: 'validate' }), className: 'btn-ok' };
      case 'request-publication':
        return { icon: <IconRequest />, text: this.format({ id: 'demand_publication' }), className: 'btn-request-publication' };
      case 'publish':
        return { icon: <IconPublish />, text: this.format({ id: 'publish' }), className: 'btn-publish' };
      case 'unpublish':
        return { icon: <IconUnpublish />, text: this.format({ id: 'unpublish' }), className: 'btn-unpublish' };
      case 'delete':
        return { icon: <IconDelete />, text: this.format({ id: 'remove' }), className: 'btn-remove' };
      case 'withdraw':
        return { icon: <IconWithdraw />, text: this.format({ id: 'withdraw' }), className: 'btn-withdraw' };
      case 'request':
        return { icon: <IconRequest />, text: this.format({ id: 'demand_validation' }), className: 'btn-request' };
      case 'purchase-order':
        return { icon: <Glyphicon glyph="list-alt" />, text: this.format({ id: 'purchase_order' }), className: 'btn-purchase-order' };
      case 'options':
        return { icon: <Glyphicon glyph="option-horizontal" />, text: this.format({ id: 'detail' }), className: 'btn-options' };
      case 'line_options':
        return { icon: <Glyphicon glyph="list" />, text: this.format({ id: 'options' }), className: 'btn-line-options' };
      case 'suspension':
        return { icon: <Glyphicon glyph="pause" />, text: this.format({ id: 'suspension' }), className: 'btn-suspension' };
      case 'sim':
        return { icon: <Glyphicon glyph="list-alt" />, text: this.format({ id: 'sim' }), className: 'btn-sim' };
      case 'sav':
        return { icon: <Glyphicon glyph="info-sign" />, text: this.format({ id: 'sav' }), className: 'btn-sav' };
      case 'next':
        return { icon: <Glyphicon glyph="arrow-right" />, text: this.format({ id: 'next' }), className: 'btn-next' };
      case 'activate_timeline':
        return { icon: <Glyphicon glyph="play-circle" />, text: this.format({ id: 'activate_timeline' }), className: 'btn-activate-timeline' };
      default:
        return { icon: <IconRequest />, text: this.format({ id: 'request_validation' }), className: 'btn-request' };
    }
  }

  render() {
    const options = this.getButtonOptions(this.props.type);
    const Icon = options.icon;
    return (
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{options.text}</Tooltip>}>
        <Button disabled={this.props.disabled} onClick={this.props.onClick} className={`${options.className} btn-square`}>
          {Icon}
        </Button>
      </OverlayTrigger>
    );
  }
}

const _components = {
  default: Action,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
