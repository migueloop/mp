import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Map, List,fromJS } from 'immutable';
import { ACTION } from 'actions';
import { makeStore } from 'Core/store';
import Action from 'actions';
import Repository from 'repositories/settings';

chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;
const store = makeStore();

let dispatchToReducer = (type, action) => {
  store.dispatch({
    type: type,
    seo: action
  });
};

//REDUCER UNIT TESTING
//TEST CASES: Get SEO
describe('settings Reducers', () => {

  let aFakeSEO = {
    'title': 'Batman',
    'description': 'Description Gotham City.',
    'tagline': 'Gotham'
  };

  it('Get SEO', () => {
    store.dispatch({
      type: ACTION.SETTINGS.SET_SEO,
      seo: aFakeSEO
    });

    expect(store.getState().get('settings').get('seo')).to.equal(fromJS(aFakeSEO));

  });
});

//ACTIONS UNIT TESTING
//TEST CASES: Set/Retrieve SEO title, Set/Retrieve SEO description, Set/Retrieve SEO tagline
describe('settings Actions', () => {

  let oFakeSetting = {
    "seo": {
      "description": "Test Lorem Ipsum description",
      "tagline": "Test-tag-line",
      "title": "Test Title"
    },
    "type": "SET SEO DATA"
  };
  let sTenant = 'HP';
  let aTestsCases = ['description', 'title', 'tagline'];

  aTestsCases.map( (testCase) => {

    it(`Set and retrieve SEO ${testCase} with ${sTenant} tenant`, (done)=> {

      let expected;
      let repo = new Repository(sTenant);
      let getSEOPromise = repo.getSEO();

      getSEOPromise.should.be.fulfilled.then(oldValues => {
        let oTest = {};
        oTest[testCase] = oFakeSetting.seo[testCase];
        let setSEOPromise = new Action(sTenant).BackOffice.Settings.setSEO(testCase);

        expected = fromJS(oldValues).set(testCase, oFakeSetting.seo[testCase]);
        return setSEOPromise.should.be.fulfilled;
      })
        .then(action => {
          let getSeoPromise = repo.getSEO();

          store.dispatch(action);
          return getSeoPromise.should.be.fulfilled;
        })
        .then(newValues => {
          newValues = fromJS(expected);
          expect(newValues).to.equal(expected);
          expect(store.getState().get('settings').get('seo')).to.equal(expected);
        }).should.notify(done);

    });

  });

});