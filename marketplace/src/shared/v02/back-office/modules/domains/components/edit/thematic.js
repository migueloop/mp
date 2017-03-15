import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import HeaderCmpt from './header';
import DetailsCmpt from './details';
import ProductsCmpt from 'v02/back-office/generic-components/products';
import { PRODUCT } from 'helpers/constants';
import Actions from 'flux/actions';
import { Well } from 'react-bootstrap';
import ModalFilterProductsCmpt from 'v02/back-office/modules/modals/modal-filter-products';

if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  corners: state.get('corners').toJS(),
  notification: state.get('notification'),
  products: state.get('products').toJS(),
  misc: state.get('misc').toJS(),
}));

class EditForm extends Components {
  constructor(props) {
    super(props);
    this.state = {
      corner: {
        keywords: [],
        products: [],
      },
      bestProducts: [],
      changes: [],
    };
    const corner = props.corners.find(corner => parseInt(corner.id, 10) === parseInt(props.params.id, 10));
    console.log('EditForm::corner', corner);
    if (!corner) {
      throw new Error(JSON.stringify({
        code: 404,
        message: 'Corner not found',
        stack: new Error().stack,
      }));
    }

    corner.products = corner.products
    .map(product => Object.assign({}, props.products.find(p => p.id === product.id), { highlight_product: product.highlight_product }))
    .filter(product => product.state === PRODUCT.STATE.PUBLISHED);
    console.log('corner', corner);
    const bestProducts = corner.products
    .reduce((prev, product) => {
      if (product['highlight_product'] > 0) {
        prev[product['highlight_product'] - 1] = product;
      }
      return prev;
    }, []);

    for (let i = 0; i < 3; i++) {
      if (!bestProducts[i]) {
        bestProducts[i] = {
          id: 'noproduct' + i,
          name: null,
          logoUrl: '/public/images/placeholders/product.png',
        };
      }
    }

    this.state = {
      corner,
      bestProducts,
      changes: [],
    };
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };


  componentWillMount() {
    const bestProducts = this.state.bestProducts;

    bestProducts.forEach(bestProduct => {
      if (!bestProduct.name) {
        bestProduct.name = this.format({ id: 'select_a_product' });
      }
    });
    this.setState({ bestProducts });
  }

  componentWillUnmount() {
    this.props.notification.remove('undoEdition');
  }

  componentDidMount() {
    window.getState = () => {
      return this.state;
    };
  }


  onDrop = dropEvent => {
    if (mimeAlloweds.indexOf(dropEvent[0].type) === -1) {
      this.props.notification.add({
        message: 'You can only upload images (jpg or png)',
        level: 'warning',
      });
      return;
    }

    const previousLogo = this.state.corner.logoUrl;

    this.setState({
      loading: true,
    });
    new Actions(this.props.tenant).Corners.UpdateLogo(this.state.corner, dropEvent[0])
      .then(action => {
        this.props.dispatch(action);
        this.setState({
          corner: Object.assign({}, this.state.corner, action.corner),
          loading: false,
        });

        this.props.notification.add({
          message: 'Corner Saved!',
          level: 'success',
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
        });

        this.props.notification.add({
          message: 'Error uploading the image',
          level: 'error',
        });
      });
  };


  onChange = type => event => {
    const corner = this.state.corner;
    corner[type] = event.target.value;
    this.setState({
      corner,
    });
  };


  update = type => event => {
    // no change detected
    const lastUpdate = this.state.changes[this.state.changes.length - 1];
    if (lastUpdate && lastUpdate[type] === event.target.value) {
      return;
    }

    if (false) {
      this.props.notification.add({
        uid: 'undoEdition',
        level: 'info',
        message: 'Undo?',
        dismissible: false,
        autoDismiss: 0,
        position: 'br',
        action: {
          label: 'Yes',
          callback: () => {
            const rollback = this.state.changes.concat([]).pop();
            const obj = {};
            obj[rollback.type] = rollback.value;
            this.setState({
              corner: Object.assign({}, this.state.corner, obj),
            });
          },
        },
      });
    }

    const obj = {};
    obj[type] = event.target.value;

    new Actions(this.props.tenant).Corners
      .Edit(this.state.corner.id, obj)
      .then(action => {
        this.props.dispatch(action);
        this.props.notification.add({
          message: 'Corner Updated',
          level: 'success',
        });
      })
      .catch(err => {
        const changes = this.state.changes.concat([]);
        const lastUpdate = changes.pop();
        const obj = {};
        obj[lastUpdate.type] = lastUpdate.value;

        this.setState({
          corner: Object.assign({}, this.state.corner, obj),
          changes,
        });
        this.props.notification.add({
          message: 'Corner Was not updated',
          level: 'error',
        });
      });

    this.setState({
      corner: Object.assign(this.state.corner, obj),
      changes: this.state.changes.concat({
        value: this.state.corner[type],
        type,
      }),
    });
  };

  selectBestProduct = index => product => {
    //

    this.setState({
      bestProductPosition: index,
      showModalSelectBestProduct: true,
    });
  };

  onSelectBestProduct = product => {
    const index = this.state.bestProductPosition;
    const bests = this.state.bestProducts.concat([]);
    const oldProduct = bests[index - 1];
    bests[index - 1] = product;
    new Actions(this.props.tenant).Corners
      .UpdateBestProduct(this.state.corner.id, product.id, index)
      .then(action => {
        this.props.dispatch(action);
        this.props.notification.add({
          message: 'Corner Updated',
          level: 'success',
        });
      })
      .catch(err => {
        bests[index - 1] = oldProduct;
        this.setState({
          bestProducts: bests,
        });
        this.props.notification.add({
          message: 'Error updating the best product, please try later',
          level: 'error',
        });
      });

    //
    this.setState({
      bestProductPosition: null,
      showModalSelectBestProduct: false,
      bestProducts: bests,
    });
  };

  render() {
    // let {title, ...otherProps} = this.props;

    let [Header, Details, Products, ModalFilterProducts] = [HeaderCmpt, DetailsCmpt, ProductsCmpt, ModalFilterProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));
    return (
      <div className="page-corners container" >
        <section className="voffset-top-2 mp-corner" >
          <Header logo={this.state.corner.logoUrl} title={this.state.corner.name} onDrop={this.onDrop}
            mimeAlloweds={mimeAlloweds} onChange={this.onChange}
            update={this.update} bestProducts={this.state.bestProducts} selectBest={this.selectBestProduct} />
          <Details description={this.state.corner.description} update={this.update} onChange={this.onChange}
            keywords={this.state.corner.keywords} keywordsAvailables={this.props.misc.keywords} />

          <Well>
            <Products products={this.state.corner.products} />
          </Well>

        </section>
        <ModalFilterProducts
          show={this.state.showModalSelectBestProduct}
          hide={() => this.setState({ showModalSelectBestProduct: false })}
          onSelect={this.onSelectBestProduct}
        />
      </div>
    );
  }
}

const _components = {
  default: connector(EditForm),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
