import React from 'react';
import Components from 'v02/common/generic-components/base-component';
// import { getProductGalleryImages } from 'helpers/product';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import CarouselCmpt from 'v02/back-office/generic-components/carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import { PRODUCT_SUMMARY, PRODUCT_FEATURES } from 'helpers/constants/features';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
}));

class Summary extends Components {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };
  }

  componentWillMount() {
    if (this.props.onChangeTab) {
      this.props.onChangeTab('summary');
    }
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }


  render() {
    const product = this.props.product.toJS();

    if (!product.availableFeatures.find(productFeatures => PRODUCT_SUMMARY.id === productFeatures.idFeature)) {
      return <div>Not Available</div>;
    }

    const productDescription = { __html: product.description };
    // TODO: factorize with Components/Shared/KeywordList...
    const productKeywords = product.keywords.map(keyword => {
      const html = (
        <li className="category p-category" key={keyword.id}>
          <Link to={ keyword.name ? `/catalog/keywords/${keyword.name}` : '#' }>#{keyword.name}</Link>
        </li>
      );
      return html;
    });

    //const aHomeImages = product.resources.length > 0 ? getProductGalleryImages(product.resources, product.id) : [];
    const aHomeImages = product.resources.filter(p => !!p.homeOrder)
    aHomeImages.sort((a, b) => a.homeOrder - b.homeOrder);
    const aGalleryImages = aHomeImages.map((oImage, index) => {
      const galleryImage = {
        original: `/public/uploads/products/${product.id}/${oImage.name}`,
        thumbnail: `/public/uploads/products/${product.id}/${oImage.name}`,
      };
      return galleryImage;
    });
    const oSlides = aGalleryImages.map((resource, index) => (
      <CarouselItem key={index}>
        <img src={resource.original} />
      </CarouselItem>
    ));

    console.log("SLIDES2-->",aGalleryImages);



    const [Carousel] = [CarouselCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div className="mp-tab mp-tab-summary">
        <Row>
          <Col sm={12} md={5} xs={12}>
            {oSlides.length > 0 &&
            <Carousel
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
              direction={this.state.direction}>
              {oSlides}
            </Carousel>
            }
          </Col>
          <Col sm={12} md={7} xs={12}>
            <h3 className="tagline">{product.baseline}</h3>
            <ul className="mp-keywords categories">{productKeywords}</ul>
            <div className="description e-description" dangerouslySetInnerHTML={productDescription}></div>
            <p className="more">
              { !!product.availableFeatures.find(productFeatures => PRODUCT_FEATURES.id === productFeatures.idFeature) &&
              <Link to={`/product/${product.alias}/features`}>
                <FormattedMessage id="product_read_more" />
              </Link> }
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

const _components = {
  default: connector(Summary),
};


export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
