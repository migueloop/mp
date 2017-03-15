import {expect, should} from 'chai';
import Promise from 'bluebird';
import config from 'config';
import {init} from 'repositories/drivers/mysql';
import TenantTestsHelpers from './../helpers/tenant.js';
import DBTestsHelpers from './../helpers/db.js';

describe.skip('TENANTS', () => {
    let aPools = [];
    let oDBTestsHelpers = new DBTestsHelpers();
    let oTenantHelper = new TenantTestsHelpers();
    let aTenants = oTenantHelper.getTenants();
    let sFakeTenant = 'fakeTenant';

    beforeEach('Get Pools connections',() => {
        aPools = oDBTestsHelpers.init();
    });

    //check db connection with an existing tenant
    it('with RIGHT tenant', () => {
        aTenants.forEach(function(tenant){
                return oTenantHelper.getTenantConnection(aPools,tenant).then(Promise.resolve, Promise.reject);/*.then(function(sMsg) {
                    console.log(sMsg);
                });*/
            });
        });

    //check db connection with a NO existing tenant, must be rejected
    it('with FAKE TENANT', () => {
        return oTenantHelper.getTenantConnection(aPools, sFakeTenant).then(Promise.reject, Promise.resolve);/*.then(function(sMsg){
            console.log(sMsg);
        });*/
    });
});
