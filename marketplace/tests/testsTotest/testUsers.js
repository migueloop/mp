import { expect, should } from 'chai';
import { init } from 'repositories/drivers/mysql';
import Promise from 'bluebird';
import TenantTestsHelpers from './../helpers/tenant.js';
import UserRepository from 'repositories/user.js';
import UserTestsHelpers from './../helpers/user.js';
import Utils from './../helpers/utils.js';
import { _ } from 'underscore';

describe.skip('USERS', () => {
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
    });

    describe('Email', function () {

        let _afterEach = _.after(4, function() {
            doneDescribe()
        });



        before('set user', function () {
            oUserHelper.setTestUser(oNewUser, aAuthProviders);
        });

        after('clear fake fields', function () {

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
        });

        it('Should return an error INSERTING USER with NO VALID CONTACT EMAIL', function () {
            oNewUser.email = oUtils.generateEmail('solutions');
            oNewUser.contact_mail = oUtils.generateNumber(1) + sFakeEmail;
        });

        afterEach('register user', function (doneAfterEach) {
            aTenants.forEach(function (tenant) {
                oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
                return oUserRepository.register(oNewUser).then(Promise.reject, Promise.resolve).then(function (oNewUserCreated) {
                    // console.log(oNewUserCreated.id);

                });
            });
        });

    });

    /*    describe('Password', function () {
     before('set user', function () {
     oUserHelper.setTestUser(oNewUser, aAuthProviders);
     });

     after('clear fake fields', function () {
     delete oNewUser.id_role;
     doneDescribe();
     });

     it('Should return an error INSERTING USER without PASSWORD', function () {
     delete oNewUser.password;
     });

     it('Should return an error INSERTING USER with EMPTY PASSWORD', function () {
     oNewUser.password = '';
     });

     it('Should return an error INSERTING USER PASSWORD shorter than 6 CHARS ', function () {
     oNewUser.password = sFakePassword;
     });

     afterEach('register user', function(doneAfterEach)  {
     aTenants.forEach(function (tenant) {
     oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
     return oUserRepository.register(oNewUser).then(Promise.reject, Promise.resolve).then(function (oNewUserCreated) {
     doneAfterEach();
     });
     });
     });
     });

     describe('Role ID', function () {

     /!*        let _afterEach = _.after(3,()=>{
     done()
     })*!/

     before('set user', function () {
     oUserHelper.setTestUser(oNewUser, aAuthProviders);
     });

     after('clear fake fields', function () {
     delete oNewUser.id_role;
     doneDescribe();
     });

     it('Should return an error INSERTING USER without ROLE ID', function () {
     delete oNewUser.id_role;
     });

     it('Should return an error INSERTING USER WITH EMPTY ROLE ID', function () {
     oNewUser.id_role = '';
     });

     it('Should return an error INSERTING USER wit NO VALID ROLE ID', function () {
     oNewUser.password = sFakeRoleId;
     });

     afterEach('create user', function(doneAfterEach) {
     aTenants.forEach(function (tenant) {
     oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
     return oUserRepository.register(oNewUser).then(Promise.reject, Promise.resolve).then(function (oNewUserCreated) {
     //console.log(oNewUserCreated);
     doneAfterEach();
     });
     });
     });


     });*/

    /*   describe('DB actions', function (doneDescribe) {
     let nNewUserID = null;

     before('set user', function () {
     oUserHelper.setTestUser(oNewUser, aAuthProviders);

     });

     after('clear fake fields', function () {
     delete oNewUser.id_role;
     doneDescribe();
     });

     beforeEach('Get tenant and its user table. Set new user model.', function () {
     //get tenant and its user table
     aTenants.forEach((tenant) => {
     aUsersRepositories.push(new UserRepository(tenant));
     });
     });

     it('Create new user', function(doneAfter) {
     aTenants.forEach(function (tenant) {
     oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
     /!*                var chai = require("chai");
     var chaiAsPromised = require("chai-as-promised");
     chai.use(chaiAsPromised);
     chai.should();*!/

     //return promise.should.be.fulfilled;

     return oUserRepository.register(oNewUser).then(function (oCreatedUser) {
     console.log('-----------------------------> Created user: ', oCreatedUser.id);
     doneAfter();
     });
     });
     });

     /!* it('Query new user', () => {
     aTenants.forEach(function(tenant){
     oUserRepository = new UserRepository(aUsersRepositories[0].tenant);
     return oUserRepository.register(oNewUser).then(Promise.resolve, Promise.reject).then(function(sMsg) {
     console.log('USER FETCHED: ', sMsg);
     });
     });
     });*!/

     it('Should return an error QUERYING NO EXISTING USER', function () {
     });

     it('Delete new user', () => {

     });

     it('Should return an error DELETING NO EXISTING USER', function () {

     });

     it('Should return an error QUERYING DELETED USER', function () {

     });

     });

     describe('Login actions', function () {

     });*/

});
