/**
 * Created by cjgm on 5/25/16.
 */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Utils from './../../helpers/utils.js';
import * as models from 'repositories/models/index';
import { ITEM } from 'helpers/constants';

chai.use(chaiAsPromised);
chai.should();
let expect = chai.expect;

//IMPORT YOUR REPOSITORY
import BundleRepository from 'repositories/order.js';

// order UNIT TESTING
// TEST CASES:
describe('bundle', () => {

  let oBundleRepo = null;
  let oFakeBundle = null;
  let oFakeBundleRequired = null;
  let oFakeBundleRequiredNullValues = null;
  let oFakeValidatedBundle = {};
  let oBundleModel = null;
  let oUtils = null;
  let sTenant = '';

  before(' Set vars and create the repos  ', () => {
    sTenant = 'hp';
    oUtils = new Utils();
    oFakeBundleRequiredNullValues = {
      name: null,
      created_by_id: null,
      creation_date: null,
      state_id: null,
    };
    oFakeBundleRequired = {
      name: oUtils.generateString(3, 'name-test', 'dd'),
      created_by_id: 26,
      creation_date: Date.now(),
      state_id: 2,
    };
    oFakeBundle = {
      alias: null,
      description: null,
      'id_order': null,
      'id_state': null,
      'created_at': null,
      'assigned_at': null,
    };
    oFakeLogoId = oUtils.generateNumber(2);
    oBundleModel = new models.Bundle();

    // create the file that will be our resource to add
    oUtils.copyFile('tests\\helpers\\resources\\original\\img1.png', 'tests\\helpers\\resources\\img.png');
    oFakeNewResource = {
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

  });


  it(' Create repository ', () => {
    oBundleRepo = new BundleRepository(sTenant);

    expect(oBundleRepo.tenant).to.equal(sTenant);
    expect(oBundleRepo.uploadPath).to.have.string(`${sTenant}\\bundles`);
  });


  it.skip(' Reject new bundle without required fields ', (done) => {

    oBundleModel.validate(oFakeBundle).should.be.rejected.then( () => {
      done();
    })

  });


  it.skip(' Reject new bundle with required fields set to null ', (done) => {
    // iterate over the fake object with the required fields and create
    // one object with only this key and value null
    let oTmpObject = {};

    Object.keys(oFakeBundleRequiredNullValues).map( key => {
      oTmpObject[key] = null;
      return oBundleModel.validate(oTmpObject).should.be.rejected;
    });

    done();
  });


  it(' Validate new bundle by the model ', (done) => {
    Object.assign(oFakeValidatedBundle, oFakeBundle, oFakeBundleRequired);

    oBundleModel.validate(oFakeValidatedBundle).should.be.fulfilled.then( res => {
      done();
    })
  });


  it(' Insert new validated bundle ', (done) => {
    oBundleRepo.create(oFakeValidatedBundle).should.be.fulfilled.then( res => {
      // get the generated new fields in the insert action
      oFakeValidatedBundle.id = res.id;
      oFakeValidatedBundle.alias = res.alias;

      //expect that now are equal objects
      expect(oFakeValidatedBundle).deep.equal(res);
      done();
    })
  });


  it.skip(' Query inserted bundle ', (done) => {
    oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled.then( (res) => {
      expect(res).deep.equal(oFakeValidatedBundle);
      done();
    })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });
  });


  it.skip(' Demand publication of inserted bundle ', (done) => {
    oBundleRepo.demandPublication(oFakeValidatedBundle.id).should.be.fulfilled.then( res => {
      expect(res.affectedRows).to.equal(1);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //set the state of our fake object to pending
        oFakeValidatedBundle.state_id = ITEM.STATE.PENDING;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR:', err);
        done(err);
      })
  });


  it.skip(' Publish ', (done) => {
    oBundleRepo.publish(oFakeValidatedBundle.id).should.be.fulfilled.then( res => {
      expect(res.affectedRows).to.equal(1);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //set the state of our fake object to published
        oFakeValidatedBundle.state_id = ITEM.STATE.PUBLISHED;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR:', err);
        done(err);
      })
  });


  it.skip(' Unpublish the published bundle ', (done) => {
    oBundleRepo.unpublish(oFakeValidatedBundle.id).should.be.fulfilled.then( res => {
      expect(res.affectedRows).to.equal(1);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //set the state of our fake object to draft
        oFakeValidatedBundle.state_id = ITEM.STATE.DRAFT;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR:', err);
        done(err);
      })
  });


  it.skip(' Mark as deleted ', (done) => {
    oBundleRepo.delete(oFakeValidatedBundle.id).should.be.fulfilled.then( res => {
      expect(res.affectedRows).to.equal(1);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //set the state of our fake object to deleted
        oFakeValidatedBundle.state_id = ITEM.STATE.DELETED;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR:', err);
        done(err);
      })
  });


  it.skip(' Change name and alias ', (done) => {
    //First, publish the bundle
    oBundleRepo.publish(oFakeValidatedBundle.id).should.be.fulfilled.then( res => {
      expect(res.affectedRows).to.equal(1);
    })
      .then( () => {
        oFakeValidatedBundle.name = oUtils.generateString(3,'name-alias-test','dd-alias');

        return oBundleRepo.update({
          values: {
            name: oFakeValidatedBundle.name
          },
          filters: {
            id: oFakeValidatedBundle.id
          }
        }).should.be.fulfilled;
      })
      .then( (res) => {
        // an array of 3 elements is returned
        // first are keywords update result, second corners, third links and fourth the bundle update result
        expect(res[3].affectedRows).to.equal(1);
        return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
      })
      .then( (res) => {
        // set the state of our fake object to deleted and set the state to draft
        // because when we update an item, change its state to draft again
        oFakeValidatedBundle.alias = res.alias;
        oFakeValidatedBundle.state_id = ITEM.STATE.DRAFT;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });
  });


  it.skip(' Change baseline ', (done) => {
    oFakeValidatedBundle.baseline = oUtils.generateString(10,'new-baseline-test','dd-baseline');

    oBundleRepo.update({
      values: {
        baseline: oFakeValidatedBundle.baseline,
      },
      filters: {
        id: oFakeValidatedBundle.id,
      }
    }).should.be.fulfilled.then( res => {
      expect(res[3].affectedRows).to.equal(1);
      done();
    });
  });


  it.skip(' Change description ', (done) => {
    oFakeValidatedBundle.description = oUtils.generateString(50,'new-description-test','dd-description');

    oBundleRepo.update({
      values: {
        description: oFakeValidatedBundle.description,
      },
      filters: {
        id: oFakeValidatedBundle.id,
      }
    }).should.be.fulfilled.then( res => {
      expect(res[3].affectedRows).to.equal(1);
      done();
    });
  });


  it.skip(' Change logo ', (done) => {

    oBundleRepo.changeLogo({
      values: { logo_id: 1},
      filters: { id: oFakeValidatedBundle.id }
    })
      .should.be.fulfilled.then( (res) => {
      expect(res.logo_id).to.equal(1);
      expect(res.id_item).to.equal(oFakeValidatedBundle.id);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //change the logo id of our fake bundle object
        oFakeValidatedBundle.logo_id = res.logo_id;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      })

  });


  it(' Delete logo ', (done) => {
    oBundleRepo.deleteLogo({
      values: { logo_id: null},
      filters: { id: oFakeValidatedBundle.id }
    })
      .should.be.fulfilled.then( (res) => {
      expect(res.logo_id).to.equal(null);
      expect(res.id_item).to.equal(oFakeValidatedBundle.id);
      return oBundleRepo.getOne(oFakeValidatedBundle.id).should.be.fulfilled;
    })
      .then( (res) => {
        //change the logo id of our fake bundle object
        oFakeValidatedBundle.logo_id = null;
        expect(res).deep.equal(oFakeValidatedBundle);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      })
  });


  it.skip(' Upload resource ', (done) => {
    // set id of our fake bundle to the resource object
    oFakeNewResource.id_item = oFakeValidatedBundle.id;
    oBundleRepo.uploadResource(oFakeNewResource).should.be.fulfilled.then( (res) => {
      //console.log('RESOURCE ADDED: ', res.resource.id);
      oFakeNewResource.id = res.resource.id;
      done();
    })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });
  });


  it.skip(' Delete resource ', (done) => {
    if (oFakeNewResource.id && oFakeValidatedBundle.id) {
      const oResourceData = {
        id_item: oFakeValidatedBundle.id,
        id_resource: oFakeNewResource.id,
      };

      oBundleRepo.deleteResource(oResourceData).should.be.fulfilled
        .then( (res) => {
          expect(res.id_item).to.equal(oResourceData.id_item);
          expect(res.id_resource).to.equal(oResourceData.id_resource);
          done();
        })
        .catch((err) => {
          console.log('ERROR: ', err);
          done(err);
        });
    }
    else {
      done('Error with new resource or validated bundle id');
    }
  });


  it.skip(' Add resource to carousel ', (done) => {
    // set the item to which the resources belong
    oFakeResource1.id_item = oFakeValidatedBundle.id;
    // first upload three resources, one of them is a video
    oBundleRepo.uploadResource(oFakeResource1).should.be.fulfilled.then( (res) => {
      oFakeResource1.id = res.resource.id;
      oFakeResource2.id_item = oFakeValidatedBundle.id;
      return oBundleRepo.uploadResource(oFakeResource2).should.be.fulfilled;
    })
      .then( (res) => {
        oFakeResource2.id = res.resource.id;
        oFakeResource3.id_item = oFakeValidatedBundle.id;
        return oBundleRepo.uploadResource(oFakeResource3).should.be.fulfilled;
      })
      .then( (res) => {
        oFakeResource3.id = res.resource.id;
        // after upload 3 resources, set they order to show them in the carousel
        setTimeout(() => {}, 1000);
        return oBundleRepo.addResourceToCarousel(oFakeResource1.id, 2).should.be.fulfilled;
      })
      .then( (res) => {
        expect(res.id_resource).to.equal(oFakeResource1.id);
        expect(res.id_bundle).to.equal(oFakeResource1.id_item);
        expect(res.order).to.equal(2);
        setTimeout(() => {}, 1000);
        return oBundleRepo.addResourceToCarousel(oFakeResource2.id, 3).should.be.fulfilled;
      })
      .then( (res) => {

        expect(res.id_resource).to.equal(oFakeResource2.id);
        expect(res.id_bundle).to.equal(oFakeResource2.id_item);
        expect(res.order).to.equal(3);
        setTimeout(() => {}, 1000);
        return oBundleRepo.addResourceToCarousel(oFakeResource3.id, 1).should.be.fulfilled;
      })
      .then( (res) => {
        expect(res.id_resource).to.equal(oFakeResource3.id);
        expect(res.id_bundle).to.equal(oFakeResource3.id_item);
        expect(res.order).to.equal(1);
        done();
      })
      .catch( (err) => {
        console.log('ERROR: ', err);
        done(err);
      });
  });
});