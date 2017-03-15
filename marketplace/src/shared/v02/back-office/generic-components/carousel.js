import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import CarouselSlick from 'react-slick';

// SLICK SLIDER REFERENCE:
// https://github.com/akiran/react-slick

class Carousel extends Components {

  render() {
    const multi = this.props.children ? this.props.children.length > 1 : false;
    const props = {
      arrows: multi,
      dots: multi,
      // dotsClass: '',
      infinite: true,
      autoplay: multi,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      draggable: multi,
    };
    // ignore var in case of unwanted props
    const { ignore } = this.props;
    return (
      <div>
        <CarouselSlick {...props} >
          {this.props.children}
        </CarouselSlick>
      </div>
    );
  }
}

const _components = {
  default: Carousel,
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
