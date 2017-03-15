import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Button from './button';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import ActionButton from 'v02/back-office/generic-components/buttons/action';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class TableActions extends Components {
  static get Button() { return Button; }
  static propTypes = {};
  render() {
    const buttons = React.Children.toArray(this.props.children).reduce((previous, current) => {
      if (current.props.primary) {
        previous.splice(0, 0, current.props);
        return previous;
      }
      previous.push(current.props);
      return previous;
    }, []);
    const primary = buttons.shift();
    const buttonsUI = buttons.map((button, index) => {
      const { style, type, ...others } = button;
      const buttonOptions = this.getButtonOptions(type);
      return <li key={`button-${index}`}><ActionButton {...buttonOptions} style={style} {...others} /></li>;
    });
    const primaryButtonOptions = this.getButtonOptions(primary.type);
    return (
      <div className="table-actions-container">
          <ActionButton {...primaryButtonOptions} {...primary} />
          <Dropdown id={`dropdown-${Math.random()}`} pullRight style={{ display: buttonsUI.length > 0 ? '' : 'none' }}>
            <Dropdown.Toggle pullRight noCaret><Glyphicon glyph="option-horizontal" /></Dropdown.Toggle>
            <Dropdown.Menu>{buttonsUI}</Dropdown.Menu>
          </Dropdown>
      </div>
    );
  }

  getButtonOptions = type => {
    switch (type) {

      case 'view':
        return { icon: 'eye-open', text: this.format({ id: 'visualize' }), className: 'btn-view btn-ico-left' };

      case 'edit':
        return { icon: 'pencil', text: this.format({ id: 'modify' }), className: 'btn-edit btn-ico-left' };

      case 'validate':
        return { icon: 'ok', text: this.format({ id: 'validate' }), className: 'btn-validate btn-ico-left' };

      case 'request-publication':
        return { icon: 'eye-open', text: this.format({ id: 'demand_publication' }), className: 'btn-request-publication btn-ico-left' };

      case 'publish':
        return { icon: 'cloud-upload', text: this.format({ id: 'publish' }), className: 'btn-publish btn-ico-left' };

      case 'unpublish':
        return { icon: 'cloud-download', text: this.format({ id: 'unpublish' }), className: 'btn-unpublish btn-ico-left' };

      case 'remove':
        return { icon: 'remove', text: this.format({ id: 'remove' }), className: 'btn-remove btn-ico-left' };

      case 'withdraw':
        return { icon: 'remove', text: this.format({ id: 'withdraw' }), className: 'btn-withdraw btn-ico-left' };

      default:
        return {};
    }
  }
}

export default TableActions;
