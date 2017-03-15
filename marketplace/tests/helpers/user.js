//import Promise from 'bluebird';
import UserRepository from 'repositories/user.js';
import UtilsHelper from './utils.js';

export default class UserTestsHelpers {
    register(oUser, aTenants, aUsersRepositories){
        //console.log('---------------> Enter -----------> aUsersRepositories' + aUsersRepositories + '\n---> aTenants' + aTenants + '\n---> oUser' + oUser);
        let oUserRepository = {};
        //return new Promise(function (resolve, reject) {
            aTenants.forEach(function(sTenant){
                oUserRepository = new UserRepository(aUsersRepositories[0].sTenant);
                 return oUserRepository.register(oUser);
               // resolve();
                /*return oUserRepository.register(oUser).then(Promise.resolve, Promise.reject).then(function(sMsg) {
                 //console.log(sMsg);
                    resolve();
                 });*/
            });
        //});
    }

    setTestUser(oNewUser, aAuthProviders){
        let oUtils = new UtilsHelper();

        oNewUser.auth_provider = aAuthProviders[oUtils.generateNumberInRange(0,aAuthProviders.length-1)];
        oNewUser.email = oUtils.generateEmail('solutions');
        oNewUser.id_role = 1;
        oNewUser.name =  oUtils.generateString(5, 'dev', 'test');
        oNewUser.password = oUtils.cypherString('teSting#2');
        delete oNewUser.contact_mail;
    }
}