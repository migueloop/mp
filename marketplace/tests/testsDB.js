import { expect, should } from 'chai';
import { init } from 'repositories/drivers/mysql';
import Promise from 'bluebird';
import TenantTestsHelpers from './helpers/tenant';
import UserRepository from 'repositories/user';
import UserTestsHelpers from './helpers/user';
import Utils from './helpers/utils';
import { _ } from 'underscore';

describe.skip('USERS', function() {
    let aAuthProviders = ['local', 'facebook', 'linkedin'];
    let aUsersRepositories = [];
    let oTenantHelper = new TenantTestsHelpers();
    let aTenants = oTenantHelper.getTenants();
    let oNewUser = {};
    let oUserHelper = new UserTestsHelpers();
    let oUserRepository = {};
    let oUtils = new Utils();
    let sFakeAuthProvider = 'fakeAuth';
    let sFakeEmail = 'fakeemail.com';
    let sFakePassword = '12345';
    let sFakeRoleId = oUtils.generateNumber(10);

    before('Get tenant and its user table. Set new user model.', () => {
        //get tenant and its user table
        aTenants.forEach((tenant) => {
            aUsersRepositories.push(new UserRepository(tenant));
        });
        oUserHelper.setTestUser(oNewUser, aAuthProviders);
    });

    //describe('Email', function () {

 /*        after('clear fake fields', function () {

            delete oNewUser.id_role;
        });

        it('Should return an error INSERTING USER without EMAIL', function () {
            delete oNewUser.email;
        });

        it('Should return an error INSERTING USER with EMPTY EMAIL', function () {
            oNewUser.email = '';
        });

        it('Should return an error INSERTING USER with no VALID EMAIL', function () {
            oNewUser.email = oUtils.generateNumber(1) + sFakeEmail;
        });*/

        it('Should return an error INSERTING USER with NO VALID CONTACT EMAIL', function () {


            let aPromises = [];

            aTenants.forEach(function (tenant) {
                oNewUser.email = oUtils.generateEmail('solutions');
                oNewUser.contact_mail = oUtils.generateEmail('solutions');
                oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
                aPromises.push(oUserRepository.register(oNewUser));
            });

            return Promise.all(aPromises).then(Promise.reject, Promise.resolve).then(function(result){
                console.log('++++++++++---------+++++++++++-' , result);
            });
        });

        /*afterEach('register user', function () {

        });*/
    });
//});
