import crypto from 'crypto';
import { GUID } from 'helpers/constants';
import fs from 'fs';

export default class Utils {
    copyFile = (sSourcePath, sDestinyPath) => {
        try {
            fs.createReadStream(sSourcePath).pipe(fs.createWriteStream(sDestinyPath));
            return true;
        }
        catch (err) {
            console.log(`ERROR COPYING FILE FROM ${sSourcePath} to ${sDestinyPath} with error code${err}` );
            return false;
        }
    };

    cypherString = (sString) => {
        let secretPhrase = 'marketplace-secret';
        let algorithm = 'aes256';
        let cipher = crypto.createCipher(algorithm,secretPhrase);
        let crypted = cipher.update(sString,'utf8','hex');

        crypted += cipher.final('hex');

        return crypted;
    };

    generateEmail(sDomain){
        let email = this.generateString(this.generateNumber(1)) + '@' + 'testingdd' + '.';
        return sDomain ? email + sDomain : email + 'testDD';
    };

    generateGUID = () => {
        return GUID();
    };

    generateNumber = (nDigits) => {
        if (typeof(nDigits)==='number') {
            let sRandomBase1 = '8';
            let sRandomBase2 = '1';
            let nRandomBase1;
            let nRandomBase2;
            nDigits = nDigits || 10;

            for (let i = 1; i < nDigits; i++) {
                sRandomBase1 = (sRandomBase1 + '9');
                sRandomBase2 = (sRandomBase2 + '0');
            }
            nRandomBase1 = +sRandomBase1;
            nRandomBase2 = +sRandomBase2;

            return Math.floor(Math.random() * nRandomBase1 + nRandomBase2);
        }
        else return -1;
    };

    generateNumberInRange = (min, max) => {
        if(typeof(min)==='number' && typeof(max)==='number'){
            return Math.floor(Math.random()*min+max);
        }
        else return -1;
    };

    generateString = (nNumChars, sPreString, sPostString) => {
        let text = '';
        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        sPreString = sPreString || 'test';
        sPostString = sPostString || 'test';

        for( let i=0; i < nNumChars; i++ ) {
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        return sPreString + text + sPostString;
    };

}
