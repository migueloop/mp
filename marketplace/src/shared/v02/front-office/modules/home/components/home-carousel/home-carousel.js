import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { Link } from 'react-router';
import { Carousel, CarouselItem } from 'react-bootstrap';

class HomeCarousel extends Components {
  render() {
    const slides = this.props.carouselImages.toJS().map((oSlide, index) => {
      const detailLink = oSlide.link ? (
        <Link to={oSlide.link}
          className="btn btn-primary"
          target={ oSlide.link.indexOf('http') !== -1 ? '_blank' : '' }
          >
          {oSlide.buttonText}
        </Link>
      ) : null;
      return (
        <CarouselItem key={index}
          style={{ backgroundImage: `url(/public/uploads/${this.props.tenant}/carousel/${oSlide.mainPicture})` }}
          dataTitle={oSlide.mainPictureALT}
          >
          <div className="container">
            <div className="text">
              <div className="title"
                dangerouslySetInnerHTML={{ __html: oSlide.title }}
                />
              {detailLink}
            </div>
          </div>
        </CarouselItem>
      );
    });
    const controls = slides.length <= 1 ? 'hide-controls' : '';
    return (
      slides.length >= 1 &&
      <div className={`mp-carousel ${controls}`}>
        <Carousel>{slides}</Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
