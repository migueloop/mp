import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Carousel from 'react-bootstrap/lib/Carousel';
import ModalSelectResourceCmpt from 'v02/back-office/modules/modals/modal-select-carousel-resource';
import CarouselCmpt from 'v02/back-office/generic-components/carousel';

class carousel extends Components {

  constructor(props) {
    super(props);
    this.state = {
      availableResources: 0,
      showModalEditCarousel: false,
      carouselIndex: 0,
      carouselDirection: null,
    };
  }

  static propTypes = {
    id_item: React.PropTypes.number.isRequired,
    items: React.PropTypes.string.isRequired,
    onDeleteResource: React.PropTypes.func.isRequired,
    onUpload: React.PropTypes.func.isRequired,
    resources: React.PropTypes.func.isRequired,
    toggleShowInCarousel: React.PropTypes.func.isRequired,
  };

  _createCarouselItem = (sImageUrl, sKey) => {
    const imgStyle = {
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    };
    return (
      <div
        onClick={ () => this.setState({ showModalEditCarousel: true }) }
        key={sKey}
        style={{ cursor: 'pointer' }}
        >
        <img src={sImageUrl} />
      </div>
    );
  };


  /**
   * Handle carousel and which slide is shown
   * @param {number} selectedIndex index of current slide shown
   * @param {object} e event
   */
  handleSelectCarouselItem = (selectedIndex, e) => {
    this.setState({
      carouselIndex: selectedIndex,
      carouselDirection: e.direction,
    });
  };


  onDeleteResource = oResource => {
    this.props.onDeleteResource(oResource);
  };


  onSelectResource = oResource => {
    this.props.resources().forEach(oCurrentResource => {
      if (oResource.id === oCurrentResource.id) {
        oCurrentResource.show_carousel = oResource.show_carousel;
      }
    });

    // go to save to DB and trigger the Action
    this.props.toggleShowInCarousel(oResource);
  };


  /**
   * Set the items to show in the carousel. We will check the show_carousel field in every resource
   * @returns {array} of the available resources. If there are any, return an array only with one element and generic placeholder
   */
  setCarouselItems = () => {
    const sResourceImageUrl = '/public/images/placeholders/product.png';

    // filter the resources with field show_carousel set at true
    console.log("carouse!!!!!");
    console.log(this.props.resources());
    if(this.props.resources()){
    let aResources = this.props.resources().filter(oResource => (oResource.show_carousel));

    // if we don't have any resource to show inside carousel, show a generic image
    if (aResources.length === 0) {
      aResources.push(this._createCarouselItem(sResourceImageUrl, 'new'));
    }
    else {
      aResources = aResources.map(oResource => {
        return this._createCarouselItem(`/public/uploads/${this.props.items}/${this.props.id_item}/${oResource.name}`, oResource.name);
      });
    }
      return aResources;
    }
  };


  /**
   * Change the state of the boolean that indicates if show the select resource modal
   */
  toggleModalSelectResource = () => {
    this.setState({ showModalEditCarousel: !this.state.showModalEditCarousel });
  };

  render() {
    let [ModalSelectResource] = [ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const oSlides = this.setCarouselItems();
    const [Carousel] = [CarouselCmpt].map(cmpt => cmpt.get(this.props.tenant));


    return (
      <div style={{ height: '400' }}>
        <Carousel
          activeIndex={this.state.carouselIndex}
          onSelect={this.handleSelectCarouselItem}
          direction={this.state.carouselDirection} >
          {oSlides}
        </Carousel>
        <ModalSelectResource
          show={this.state.showModalEditCarousel}
          hide={this.toggleModalSelectResource}
          onDeleteResource={this.onDeleteResource}
          onSelect={this.onSelectResource}
          onUpload={this.props.onUpload}
          resources={this.props.resources} />
      </div>
    );
  }
}


function stateToProps(state) {
  return {
    tenant: state.get('v02').get('common').get('tenant').get('name'),
  };
}

export default connect(stateToProps)(carousel)
