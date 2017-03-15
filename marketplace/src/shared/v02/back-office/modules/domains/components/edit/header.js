import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Col, Input, Row, Well } from 'react-bootstrap';
import ProductCmpt from './product';
import { FormattedMessage } from 'react-intl';

@connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  notification: state.get('notification'),
})) class Header extends Components {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }

  onChange = evt => {
    this.setState({
      title: evt.target.value,
    });
  };

  validateName = evt => {
    if (!evt.target.value || evt.target.value.length < 3) {
      this.props.notification.add({
        message: 'Name must have at least 3 characters',
        level: 'error',
      });
      return;
    }
    this.props.update('name')(evt);
  };

  render() {
    let Product = ProductCmpt.get(this.props.tenant);

    // let {title, ...otherProps} = this.props;
    let bestProducts = this.props.bestProducts.map((product, index, products) => {
      return (
        <Col key={product.id} xs={6} md={4} lg={4} >
          <Product product={product} md={4} lg={4} sm={6} xs={6} className="cursor"
            onClick={this.props.selectBest(index + 1)} draggable={true}
            onDragStart={() => {console.log('start drag');}} />
        </Col>
      );
    });

    return (
      <Well bsSize="small" >
        <Row >
          <Col md={5} sm={12} xs={12} lg={6} >
            <div className="cover" style={{ position: 'relative' }} >
              <Dropzone style={{ width: 'auto', height: 'auto', border: 'none' }} onDrop={this.props.onDrop}
                accept={this.props.mimeAlloweds.join(',')} >
                <div style={{ textAlign: 'center' }} >
                  <img ref="logo" src={this.props.logo} style={{ maxHeight: 310, maxWidth: '100%' }}
                    alt="" />

                  <div style={{ position: 'absolute', left: 10, right: 10, bottom: 0 }} >
                    <Col lgOffset={2} lg={8}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        textAlign: 'center',
                        paddingTop: 3,
                        paddingBottom: 3,
                      }} >
                      <label><FormattedMessage id="click_or_drop_to_change_logo" /></label>
                    </Col>

                  </div>
                </div>

              </Dropzone>
            </div>
          </Col>
          <Col md={7} sm={12} xs={12} lg={6} >
            <Row>
              <Col md={8} mdOffset={2} style={{ marginTop: 15 }} >
                <Input type="text" placeholder="Corner Name" name="title"
                  onBlur={this.validateName}
                  onChange={this.props.onChange('name')}
                  style={{ fontSize: 25, textAlign: 'center', height: 'inherit' }}
                  value={this.props.title} />
              </Col>
            </Row>
            <Row>
              <Col mdOffset={1} md={10} className="mp-products grid" >
                {bestProducts}
              </Col>
            </Row>
          </Col>
        </Row>
      </Well>
    );
  }
}

const _components = {
  'default': Header,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
