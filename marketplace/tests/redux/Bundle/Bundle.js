import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { fromJS, List } from 'immutable';
import { ACTION } from 'actions';
import Actions from 'actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ITEM } from 'helpers/constants';
import Utils from '../../helpers/utils.js';


// ACTIONS UNIT TESTING
// TEST CASES: Set Bundle
describe(' Dispatch actions ', () => {

  const middlewares = [thunk]; // add your middlewares like `redux-thunk`
  const mockStore = configureStore(middlewares);
  const expect = chai.expect;
  const sTenant = 'hp';
  const oUtils = new Utils();
  const oFakeValidBundle = {
    name: oUtils.generateString(3,'name-test','dd'),
    created_by_id: 26,
    creation_date: Date.now(),
    state_id: 2,
    alias: oUtils.generateString(3,'name-test','dd'),
    baseline: null,
    description: null,
    last_update: null,
    publication_date: null,
    logo_id: null,
  };
  chai.use(chaiAsPromised);
  chai.should();
  let store = null;
  let oFakeNewResource = {};

  beforeEach(() => {
    // create mock store, to don't dispatch the action to the real reducers
    store =  mockStore({});
  });


  it(' Create one ', (done) => {

    new Actions(sTenant).Bundles.Create(oFakeValidBundle).should.be.fulfilled
      .then( (action) => {
        oFakeValidBundle.id = action.bundle.id;
        expect(action.type).deep.equal(ACTION.BUNDLE.ADD);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Delete one  ', (done) => {

    new Actions(sTenant).Bundles.Delete(oFakeValidBundle.id).should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.DELETE);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Update state to published and name ', (done) => {

    new Actions(sTenant).Bundles.Update({
      values: {
        name: oUtils.generateString(3, 'changed', 'test'),
        state_id: ITEM.STATE.PUBLISHED
      },
      filters: {
        id: oFakeValidBundle.id
      }
    }).should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.UPDATE);
        return store.dispatch(action);
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get all ', (done) => {

    new Actions(sTenant).Bundles.All.should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.SET.ALL);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get deleted ', (done) => {

    new Actions(sTenant).Bundles.GetDeleted().should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.SET.DELETED);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get draft ', (done) => {

    new Actions(sTenant).Bundles.GetDraft().should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.SET.DRAFT);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get pending ', (done) => {

    new Actions(sTenant).Bundles.GetPending().should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.SET.PENDING);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get published ', (done) => {

    new Actions(sTenant).Bundles.GetPublished().should.be.fulfilled
      .then( (action) => {
        expect(action.type).deep.equal(ACTION.BUNDLE.SET.PUBLISHED);
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Get one ', (done) => {

    new Actions(sTenant).Bundles.GetOne(oFakeValidBundle.id).should.be.fulfilled
      .then( (action) => {
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Should publish one ', (done) => {

    new Actions(sTenant).Bundles.Publish(oFakeValidBundle.id).should.be.fulfilled
      .then( (action) => {
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Should unpublish one, so set state to DRAFT ', (done) => {

    new Actions(sTenant).Bundles.Unpublish(oFakeValidBundle.id).should.be.fulfilled
      .then( (action) => {
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Should demand publication ', (done) => {

    new Actions(sTenant).Bundles.DemandPublication(oFakeValidBundle.id).should.be.fulfilled
      .then( (action) => {
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Should add a resource ', (done) => {

    // create the file that will be our resource to add
    oUtils.copyFile('tests\\helpers\\resources\\original\\img1.png', 'tests\\helpers\\resources\\img.png');
    oFakeNewResource = {
      id_item: oFakeValidBundle.id,
      file:{
        fieldname: 'resource',
        originalname: 'img.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: 'public/uploads/',
        filename: 'img',
        path: 'tests\\helpers\\resources\\img.png',
        size: 5855
      },
      options: 'main_picture',
    };

    new Actions(sTenant).Bundles.AddResource(oFakeNewResource).should.be.fulfilled
      .then( (action) => {
        //add the id of the new resource
        oFakeNewResource.id = action.bundle.resource.id;
        return store.dispatch(action);
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it(' Should delete a resource ', (done) => {

    const oResourceData = {
      id_item: oFakeValidBundle.id,
      id_resource: oFakeNewResource.id,
    };

    new Actions(sTenant).Bundles.DeleteResource(oResourceData).should.be.fulfilled
      .then( (action) => {
        return store.dispatch(action)
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it.skip(' Should do a new resources order ', (done) => {



  });


  it(' Should upload logo ', (done) => {

    oUtils.copyFile('tests\\helpers\\resources\\original\\img1.png', 'tests\\helpers\\resources\\img.png');
    new Actions(sTenant).Bundles.AddResource(oFakeNewResource).should.be.fulfilled
      .then( (action) => {
        //add the id of the new resource
        oFakeNewResource.id = action.bundle.resource.id;
        return store.dispatch(action);
      })
      .then( (res) => {
        expect(res).deep.equal(store.getActions()[0]);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });

  });


  it.skip(' Should change logo by an existing resource ', (done) => {

  });


  it.skip(' Should add new item ', (done) => {

  });


  it.skip(' Should delete an item ', (done) => {

  });


  it.skip(' Should order items ', (done) => {

  });

});

