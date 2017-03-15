import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import HtmlEditor from 'v02/back-office/modules/products/components/edit/html-editor';
import Dropzone from 'react-dropzone';
import ModalSelectResourceCmpt from 'v02/back-office/modules/products/components/edit/modal-select-resource';
import Actions from 'flux/actions';
import { FormattedMessage } from 'react-intl';
import { Actions as ActionsV02 } from 'v02/flux';

class Editor extends Components {
  constructor(props) {
    super(props);
    this.state = {
      editorLogoUrl: '',
      showSelectResource: false,
    };
  }

  static featureName() {
    return 'products.features.editor';
  }


  static contextTypes = {
    product: React.PropTypes.object,
    save: React.PropTypes.func,
    update: React.PropTypes.func,
  };

  save = field => value => {
    this.context.update(field)(value);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.context.save(field), 1000);
  };

  onSelectResource = resource => {
    this.setState({
      showSelectResource: false,
    });
    this.context.update('editor_logo')(resource.id);
    setTimeout(this.context.save('editor_logo'), 150);
  };

  onDrop = files => {
    new Actions(this.props.tenant)
      .Products.AddResource({
        id: this.props.product.toJS().id,
        resource: {
          file: files[0],
        },
      })
      .then(action => {
        this.props.dispatch(action);
        if (action.product.resource.id) {
          const logoResource = this.props.product.toJS().resources.find(r => r.id === action.product.resource.id);
          this.context.update('editor_logo_url')(`/public/uploads/products/${this.props.product.toJS().id}/${logoResource.name}`);
        } else {
          this.context.update('editor_logo_url')('/public/images/placeholders/product.png');
        }
        this.context.update('editor_logo')(action.product.resource.id);
        setTimeout(this.context.save('editor_logo'), 150);
      });
  };

  removeEditorLogo = () => {
    this.context.update('editor_logo_url')(null);
    this.context.update('editor_logo')(null);
    setTimeout(this.context.save('editor_logo'), 150);
  };

  render() {
    const [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const hoverStyle = {
      position: 'absolute',
      top: '50%',
      marginTop: '-66px',
      left: 0,
      right: 0,
    };

    return (
      <div>
        <Row>
          <Col md={4} className="thumbnail">

              <div className="hover-container">
                <img src={this.props.product.toJS().editorLogoUrl}
                  style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, margin: '0 auto' }}
                  />

                <div className="hover-actions">
                  <div style={hoverStyle}>
                    <Row>
                      <Button style={{ width: '200px' }} bsStyle="info" onClick={() => {this.setState({ showSelectResource: true }); }}><FormattedMessage id="select" /></Button>
                    </Row>
                    <Row>
                      <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }}
                        onDrop={this.onDrop}
                        accept={['image/png', 'image/jpg', 'image/jpeg'].join(',')}
                        >
                        <Button style={{ width: '200px' }} bsStyle="success"><FormattedMessage id="upload" /></Button>
                      </Dropzone>
                    </Row>
                    <Row>
                      <Button style={{ width: '200px' }} bsStyle="danger" onClick={this.removeEditorLogo}><FormattedMessage id="withdraw" /></Button>
                    </Row>
                  </div>
                </div>
              </div>
          </Col>
          <Col md={8}>
            <form>
              <label style={{ width: '100%' }}>
                <span><FormattedMessage id="editor_website" /></span>
                <Input type="text" value="unavailable - see code"
                  onChange={({ target: { value } }) => this.save('editor_homepage')(value) }
                  />
              </label>
              <label style={{ width: '100%' }}>
                <span><FormattedMessage id="legal_notice" /></span>
                <Input className="editorLegalMentionsInput" type="text" value="unavailable - see code"
                  onChange={({ target: { value } }) => { this.save('editor_legal_mentions')(value); } }
                  />
              </label>
              <label style={{ width: '100%' }}>
                <span><FormattedMessage id="description" /></span>
                <HtmlEditor style={{ minHeight: 200 }} value="unavailable - see code"
                  onChange={this.save('editor_description')}
                  />
              </label>
            </form>
          </Col>
        </Row>
        <ModalSelectResource
          show={this.state.showSelectResource}
          hide={() => this.setState({ showSelectResource: false }) }
          onSelect={this.onSelectResource}
          resources={this.props.product.toJS().resources.filter(p => p.type.startsWith('image'))}
          { ...this.props }
          />
      </div>
    );
  }
}

const _components = { default: Editor };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
