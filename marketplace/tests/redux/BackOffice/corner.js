import {expect} from 'chai';
import {Map, List,fromJS} from 'immutable';
import { ACTION } from 'actions';
import {makeStore} from 'Core/store';

const store = makeStore();

describe('Corners', () => {
  let aFakeCorners = [
    {
      "id": 7,
      "name": "My new corner",
      "alias": "My-new-corner-7",
      "description": "",
      "created_by": 19,
      "creation_date": 1453211679281,
      "last_update": 1453211679286,
      "logo": "",
      "keywords": [],
      "products": [],
      "logoUrl": "/public/images/placeholders/product.png"
    },
    {
      "id": 8,
      "name": "My new corner 8",
      "alias": "My-new-corner-8",
      "description": "Short description 8",
      "created_by": 18,
      "creation_date": 1453211679261,
      "last_update": 1453211679266,
      "logo": "",
      "keywords": [],
      "products": [],
      "logoUrl": "/public/images/placeholders/product.png"
    }
  ];

  it('Set All', () => {
    store.dispatch({
      "type": ACTION.CORNER.SET_ALL,
      corners: aFakeCorners
    });
    // console.log(store.getState().get('corners'));
    expect(store.getState().get('corners')).to.equal(fromJS(aFakeCorners));
  });

  it('Create', () => {
    let newCorner = {
      "id": 6,
      "name": "My new corner",
      "alias": "My-new-corner-7",
      "description": "",
      "created_by": 19,
      "creation_date": 1453211679281,
      "last_update": 1453211679286,
      "logo": "",
      "keywords": [],
      "products": [],
      "logoUrl": "/public/images/placeholders/product.png"
    };

    store.dispatch({
        "type": ACTION.CORNER.CREATE,
        corner: newCorner
      }
    );

    expect(store.getState().get('corners')).to.equal(fromJS(aFakeCorners.concat(newCorner)))

  });

  it('Delete', () => {
    store.dispatch({
        "type": ACTION.CORNER.DELETE,
        cornerId: aFakeCorners[0].id
      }
    );

    expect(store.getState().get('corners')).to.equal(fromJS([
      {
        "id": 8,
        "name": "My new corner 8",
        "alias": "My-new-corner-8",
        "description": "Short description 8",
        "created_by": 18,
        "creation_date": 1453211679261,
        "last_update": 1453211679266,
        "logo": "",
        "keywords": [],
        "products": [],
        "logoUrl": "/public/images/placeholders/product.png"
      },
      {
        "id": 6,
        "name": "My new corner",
        "alias": "My-new-corner-7",
        "description": "",
        "created_by": 19,
        "creation_date": 1453211679281,
        "last_update": 1453211679286,
        "logo": "",
        "keywords": [],
        "products": [],
        "logoUrl": "/public/images/placeholders/product.png"
      }
    ]))
  });


});
