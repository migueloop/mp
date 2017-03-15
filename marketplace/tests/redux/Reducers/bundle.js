import chai from 'chai';
import { fromJS, List } from 'immutable';
import { ACTION } from 'actions';
import Actions from 'actions';
import { ITEM } from 'helpers/constants';
import Utils from '../../helpers/utils.js';
import BundlesReducer from 'Reducers/bundles/bundles';

// REDUCERS UNIT TESTING
describe(' Reducers ', () => {

  const expect = chai.expect;
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
  let nStateOldSize = 0;
  let oFakeBundle = {};
  let oFakeBundleDraft = {};
  let oFakeBundlePublished = {};
  let oFakeBundlePending = {};
  let oFakeBundleDeleted = {};
  let oldState = List();
  let state = List();
  let lNewState = null;

  before( ' Populate state ', () => {

    Object.assign(oFakeBundleDraft, oFakeValidBundle, {id: oUtils.generateNumber(2), state_id: ITEM.STATE.DRAFT});
    Object.assign(oFakeBundleDeleted, oFakeValidBundle, {id: oUtils.generateNumber(2), state_id: ITEM.STATE.DELETED});
    Object.assign(oFakeBundlePending, oFakeValidBundle, {id: oUtils.generateNumber(2), state_id: ITEM.STATE.PENDING});
    Object.assign(oFakeBundlePublished, oFakeValidBundle, {id: oUtils.generateNumber(2), state_id: ITEM.STATE.PUBLISHED});
    oFakeValidBundle.id = oUtils.generateNumber(3);

    state = List().push(fromJS(oFakeBundleDraft), fromJS(oFakeBundleDeleted), fromJS(oFakeBundlePending), fromJS(oFakeBundlePublished));

  });


  beforeEach( ' Set size of the state ', () => {
    nStateOldSize = state.size;
  });


  it(' Should return the initial state ', () => {

    expect(BundlesReducer(state, {})).deep.equal(state);

  });


  it(' Should handle ADD ', () => {

    oFakeBundle = {
      type: ACTION.BUNDLE.ADD,
      bundle: oFakeValidBundle
    };

    oldState = state;
    expect(BundlesReducer(state, oFakeBundle)).deep.equal(state.push(fromJS(oFakeBundle.bundle)));
    state = state.push(fromJS(oFakeBundle.bundle));
    expect( nStateOldSize + 1 ).deep.equal(state.size);

  });


  it(' Should handle DELETE ', () => {
    oFakeBundle.type = ACTION.BUNDLE.DELETE;

    lNewState = state.update(
      state.findIndex( (bundle) => {
        return bundle.get('id') === oFakeBundle.id;
      }), (bundle) => {
        return bundle.set('state_id', ITEM.STATE.DELETED);
      });

    expect(BundlesReducer(state, oFakeBundle)).deep.equal(lNewState);
    expect(lNewState.size).deep.equal(state.size);

  });


  it(' Should handle UPDATE ', () => {
    // set the fields to update
    oFakeBundle.bundle.baseline = oUtils.generateString(10,'baselineTest-','-update');
    oFakeBundle.bundle.description = oUtils.generateString(50,'descriptionTest-','-update');
    // set the action to call
    oFakeBundle.type = ACTION.BUNDLE.UPDATE;

    // modify our fake state
    lNewState = state.update(
      state.findIndex( (bundle) => {
        return bundle.get('id') === oFakeBundle.id;
      }), (bundle) => {
        let oTmpBundle = bundle.set('baseline', oFakeBundle.bundle.baseline);
        return  oTmpBundle.set('description',  oFakeBundle.bundle.description);
      });

    expect(BundlesReducer(state, oFakeBundle)).deep.equal(lNewState);
    expect(lNewState.size).deep.equal(state.size);

  });


  it(' Should handle SET.ALL ', () => {

    const oFakeAllBundles = {
      type: ACTION.BUNDLE.SET.ALL,
      bundles: state.toJS()
    };

    expect(BundlesReducer(state, oFakeAllBundles)).deep.equal(state);

  });


  it(' Should handle SET.DELETED ', () => {

    oFakeBundle.bundle.state_id = ITEM.STATE.DELETED;
    const oFakeDeletedBundles = {
      type: ACTION.BUNDLE.SET.DELETED,
      bundles: oFakeBundle.bundle
    };

    expect(BundlesReducer(List().push(fromJS(oFakeDeletedBundles)), oFakeDeletedBundles)).deep.equal(fromJS(oFakeDeletedBundles.bundles));

  });


  it(' Should handle SET.DRAFT ', () => {

    oFakeBundle.bundle.state_id = ITEM.STATE.DRAFT;
    const oFakeDraftBundles = {
      type: ACTION.BUNDLE.SET.DRAFT,
      bundles: oFakeBundle.bundle
    };

    expect(BundlesReducer(List().push(fromJS(oFakeDraftBundles)), oFakeDraftBundles)).deep.equal(fromJS(oFakeDraftBundles.bundles));

  });


  it(' Should handle SET.LOGO ', () => {

    oFakeBundle.bundle.logo_id = 1;
    const oFakeBundleWithNewLogo = {
      type: ACTION.BUNDLE.SET.LOGO,
      bundle: oFakeBundle.bundle
    };

    expect(BundlesReducer(List().push(fromJS(oFakeBundleWithNewLogo)))).deep.equal(List().push(fromJS(oFakeBundleWithNewLogo)));

  });


  it(' Should handle SET.PENDING ', () => {

    oFakeBundle.bundle.state_id = ITEM.STATE.PENDING;
    const oFakePendingBundles = {
      type: ACTION.BUNDLE.SET.PENDING,
      bundles: oFakeBundle.bundle
    };

    expect(BundlesReducer(List().push(fromJS(oFakePendingBundles)), oFakePendingBundles)).deep.equal(fromJS(oFakePendingBundles.bundles));

  });


  it(' Should handle SET.PUBLISHED ', () => {

    oFakeBundle.bundle.state_id = ITEM.STATE.PUBLISHED;
    const oFakePublishedBundles = {
      type: ACTION.BUNDLE.SET.PUBLISHED,
      bundles: oFakeBundle.bundle
    };

    lNewState = BundlesReducer(List().push(fromJS(oFakePublishedBundles)), oFakePublishedBundles);
    expect(lNewState).deep.equal(fromJS(oFakePublishedBundles.bundles));

  });


  it(' Should handle RESOURCE.ADD ', () => {

    const oNewResource = {id:3, name:'3.png'};
    let oBundle = Object.assign({}, oFakeBundle);

    oBundle.bundle.resources = [];

    // populate with fake id's the resources array of the bundle
    oBundle.bundle.resources.push.apply(oBundle.bundle.resources,[{id:1, name:'1.mpg'},{id: 2, name: '2.jpg'}]);
    // set id of new resource
    oBundle.bundle.resource = oNewResource;

    const oFakeBundleWithNewResource = {
      type: ACTION.BUNDLE.RESOURCE.ADD,
      bundle: oBundle.bundle,
    };

    lNewState = BundlesReducer(List().push(fromJS(oFakeBundleWithNewResource.bundle)), oFakeBundleWithNewResource);
    oBundle.bundle.resources.push(oNewResource);

    expect(lNewState).deep.equal(List().push(fromJS(oBundle.bundle)));

  });


  it(' Should handle RESOURCE.DELETE ', () => {

    const oFakeBundleWithResourceToDelete = {
      type: ACTION.BUNDLE.RESOURCE.DELETE,
      bundle: oFakeBundle.bundle,
    };

    lNewState = BundlesReducer(List().push(fromJS(oFakeBundleWithResourceToDelete.bundle)), oFakeBundleWithResourceToDelete);

    // delete resource added before from our fake bundle
    oFakeBundle.bundle.resources.pop();
    expect(lNewState).deep.equal(List().push(fromJS(oFakeBundle.bundle)));

  });


  it.skip(' Should handle RESOURCE.ORDER ', () => {

  });


  it.skip(' Should handle ITEMS.ADD ', () => {

  });


  it.skip(' Should handle ITEMS.DELETE ', () => {

  });


  it.skip(' Should handle ITEMS.ORDER ', () => {

  });

});