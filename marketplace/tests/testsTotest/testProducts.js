import {expect, should} from 'chai';
import {init} from 'repositories/drivers/mysql';
import ProductRepository from 'repositories/product.js';
import Promise from 'bluebird';
import TenantTestsHelpers from './../helpers/tenant.js';
import Utils from './../helpers/utils.js';

describe.skip('PRODUCTS', () => {
    let oUtils = new Utils();
    let oTenantHelper = new TenantTestsHelpers();
    let aTenants = oTenantHelper.getTenants();
    let aProductsRepositories = [];
    let oNewProduct = {'created_by':10};
    let oProductRepository = {};

    before('Get tenant and its user table', () => {
        oNewProduct.alias = oUtils.generateString(5);
        oNewProduct.name = oUtils.generateString(5);
        oNewProduct.type = 'MobileApp';
        oNewProduct.state = 'pending';
        oNewProduct.logo = oUtils.generateNumber(1);
        oNewProduct.specification = oUtils.generateNumber(2);
        oNewProduct.editor_logo = oUtils.generateNumber(3);

        aTenants.forEach((tenant) => {
            oNewProduct.name = oUtils.generateString(5);
            aProductsRepositories.push(new ProductRepository(tenant));
        });

    });

    it('Should return an error INSERTING PRODUCT without ALIAS', () => {

    });

    it('Should return an error INSERTING PRODUCT with repeated ALIAS', () => {

    });

    it('Should return an error INSERTING PRODUCT without USER ID @ CREATED_BY', () => {

    });

    it('Should return an error INSERTING PRODUCT without STATE', () => {

    });

/*    it('INSERT new product', () => {
        aTenants.forEach(function(tenant){
            oProductRepository = new ProductRepository(aProductsRepositories[0].tenant);
            return oProductRepository.create(oNewProduct).then(Promise.resolve, Promise.reject);/!*.then(function(sMsg) {
                console.log(sMsg);
            });*!/
        });
    });*/

    it('QUERY INSERTED product', () => {

    });

    it('DELETE INSERTED product', () => {

    });

    it('Should return an error querying deleted product', () => {

    });

});
