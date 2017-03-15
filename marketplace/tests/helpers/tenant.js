import Promise from 'bluebird';
import config from 'config';

export default class TenantTestsHelpers {

    getTenantConnection(pools, tenant){
        return new Promise((resolve, reject) => {
            if (pools[tenant] !== undefined) {
                pools[tenant].getConnection(function (error, connection) {
                    if (!error) {
                        connection.release();
                        //resolve('Tenant "' + tenant + '" EXISTS and we can connect to db');
                        resolve();
                    }
                    //reject('Can not connect to "' + tenant + '" db. Please, review db connection settings');
                    reject();
                })
            }
            else {
                //reject('Tenant "' + tenant + '" DOES NO exist');
                reject();
            }
        });
    };

    getTenants() {
        let aTenants = [];

        for (let i = 0; i < config.tenants.length; i++) {
            aTenants.push(config.tenants[i]);
        }

        return aTenants;
    };
}