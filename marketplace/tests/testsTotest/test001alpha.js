//var assert = require('assert');
import {expect} from 'chai';
import mysql from 'mysql';
import Repository,{init, testPool} from 'repositories/drivers/mysql';


describe.skip('MYSQL DB => ', function() {
    describe('#connect => ', function () {
        it('should connect to DB', function () {
            init();
            testPool('hp').then(function(result){
                expect(result).to.equal(true);
                done();
            }).catch(function(error){
                expect(true).to.equal(false);
                done();
            });
        });
    });
});
