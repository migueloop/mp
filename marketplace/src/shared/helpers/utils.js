let fileExistsFn;
let i;
let j;
const fs = require('fs');
const path = require('path');
export const clean = str => {
  const irregular = ['À', 'Â', 'Ã', 'Ä', 'Å', 'È', 'Ê', 'Ë', 'Ì', 'Î', 'Ï', 'Ò',
   'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Û', 'Ü', 'Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í',
   'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ä', 'ë', 'ï',
   'ö', 'ü', 'ã', 'å', 'õ', 'ø', 'ç', 'ÿ', '/', '-', ' '];
  const regular = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'I', 'I', 'I', 'O',
  'O', 'O', 'O', 'O', 'U', 'U', 'U', 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i',
  'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
  'o', 'u', 'a', 'a', 'o', 'o', 'c', 'y', '', '', '-'];

  for (i = 0, j = irregular.length; i < j; i++) {
    str = str.replace(new RegExp(irregular[i], 'g'), regular[i]);
  }
  return str;
};

export function guid(prefix = '') {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${prefix}${s4()}${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

//  todo: this needs to be moved out of shared - the client does not have access
//  to node modules
if (fs.existsSync) {
  fileExistsFn = fs.existsSync;
} else {
  fileExistsFn = filePath => {
    try {
      fs.statSync(filePath);
    } catch (err) {
      return !(err.code === 'ENOENT');
    }
    return true;
  };
}
export const fileExists = fileExistsFn;

export function sha256WithSecretKey(str, secret) {
  const crypto = require('crypto');

  const hash = crypto.createHmac('sha256', secret)
    .update(`${str}`)
    .digest('hex');

  return hash;
}

export function objectEntries(obj) {
  let index = 0;

  // In ES6, you can use strings or symbols as property keys,
  // Reflect.ownKeys() retrieves both
  const propKeys = Reflect.ownKeys(obj);

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < propKeys.length) {
        const key = propKeys[index];
        index++;
        return { value: [key, obj[key]] };
      }
      return { done: true };
    },
  };
}


export function groupBy(arr, key) {
  return arr.reduce((grouped, e) => {
    (grouped[e[key]] = grouped[e[key]] || []).push(e);
    return grouped;
  }, {});
}
