import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { PRODUCT } from 'helpers/constants';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import AssignButtonCmpt from './assign-button';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  product: state.get('v02').get('backOffice').get('products').get('current'),
  userLogged: !!state.get('v02').get('common').get('user').get('id'),
  user: state.get('v02').get('common').get('user'),
}));


class ActionsColumn extends Components {
  constructor(props) {
    super(props);
    this.state = {
      openIframe: false,
      subscriptionLink: false,
    };
  }

  getOfferView = offer => (
    <Col md={4} className="billing-offer">
      <div>
        <div className="title">
          {offer.name}
        </div>
        <ul className="features">
          {offer.products.map(product => (
            <li>
              {product.name}
            </li>
          ))}
        </ul>
        <div className="price">
          <FormattedMessage id="product_subscription"
            values={{ price: offer.price / 100, time: offer.unitRecurrence }}
            />
        </div>
        <div className="subscribe">
           <Button bsStyle="primary" onClick={() => {this.setState({ subscribe: `${offer.links.subscribe}` });}}>
           Subscribe
           </Button>
        </div>
      </div>
    </Col>
  );

  render() {
    // Get number of comments
    const product = this.props.product.toJS();


    const nProductCommentsNumber = 0;

    // Calculate product rating
    const oProductTotalRating = 4;

    // Check if we have any rating in order to show it or show another string
    // TODO: round to .5?
    const sProductRating = oProductTotalRating.ratingsNumber > 0 ? (
      <span className="value p-rating">{oProductTotalRating.totalRatings / oProductTotalRating.ratingsNumber}</span> /
      <span className="best p-best">{PRODUCT.RATINGS.MAXRATING}</span>
    ) : (<FormattedMessage id="product_not_rated" />);

    const [AssignButton] = [AssignButtonCmpt].map(cmpt => cmpt.get(this.props.tenant));

    // TODO: why upper/lower case??! className -> lower, other -> none (done in CSS)
    const oProductType = PRODUCT.TYPEINFO[product.type];

    // OS
    /* TODO: require OS name (for icon) and alt="" */
    const osLinks = product.links.sort((a, b) => a.link > b.link ? -1 : 1)
      .map((link, i) => (
        <li key={i}>
          <Link to={ link.url } rel="external" >
            <i className="icono icono-os"></i>
            <span className="text">OS</span>
          </Link>
        </li>
      ));

    // TODO: evaluated formatted message
    let productTitle = '';
    switch (oProductType.title) {
      case 'product_mobileapp':
        productTitle = <FormattedMessage id="product_mobileapp" />;
        break;
      case 'product_saas':
        productTitle = <FormattedMessage id="product_saas" />;
        break;
      case 'product_material':
        productTitle = <FormattedMessage id="product_material" />;
        break;
      case 'product_service':
        productTitle = <FormattedMessage id="product_service" />;
        break;
      default:
        productTitle = oProductType.title;
    }

    let subscribeButton = null;

    if (product.offers && product.offers.length > 0) {
      let bestOffer = product.offers[0];
      bestOffer = product.offers.reduce((bOffer, offer) => {
        if (offer.price < bestOffer.price) {
          return offer;
        }
        return bOffer;
      }, bestOffer);
      const { price, unitRecurrence } = bestOffer;
      subscribeButton = (
        <Link onClick={evt => {
          evt.preventDefault();
          this.setState({
            openIframe: true,
            subscribe: product.offers.length > 1 ? null : product.offers[0].links.subscribe,
          });
        }}
          to="#subscribe"
          className="subscribe btn btn-primary"
          >
          <FormattedMessage id="product_subscription"
            values={{ price: price / 100, time: unitRecurrence }}
            />
        </Link>
      );
    }

    let subscribe = product.offers && product.offers.map(this.getOfferView);

    if (this.state.subscribe) {
      subscribe = (
        <iframe src={`${this.state.subscribe}`}
          style={{ border: 'none' }} width="100%" height="700px"
          frameBorder="0"
          />
      );
    }

    return (
      <div className="mp-sidebar">
        <div className="type">
          <i className={`icono icono-${oProductType.class}`}></i>
          <h4 className="category">{productTitle}</h4>
        </div>
        <div className="feedback">

          {/* Like button */}
          <Link to="#like" onClick={evt => evt.preventDefault()} className={`btn-like like ${!!this.props.userLogged ? 'hidden' : 'none'}`} >
            <i className="icono icono-like"></i>
            <span className="text"><FormattedMessage id="product_like" /></span>
          </Link>

          {/* Rating */}
          <p className="review hreview h-review">
            <span className="rating">{sProductRating}</span>
            <span className={`comments ${nProductCommentsNumber ? '' : 'hidden'}`}>
              <FormattedMessage id="product_comments"
                values={{ commentsNumber: nProductCommentsNumber }}
                />
            </span>
          </p>

        </div>
        <div className="actions">
            {
              this.props.userLogged && <AssignButton user={this.props.user} product={this.props.product} />
            }

            {/* Subscribe */}
            {subscribeButton}

            {/* Contact */}
            <Link to="#contact" onClick={this.props.openContactUsModal} className="contact btn btn-default">
              <FormattedMessage id="product_contact" />
            </Link>

        </div>

        {/* Other links */}
        <ul className="tools">
          <li>
            <Link onClick={evt => evt.preventDefault()} to="#community" rel="external" className="community">
              <i className="icono icono-community"></i>
              <span className="text">
                <FormattedMessage id="product_community" />
              </span>
            </Link>
          </li>
        </ul>

        {/* Proabono */}
        <Modal bsSize="lg" show={this.state.openIframe} onHide={() => {this.setState({ openIframe: false, subscribe: null });}}>
          <Modal.Header>
            <FormattedMessage id="product_subscribe" />
          </Modal.Header>
          <Modal.Body>
            <Row>
              {subscribe}
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


const _components = {
  default: connector(ActionsColumn),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
