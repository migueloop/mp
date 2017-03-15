import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';

@connect(state => ({
  carouselImages: state.get('v02').get('frontOffice').get('home').get('carouselImages').get('all'),
}))

class Detail extends Components {

  constructor(props) {
    super(props);
    this.state = { page: {} };
  }

  componentWillMount = () => {
    this.setState({ page: this.props.carouselImages.toJS()[this.props.routeParams.id - 1] });
  }

  render() {
    // if the header picture is the same that shown in home, we set the title to show the same slide.
    // if not, we don't set the title because maybe this new image could have some words inside
    const title = this.state.page.detailPagePicture === this.state.page.mainPicture ? this.state.page.title : '';

    return (
      <div className="detail-page mp-home">

        <div className="detail-header-img mp-carousel" >
            <img src={`/public/uploads/carousel/${this.state.page.detailPagePicture}`} alt={this.state.page.secondaryPictureALT} />
        </div>

        <div className="detail-content">
          <h4 className="detail-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="detail-text" dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
        </div>

      </div>
    );
  }
}

export default Detail;
