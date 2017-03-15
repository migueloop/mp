import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import supertest from 'supertest';
import Utils from './../../helpers/utils.js';
import { ITEM } from 'helpers/constants';

// Mind that you need to have in tenant.json "localhost" and "127.0.0.1" hosts

// vars
chai.use(chaiAsPromised);
chai.should();
let oUtils = new Utils();
let oFakeBundle = {
  'alias': null,
  'baseline': null,
  'description': null,
  'last_update': null,
  'publication_date': null,
  'logo_id': null,
};
let oFakeBundleRequired = {
  name: oUtils.generateString(3,'name-test','dd'),
  created_by_id: 26,
  creation_date: Date.now(),
  state_id: 2,
};
// create the file that will be our resource to add
let oFakeNewResource = {
  id_item: null,
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
let oFakeResponseBody = {bundle: 'test bundle'};
let oFakeValidBundle = {};
const sApiBaseUrl = '/api/v01/bundles';

//bundle Server API UNIT TESTING
describe(' Server Routes ', () => {

  let expect = chai.expect;
  let server = require('../../../server').default.init;
  let request = supertest.agent(server());


  let fEndRequest = (err, res, done) => {
    if (err) {
      console.log('---> ERROR: ', err);
      return done(err);
    }
    done();
  };


  it.skip(' should respond with a test message and status 200 ', (done) => {
    request
      .get('/api/v01/bundles/test')
      .expect(200, oFakeResponseBody)
      .end((err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Get all ', (done) => {
    request
      .get('/api/v01/bundles')
      .set('Accept', 'application/json')
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        //In body we expect to have an array of bundles
        expect(typeof(res.body)).deep.equal(typeof([]));
      })
      .end((err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it(' Create one ', (done) => {
    Object.assign(oFakeValidBundle,oFakeBundle, oFakeBundleRequired);

    request
      .post('/api/v01/bundles')
      .send(oFakeValidBundle)
      .expect( (res) => {
        oFakeValidBundle.id = res.body.id;
        oFakeValidBundle.alias = res.body.alias;
        expect(res.status).deep.equal(200);
        // Expect the same object with the new id
        expect(res.body).deep.equal(oFakeValidBundle);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Retrieve info from created ', (done) => {
    request
      .get('/api/v01/bundles' + '/' + oFakeValidBundle.id)
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        expect(res.body).deep.equal(oFakeValidBundle);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Set it to delete ', (done) => {
    request
      .delete('/api/v01/bundles' + '/' + oFakeValidBundle.id)
      .expect( (res) => {
        oFakeValidBundle.state = ITEM.STATE.DELETED;
        expect(res.status).deep.equal(200);
        expect(res.body.state).deep.equal(ITEM.STATE.DELETED);
        expect(parseInt(res.body.id)).deep.equal(oFakeValidBundle.id);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Return error deleting not existing bundle ', (done) => {
    request
      .delete('/api/v01/bundles' + '/' + oUtils.generateNumber(6))
      .expect(500)
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Set it to draft ', (done) => {
    request
      .put('/api/v01/bundles' + '/' + oFakeValidBundle.id + '/unpublish')
      .expect( (res) => {
        oFakeValidBundle.state = ITEM.STATE.DRAFT;
        expect(res.status).deep.equal(200);
        expect(parseInt(res.body.id)).deep.equal(oFakeValidBundle.id);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it(' Publish it ', (done) => {
    request
      .put('/api/v01/bundles' + '/' + oFakeValidBundle.id + '/publish')
      .expect( (res) => {
        oFakeValidBundle.state = ITEM.STATE.PUBLISHED;
        expect(res.status).deep.equal(200);
        expect(parseInt(res.body.id)).deep.equal(oFakeValidBundle.id);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Demand publication (set state to pending) ', (done) => {
    request
      .put('/api/v01/bundles' + '/' + oFakeValidBundle.id + '/demandpublication')
      .expect( (res) => {
        oFakeValidBundle.state = ITEM.STATE.PENDING;
        expect(res.status).deep.equal(200);
        expect(parseInt(res.body.id)).deep.equal(oFakeValidBundle.id);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Get all published ', (done) => {
    request
      .get('/api/v01/bundles/published')
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        // iterate over all the results to check that all are published
        res.body.map( (oBundle) => {
          expect(oBundle.state_id).deep.equal(ITEM.STATE.PUBLISHED);
        });
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Get all draft ', (done) => {
    request
      .get('/api/v01/bundles/draft')
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        // iterate over all the results to check that all are published
        res.body.map( (oBundle) => {
          expect(oBundle.state_id).deep.equal(ITEM.STATE.DRAFT);
        });
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Get all deleted ', (done) => {
    request
      .get('/api/v01/bundles/deleted')
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        // iterate over all the results to check that all are published
        res.body.map( (oBundle) => {
          expect(oBundle.state_id).deep.equal(ITEM.STATE.DELETED);
        });
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Get all pending ', (done) => {
    request
      .get('/api/v01/bundles/pending')
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        // iterate over all the results to check that all are published
        res.body.map( (oBundle) => {
          expect(oBundle.state_id).deep.equal(ITEM.STATE.PENDING);
        });
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Should add new resource ', (done) => {

    //http://stackoverflow.com/questions/36177559/testing-express-multer-file-array-upload-with-supertest
    // set the id of the bundle to add the resource
    oFakeNewResource.id_item = oFakeValidBundle.id;
    // copy the file that we will upload
    //oUtils.copyFile('tests\\helpers\\resources\\original\\img1.png', 'tests\\helpers\\resources\\img.png');

    request
      .post(`api/v01/bundles/${oFakeValidBundle.id}/resource`)
      //.attach('resource', 'tests\\helpers\\resources\\img.png')
      //.send(oFakeNewResource)
      .expect( (res) => {
        console.log('oFakeNewResource: ', oFakeNewResource);
        console.log('TEST: ', res);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });
  });


  it.skip(' Should change logo ', (done) => {

    // we set the logo_id with the id of the resource added
    oFakeValidBundle.logo_id = 1;

    request
      .put(`${sApiBaseUrl}/${oFakeValidBundle.id}/logo/${oFakeValidBundle.logo_id}`)
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        expect(res.body.id_item).deep.equal(oFakeValidBundle.id);
        expect(res.body.logo_id).equal(oFakeValidBundle.logo_id);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });

  });


  it.skip(' Should remove logo ', (done) => {

    request
      .delete(`${sApiBaseUrl}/${oFakeValidBundle.id}/logo`)
      .expect( (res) => {
        expect(res.status).deep.equal(200);
        expect(res.body.id_item).deep.equal(oFakeValidBundle.id);
        expect(res.body.logo_id).equal(null);
      })
      .end( (err, res) => {
        fEndRequest(err, res, done);
      });

  });


  it.skip(' Should remove resource ', (done) => {

  });

});

