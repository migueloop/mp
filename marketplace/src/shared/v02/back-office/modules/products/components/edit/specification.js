import React from 'react';
// import ReactDOM from 'react-dom';
import Components from 'v02/common/generic-components/base-component';
import Input from 'react-bootstrap/lib/Input';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ModalSelectResourceCmpt from './modal-select-resource';
import { FormattedMessage } from 'react-intl';
import Actions from 'flux/actions';
import Dropzone from 'react-dropzone';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class Specification extends Components {
  constructor(props) {
    super(props);
    this.state = {
      selectResource: false,
    };
  }

  static contextTypes = {
    product: React.PropTypes.object,
    save: React.PropTypes.func,
    update: React.PropTypes.func,
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    specification: React.PropTypes.number,
    resources: React.PropTypes.array.isRequired,
  };

  selectResource = resource => {
    this.setState({
      selectResource: false,
    });
    this.context.update('specification')(resource.id);
    setTimeout(this.context.save('specification'), 150);
  };

  onDrop = files => {
    new Actions(this.props.tenant)
    .Products.AddResource({
      id: this.props.product.get('id'),
      resource: {
        file: files[0],
      },
    })
    .then(action => {
      this.props.dispatch(action);
      this.context.update('specification')(action.product.resource.id);
      setTimeout(this.context.save('specification'), 150);
    });
  }

  open = () => {
    this.refs.dropzone.open();
  }

  render() {
    const product = this.props.product.toJS();
    const [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let specification = this.format({ id: 'no_file_selected' });
    if (this.props.specification) {
      const objSpecification = this.props.resources.find(r => parseInt(r.id, 10) === parseInt(this.props.specification, 10));
      specification = objSpecification.name_custom || objSpecification.name;
    }

    const dropdown = (
      <DropdownButton noCaret title={ <Glyphicon glyph="triangle-bottom" /> } id="input-dropdown-addon">
        <MenuItem onClick={() => this.setState({ selectResource: true })}>{this.format({ id: 'select' })}</MenuItem>
        <MenuItem key="Upload-key-1" onClick={this.open} ><FormattedMessage id="upload" /></MenuItem>
      </DropdownButton>
    );

    return (
      <div>
        <label style={{ width: '100%' }}>
          <span><FormattedMessage id="datasheet_pdf" /></span>
          <Input type="text" buttonAfter={dropdown} value={specification} disabled onChange={() => {} } />
        </label>
        <ModalSelectResource
          show={this.state.selectResource}
          hide={() => this.setState({ selectResource: false })}
          resources={product.resources} onSelect={this.selectResource}
          { ...this.props }
          />
        <Dropzone ref="dropzone" style={{ display: 'none', width: '0', height: '0', border: 'none' }} onDrop={this.onDrop} />
      </div>
    );
  }
}

const _components = { default: Specification };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
