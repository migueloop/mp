import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

import connect from 'react-redux/lib/components/connect';
import { FormattedMessage } from 'react-intl';
import { MultiSelect } from 'react-selectize';

import { Actions as ActionsV02 } from 'v02/flux';
import Actions from 'flux/actions';

import Components from 'v02/common/generic-components/base-component';
import HtmlEditor from 'v02/back-office/modules/products/components/edit/html-editor';
import ModalSlideshowCmpt from 'v02/back-office/modules/products/components/edit/modal-slideshow';
import ModalSelectResourceCmpt from 'v02/back-office/modules/products/components/edit/modal-select-resource';

import ConfirmationPopupCmpt from 'v02/back-office/generic-components/confirmation-popup';
import CarouselCmpt from 'v02/back-office/generic-components/carousel';

const save = key => data => console.log('SAVING::', key, '::', data);
const update = key => data => console.log('UPDATING::', key, '::', data);

class Summary extends Components {
  constructor(props) {
    super(props);
    this.state = {
      showModalEditCarousel: false,
      selectResource: false,
      resourceToDelete: null,
      index: 0,
      direction: null,
    };
  }

  static featureName() {
    return 'products.features.summary';
  }

  selectFromResources = position => {
    this.setState({ selectResource: position });
  };

  onSelectResource = resource => {
    const product = {
      id: this.props.product.toJS().id,
      resource: {
        id: resource.id,
        home_order: this.state.selectResource,
      },
    };
    new Actions(this.props.tenant).Products.AddSlideShowFromResource(product)
    .then(this.props.dispatch);
    this.setState({ selectResource: 0 });
  };

  uploadPhoto = (position, files) => {
    new Actions(this.props.tenant).Products.AddSlideShow({
      id: this.props.product.toJS().id,
      resource: { home_order: position, file: files[0] },
    })
    .then(this.props.dispatch);
  };

  deleteFromSlideshow = () => {
    const resource = this.state.resourceToDelete;
    this.setState({ resourceToDelete: null });
    new Actions(this.props.tenant).Products.DeleteFromSlideshow({ id: this.props.product.toJS().id, resource })
    .then(this.props.dispatch);
  };

  getHomeImages(product) {
    return product.resources.filter(p => p.home_order !== null).sort((a, b) => a.home_order - b.home_order);
  }

  removeKeyword = item => () => {
    const corners = this.props.product.toJS().domains.filter(clickedItem => item.value !== clickedItem.id);
    const keywords = corners.reduce((kwords, corner) => (
      kwords.concat(
        this.props.product.toJS().keywords.filter(k => (
          !!this.props.domains.toJS().find(c => parseInt(c.id, 10) === parseInt(corner.id, 10))
          .keywords.find(k2 => parseInt(k2.id, 10) === parseInt(k.id, 10))
        ))
      )
    ), []);
    update('corners')(corners);
    setTimeout(() => {
      update('keywords')(keywords);
    }, 200);
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  // TODO: When removing a corner remove the keywords of this corner from this product
  render() {
    console.log('Object.keys(this.props)', Object.keys(this.props));
    const [ModalSlideshow, ConfirmationPopup, ModalSelectResource] = [ModalSlideshowCmpt, ConfirmationPopupCmpt, ModalSelectResourceCmpt].map(cmpt => cmpt.get(this.props.tenant));
    const product = this.props.product.toJS();
    const homeImages = this.getHomeImages(product);
    const [Carousel] = [CarouselCmpt].map(cmpt => cmpt.get(this.props.tenant));
    let oSlides = homeImages.map((resource, index) => (
      <div onClick={() => this.setState({ showModalEditCarousel: true })} style={{ cursor: 'pointer' }} >
        <img src={`/public/uploads/products/${product.id}/${resource.name}`} />
      </div>
      )
    );

    if (oSlides.length === 0) {
      oSlides = [(
        <CarouselItem key="new" onClick={() => this.setState({ showModalEditCarousel: true })} style={{ cursor: 'pointer' }} >
          <img src="/public/images/placeholders/product.png" />
        </CarouselItem>
      )];
    }

    const multiselectCornerProperties = {
      onBlur: save(['corners', 'keywords']),
      options: this.props.domains.toJS().map(c => ({ label: c.name, value: c.id })),
      values: product.domains.map(c => ({ label: c.name, value: c.id })),
      onValuesChange: (corners, callback) => {
        update('corners')(corners.map(c => ({ id: c.value, name: c.label })));
        callback();
      },
      renderValue: item => (
        <div className="simple-value"><span onClick={this.removeKeyword(item)}>{item.label}</span></div>
      ),
    };

    return (
      <div>
        <Col md={4} className="no-padding-left">
          <Carousel
            activeIndex={this.state.index}
            onSelect={this.handleSelect}
            direction={this.state.direction}
            >
            {oSlides}
          </Carousel>
        </Col>
        <Col md={8}>
          <label style={{ width: '100%', fontWeight: 'normal' }}>
            <div><FormattedMessage id="corners" /></div>
            <MultiSelect className="cornersMultiselect" {...multiselectCornerProperties} />
          </label>
          <label style={{ width: '100%', fontWeight: 'normal' }}>
            <div><FormattedMessage id="keywords" /></div>
            <MultiSelect className="keywordsMultiselect" onBlur={save('keywords')}
              options={product.domains.reduce((keywords, productCorner) => {
                const domain = this.props.domains.toJS().find(c => parseInt(c.id, 10) === parseInt(productCorner.id, 10));
                if (!domain) {
                  return keywords;
                }
                // TODO: quick fix for v02 migrations. Remove later.
                domain.keywords = domain.keywords || [];
                return keywords.concat(
                 domain.keywords.reduce((prev, keyword) => {
                   if (!keywords.find(k => parseInt(k.value, 10) === parseInt(keyword.id, 10))) {
                     prev.push({ label: keyword.name, value: keyword.id });
                   }
                   return prev;
                 }, [])
               );
              }, [])}
              values={product.keywords.map(k => ({ label: k.name, value: k.id }))}
              onValuesChange={(keywords, callback) => {
                update('keywords')(keywords.map(k => ({ id: k.value, name: k.label })));
                callback();
              }}
              renderValue={ item => {
                const html = (
                  <div className="simple-value">
                    <span onClick={() => { update('keywords')(product.keywords.filter(clickedItem => item.value !== clickedItem.id)); }} >
                      {item.label}
                    </span>
                  </div>
                );
                return html;
              }}
              />
          </label>
          <label style={{ width: '100%', fontWeight: 'normal' }} >
            <div><FormattedMessage id="summary" /></div>
            <Input name="baseline" type="text" value={product.baseline}
              onChange={ ({ target }) => { update('baseline')(target.value); } }
              onBlur={save('baseline')}
              />
          </label>
          <label style={{ width: '100%', fontWeight: 'normal' }}>
            <div><FormattedMessage id="description" /></div>
            <HtmlEditor
              className="descriptionHtmlEditor"
              value={product.description}
              onChange={update('description')}
              onBlur={save('description')}
              />
          </label>
        </Col>

        <ModalSlideshow
          show={this.state.showModalEditCarousel}
          onSelect={this.selectFromResources}
          onUpload={this.uploadPhoto}
          onDelete={resource => this.setState({ resourceToDelete: resource })}
          resources={homeImages}
          hide={() => this.setState({ showModalEditCarousel: false })}
          product={product}
          { ...this.props }
          />

        <ConfirmationPopup
          show={!!this.state.resourceToDelete} onHide={() => this.setState({ resourceToDelete: null })}
          onAction={this.deleteFromSlideshow} actionStyle="danger"
          action="Yes, Delete"
          title={ this.format({ id: 'confirm_delete_slideshow' }) }
          >
          <div>
            <img
              src={!this.state.resourceToDelete ? '/public/images/placeholders/product.png' : `/public/uploads/products/${product.id}/${this.state.resourceToDelete.name}`}
              style={{ maxWidth: '100%', maxHeight: '200px', display: 'block', margin: 'auto auto 20px auto' }}
              />
          </div>
        </ConfirmationPopup>
        <ModalSelectResource
          show={this.state.selectResource > 0} hide={() => this.setState({ selectResource: 0 })}
          onSelect={this.onSelectResource}
          resources={product.resources.filter(p => !p.home_order && p.type.startsWith('image'))}
          { ...this.props }
          />
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {};
}

const _components = {
  default: connect(stateToProps)(Summary),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
