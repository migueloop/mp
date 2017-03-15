import {expect, should} from 'chai';
import {init} from 'repositories/drivers/mysql';
import CornerRepository from 'repositories/corner.js';
import Promise from 'bluebird';
import TenantTestsHelpers from './../helpers/tenant.js';
import Utils from './../helpers/utils.js';

describe.skip('CORNERS', () => {
    let oUtils = new Utils();
    let oTenantHelper = new TenantTestsHelpers();
    let aTenants = oTenantHelper.getTenants();
    let aCornersRepositories = [];
    let oNewCorner = {'created_by':245};
    let oCornerRepository = {};

    before('Get tenant and its user table', () => {
        //get tenant and its user table
        aTenants.forEach((tenant) => {
            oNewCorner.name = oUtils.generateString(5);
            aCornersRepositories.push(new CornerRepository(tenant));
        });
    });

    it('Should return an error INSERTING CORNER without ALIAS', () => {

    });

    it('Should return an error INSERTING CORNER with repeated ALIAS', () => {

    });

    it('Should return an error INSERTING CORNER without USER ID @ CREATED_BY', () => {

    });

/*    it('INSERT new corner', () => {
        aTenants.forEach(function(tenant){
            oCornerRepository = new CornerRepository(aCornersRepositories[0].tenant);
            return oCornerRepository.create(oNewCorner).then(Promise.resolve, Promise.reject);/!*.then(function(sMsg) {
                console.log(sMsg);
            });*!/
        });
    });*/

    it('QUERY INSERTED corner', () => {

    });

    it('DELETE INSERTED corner', () => {

    });

    it('Should return an error querying deleted corner', () => {

    });

});
