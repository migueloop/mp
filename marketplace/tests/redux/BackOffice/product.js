import {expect} from 'chai'
import {Map, List,fromJS} from 'immutable'

import { ACTION } from 'actions'
import {makeStore} from 'Core/store'

let product = {
  "publication_date": 1445607252583,
  "specification": 148,
  "logoUrl": "/public/uploads/products/12/149.jpg",
  "resources": [{
    "name_custom": "HP Pro Slate 8 ",
    "id_product": 12,
    "name": "149.jpg",
    "creation_date": null,
    "home_order": 1,
    "original_name": null,
    "type": "image/jpeg",
    "id": 149,
    "is_hidden": null
  }, {
    "name_custom": "HP Port Folio Pro Slate 8 ",
    "id_product": 12,
    "name": "150.jpg",
    "creation_date": null,
    "home_order": 2,
    "original_name": null,
    "type": "image/jpeg",
    "id": 150,
    "is_hidden": null
  }, {
    "name_custom": "HP Smart Cover Pro Slate 8 ",
    "id_product": 12,
    "name": "151.jpg",
    "creation_date": null,
    "home_order": 3,
    "original_name": null,
    "type": "image/jpeg",
    "id": 151,
    "is_hidden": null
  }, {
    "name_custom": "DSC00659.jpg",
    "id_product": 12,
    "name": "194.jpg",
    "creation_date": null,
    "home_order": 4,
    "original_name": "DSC00659.jpg",
    "type": "image/jpeg",
    "id": 194,
    "is_hidden": null
  },{
    "name_custom": "DSC00659.jpg",
    "id_product": 12,
    "name": "199.jpg",
    "creation_date": null,
    "home_order": null,
    "original_name": "DSC00659.jpg",
    "type": "image/jpeg",
    "id": 199,
    "is_hidden": null
  }],
  "baseline": "La tablette Android ultra-mobile conçue pour les entreprises",
  "submit_observation": "",
  "keywords": [{"id": 1, "name": "approvisionnement"}, {"id": 4, "name": "retail"}],
  "logo": 149,
  "name": "HP Pro Slate 8",
  "creation_date": 1442911119875,
  "editor": {
    "productSpecific": {
      "logo": null,
      "legalMentionsURL": "",
      "description": "<p>“La mobilité sera un changement de paradigme de même ampleur que celui du passage des mainframes au client/serveur et du client/serveur à Internet. Pour les entreprises, la mobilité ne se limite pas simplement à un appareil avec une application ou à l'adoption de scénarios BYOD ; c'est surtout la possibilité d'utiliser des appareils conçus à cet effet et des solutions spécifiques à leur secteur, qui ensemble ont la capacité de transformer le lieu de travail. ”</p><p>- Michael Park,</p><p>vice-président et directeur général, Mobilité et logiciels commerciaux, Business Personal Systems, HP</p>",
      "homepageURL": "http://www.hp.com/go/businessmobility"
    }, "title": "HP Corner", "alias": "HP-Corner-5"
  },
  "created_by": 5,
  "alias": "HP-Pro-Slate-8-12",
  "state": "published",
  "last_update": 1447792537470,
  "ratings": [],
  "version": "1.0.0",
  "links": [{
    "id": 50,
    "id_product": 12,
    "name": "REGULAR_LINK",
    "url": "http://store.hp.com/FranceStore/Merch/List.aspx?sel=TBL&ctrl=f&fc_scrn_l25=…1&jumpid=re_r10048_fr/fr/pps/ea-tablet/slate8-shopnow&jumpid=ba_nbmviytgq5",
    "image": "/public/images/customUrls/hp-store.png"
  }, {
    "id": 51,
    "id_product": 12,
    "name": "REGULAR_LINK",
    "url": "http://www8.hp.com/fr/fr/store-finder/index.do ?jumpid=ba_nbmviytgq5",
    "image": "/public/images/customUrls/map-marker.png"
  }],
  "type": "MaterialNDevice",
  "languages": [{"abbreviation": "fr"}],
  "id": 12,
  "description": "<p>Travaillez désormais aussi efficacement en déplacement qu'au bureau, grâce à la tablette professionnelle Android™ HP Pro Slate 8 équipée de dispositifs de sécurité de haut niveau, d'un processeur Qualcomm <strong>Snapdragon de la gamme 800</strong> et d'un stylet intégré HP Duet Pen pour saisir simultanément vos données sur papier et sur l'écran!</p>",
  "features": [{
    "id_product": 12,
    "order": 1,
    "name": "Protection des données renforcée.",
    "description": "<p>D'un niveau de contrôle et d'une sécurité à toute épreuve avec la tablette Android™ équipée d'un dispositif matériel et logiciel professionnel dédié et intégré.</p>"
  }, {
    "id_product": 12,
    "order": 2,
    "name": "Création instantanée de contenu",
    "description": "<p>Augmentez votre productivité en numérisant instantanément les notes transcrites sur papier. Egalement équipée d'une suite intégrée d'applications de haute fidélité et la large gamme d'applications disponibles sur Google Play™.</p>"
  }],
  "company": {"id": 3, "name": "HP"},
  "corners": [{"id": 2, "name": "Point de vente"}]
};

describe('Product Reducer', () => {

  it('Add product', () => {
    const store = makeStore();
    store.dispatch({
      type: ACTION.PRODUCT.ADD,
      product
    });
    expect(store.getState().get('products'))
      .to.equal(fromJS([product]))
  });

  describe('Resources', () => {

    it('add new resource and add as a new home image', () => {
      const store = makeStore();
      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });
      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.ADD,
        product: {
          id: 12,
          resource: {
            id_product: 12,
            home_order: 5,
            original_name: 'logo-5.png',
            name_custom: 'logo-5.png',
            type: 'image/png',
            id: 197,
            name: '197.png'
          }
        }
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
        .to.equal(fromJS(product.resources.concat([{
          id_product: 12,
          home_order: 5,
          original_name: 'logo-5.png',
          name_custom: 'logo-5.png',
          type: 'image/png',
          id: 197,
          name: '197.png'
        }])))
    });

    it('upload a new resource and replace image on slideshow', () => {
      const store = makeStore();
      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });
      let action = {
        id: 12,
        resource: {
          id_product: 12,
          home_order: 5,
          original_name: 'logo-12.png',
          name_custom: 'logo-12.png',
          type: 'image/png',
          id: 198,
          name: '198.png'
        }
      };
      let expectedValue = fromJS(product.resources.map(r => {
        if (r.home_order == 10) {
          r.home_order = null
        }
        return r
      }).concat([action.resource]));

      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.ADD,
        product: action
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
        .to.equal(expectedValue)
    });

    it('Edit Resource', () => {
      const store = makeStore();



      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });

      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.EDIT,
        product : {
          id: 12,
          resource : {
            id: 194,
            home_order: null,
            name_custom: 'TEST'
          }

        }
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
        .to.equal(fromJS([{
          "name_custom": "HP Pro Slate 8 ",
          "id_product": 12,
          "name": "149.jpg",
          "creation_date": null,
          "home_order": 1,
          "original_name": null,
          "type": "image/jpeg",
          "id": 149,
          "is_hidden": null
        }, {
          "name_custom": "HP Port Folio Pro Slate 8 ",
          "id_product": 12,
          "name": "150.jpg",
          "creation_date": null,
          "home_order": 2,
          "original_name": null,
          "type": "image/jpeg",
          "id": 150,
          "is_hidden": null
        }, {
          "name_custom": "HP Smart Cover Pro Slate 8 ",
          "id_product": 12,
          "name": "151.jpg",
          "creation_date": null,
          "home_order": 3,
          "original_name": null,
          "type": "image/jpeg",
          "id": 151,
          "is_hidden": null
        }, {
          "name_custom": "TEST",
          "id_product": 12,
          "name": "194.jpg",
          "creation_date": null,
          "home_order": null,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 194,
          "is_hidden": null
        },{
          "name_custom": "DSC00659.jpg",
          "id_product": 12,
          "name": "199.jpg",
          "creation_date": null,
          "home_order": null,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 199,
          "is_hidden": null
        }]))
    });

    it('Delete from slideshow', () => {
      const store = makeStore();
      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });


      let expectedValue = fromJS([{
        "name_custom": "HP Pro Slate 8 ",
        "id_product": 12,
        "name": "149.jpg",
        "creation_date": null,
        "home_order": 1,
        "original_name": null,
        "type": "image/jpeg",
        "id": 149,
        "is_hidden": null
      }, {
        "name_custom": "HP Port Folio Pro Slate 8 ",
        "id_product": 12,
        "name": "150.jpg",
        "creation_date": null,
        "home_order": 2,
        "original_name": null,
        "type": "image/jpeg",
        "id": 150,
        "is_hidden": null
      }, {
        "name_custom": "HP Smart Cover Pro Slate 8 ",
        "id_product": 12,
        "name": "151.jpg",
        "creation_date": null,
        "home_order": null,
        "original_name": null,
        "type": "image/jpeg",
        "id": 151,
        "is_hidden": null
      }, {
        "name_custom": "DSC00659.jpg",
        "id_product": 12,
        "name": "194.jpg",
        "creation_date": null,
        "home_order": 3,
        "original_name": "DSC00659.jpg",
        "type": "image/jpeg",
        "id": 194,
        "is_hidden": null
      },{
        "name_custom": "DSC00659.jpg",
        "id_product": 12,
        "name": "199.jpg",
        "creation_date": null,
        "home_order": null,
        "original_name": "DSC00659.jpg",
        "type": "image/jpeg",
        "id": 199,
        "is_hidden": null
      }]);

      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.DELETE,
        product: {
          id: 12,
          resource: {
            home_order: 3
          }
        }
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
        .to.equal(expectedValue)
    });

    it('Add image to a already existing position on the slideshow from resources', () => {
      const store = makeStore();
      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });

      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD_FROM_RESOURCE,
        product : {
          id : 12,
          resource : {
            id : 199,
            home_order : 2
          }
        }
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
      .to.equal(fromJS([{
          "name_custom": "HP Pro Slate 8 ",
          "id_product": 12,
          "name": "149.jpg",
          "creation_date": null,
          "home_order": 1,
          "original_name": null,
          "type": "image/jpeg",
          "id": 149,
          "is_hidden": null
        }, {
          "name_custom": "HP Port Folio Pro Slate 8 ",
          "id_product": 12,
          "name": "150.jpg",
          "creation_date": null,
          "home_order": null,
          "original_name": null,
          "type": "image/jpeg",
          "id": 150,
          "is_hidden": null
        }, {
          "name_custom": "HP Smart Cover Pro Slate 8 ",
          "id_product": 12,
          "name": "151.jpg",
          "creation_date": null,
          "home_order": 3,
          "original_name": null,
          "type": "image/jpeg",
          "id": 151,
          "is_hidden": null
        }, {
          "name_custom": "DSC00659.jpg",
          "id_product": 12,
          "name": "194.jpg",
          "creation_date": null,
          "home_order": 4,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 194,
          "is_hidden": null
        },{
          "name_custom": "DSC00659.jpg",
          "id_product": 12,
          "name": "199.jpg",
          "creation_date": null,
          "home_order": 2,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 199,
          "is_hidden": null
        }]))

    });

    it('Add image to a already existing position on the slideshow from resources', () => {
      const store = makeStore();
      store.dispatch({
        type: ACTION.PRODUCT.ADD,
        product
      });

      store.dispatch({
        type: ACTION.PRODUCT.RESOURCE.SLIDESHOW.ADD_FROM_RESOURCE,
        product : {
          id : 12,
          resource : {
            id : 199,
            home_order : 5
          }
        }
      });

      expect(store.getState().get('products').filter(p => p.get('id') == 12).first().get('resources'))
        .to.equal(fromJS([{
          "name_custom": "HP Pro Slate 8 ",
          "id_product": 12,
          "name": "149.jpg",
          "creation_date": null,
          "home_order": 1,
          "original_name": null,
          "type": "image/jpeg",
          "id": 149,
          "is_hidden": null
        }, {
          "name_custom": "HP Port Folio Pro Slate 8 ",
          "id_product": 12,
          "name": "150.jpg",
          "creation_date": null,
          "home_order": 2,
          "original_name": null,
          "type": "image/jpeg",
          "id": 150,
          "is_hidden": null
        }, {
          "name_custom": "HP Smart Cover Pro Slate 8 ",
          "id_product": 12,
          "name": "151.jpg",
          "creation_date": null,
          "home_order": 3,
          "original_name": null,
          "type": "image/jpeg",
          "id": 151,
          "is_hidden": null
        }, {
          "name_custom": "DSC00659.jpg",
          "id_product": 12,
          "name": "194.jpg",
          "creation_date": null,
          "home_order": 4,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 194,
          "is_hidden": null
        },{
          "name_custom": "DSC00659.jpg",
          "id_product": 12,
          "name": "199.jpg",
          "creation_date": null,
          "home_order": 5,
          "original_name": "DSC00659.jpg",
          "type": "image/jpeg",
          "id": 199,
          "is_hidden": null
        }]))

    })

  })


});