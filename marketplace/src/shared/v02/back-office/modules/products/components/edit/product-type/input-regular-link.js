import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import Input from 'react-bootstrap/lib/Input';

class InputRegularLink extends Components {

  constructor(props) {
    super(props);
    const images = [
      '/public/images/customUrls/map-marker.png',
      '/public/images/customUrls/hp-store.png',
      '/public/images/customUrls/envelope.png',
    ];
    this.state = {
      images,
      currentImage: images.indexOf(this.props.image),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      currentImage: this.state.images.indexOf(props.image),
    });
  }

  changeImage = () => {
    if (!this.props.value) {
      return;
    }
    this.props.onChange({
      image: this.state.images[(this.state.currentImage + 1) % this.state.images.length],
    });
    setTimeout(this.props.onBlur, 150);
  };

  render() {
    const Icon = <img src={this.state.images[this.state.currentImage]} onClick={this.changeImage} />;
    return (
      <Input
        value={this.props.value}
        onChange={({ target }) => {this.props.onChange({ url: target.value });}}
        className="mp-field"
        placeholder="http://appurl.com"
        type="text" addonBefore={Icon}
        onBlur={this.props.onBlur}
        />
    );
  }
}

const _components = { default: InputRegularLink };

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
