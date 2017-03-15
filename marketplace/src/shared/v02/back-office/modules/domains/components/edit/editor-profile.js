import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import { connect } from 'react-redux';
import HeaderCmpt from './header';
import ProductsCmpt from 'v02/back-office/generic-components/products';
import { PRODUCT } from 'helpers/constants';
import Actions from 'flux/actions';
import { Well } from 'react-bootstrap';
import SelectProductCmpt from './select-product';
import ModalFilterProductsCmpt from 'v02/back-office/modules/modals/modal-filter-products';

const mimeAlloweds = ['image/png', 'image/jpg', 'image/jpeg'];

if (process.browser) {
  require('react-selectize/dist/index.min.css');
}

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  notification: state.get('notification'),
  products: state.get('products').toJS(),
  misc: state.get('misc').toJS(),
  users: state.get('backoffice').get('users').toJS(),
  user: state.get('v02').get('common').get('user').toJS(),
}));

class EditForm extends Components {

  constructor(props) {
    super(props);
    this.__dirname = __dirname;
    let user = null;

    if (this.props.params.id) {
      user = this.props.users.find(user => user.id == this.props.params.id);
    } else {
      user = this.props.users.find(user => user.id == this.props.user.id);
    }


    if (!user || user.id_role !== 2) {
      throw new Error(JSON.stringify({
        code: 404,
        message: 'Unauthorized',
      }));
    }

    const editor = user.editorProfile;

    editor.products = editor.products
      .map(product => Object.assign({}, this.props.products.find(p => p.id === product.id), { 'highlight_product': product['highlight_product'] }))
      .filter(product => product.state !== PRODUCT.STATE.DELETED);

    this.actions = new Actions(this.tenant);
    this.edited = false;
    this.originalEditor = Object.assign({}, editor);
    this.lastUpdate = Object.assign({}, editor);

    const bestProducts = editor.products
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
          name: 'Sélectionnez un produit',
          logoUrl: '/public/images/placeholders/product.png',
        };
      }
    }

    this.state = {
      editor,
      loading: false,
      bestProducts,
    };
  }

  componentWillMount() {
    const bestProducts = this.state.bestProducts;
    bestProducts.forEach(bestProduct => { bestProduct.name = this.format({ id: 'select_a_product' });});
    this.setState({ bestProducts });
  }

  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };


  onDrop = dropEvent => {
    if (mimeAlloweds.indexOf(dropEvent[0].type) === -1) {
      this.props.notification.add({
        message: 'You can only upload images (jpg or png)',
        level: 'warning',
      });


      return;
    }

    const previousLogo = this.state.editor.logoUrl;

    this.setState({
      loading: true,
    });
    this.actions.BackOffice.Users.Editor.UpdateLogo(this.state.editor, dropEvent[0])
      .then(action => {
        this.props.dispatch(action);
        this.setState({
          editor: Object.assign({}, this.state.editor, action.editorProfile),
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
    const editor = Object.assign({}, this.state.editor);
    // FIXME: make the Header of the corners/edit to receive this parameter instead of overrating the name
    if (type === 'name') {
      type = 'title';
    }
    editor[type] = event.target.value;
    this.setState({
      editor,
    });
  };

  componentWillUnmount() {
    this.props.notification.remove('undoEdition');
  }

  update = type => event => {
    // no change detected
    if (type === 'name') {
      type = 'title';
    }
    if (this.lastUpdate[type] == event.target.value) {
      return;
    }

    if (!this.edited) {
      this.oldValues = {};

      this.edited = true;
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
            this.edited = false;
            this.setState({
              editor: this.originalEditor,
            });
          },
        },
      });
    }


    this.oldValues[type] = this.originalEditor[type];

    const obj = {};
    obj[type] = event.target.value;

    this.actions
      .BackOffice
      .Users
      .Editor
      .Edit(this.state.editor.id_user, obj)
      .then(action => {
        this.props.dispatch(action);
        Object.assign(this.lastUpdate, obj);
        this.props.notification.add({
          message: 'Editor Updated',
          level: 'success',
        });
      })
      .catch(err => {
        this.setState({
          editor: Object.assign(this.state.editor, this.lastUpdate),
        });
        this.props.notification.add({
          message: 'Corner Was not updated',
          level: 'error',
        });
      });

    this.setState({
      editor: Object.assign(this.state.editor, obj),
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
    this.actions.BackOffice
      .Users
      .Editor
      .UpdateBestProduct(this.state.editor.id_user, product.id, index)
      .then(action => {
        this.props.dispatch(action);
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


    let [Header, Products, SelectProduct, ModalFilterProducts] =
      [HeaderCmpt, ProductsCmpt, SelectProductCmpt, ModalFilterProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));

    return (
      <div className="page-corners container">
        <section className="mp-corner">
          <Header logo={this.state.editor.logoUrl} title={this.state.editor.title} onDrop={this.onDrop}
            mimeAlloweds={mimeAlloweds} onChange={this.onChange} selectBest={this.selectBestProduct}
            update={this.update} bestProducts={this.state.bestProducts} />
          <Well>
            <Products products={this.state.editor.products} />
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
