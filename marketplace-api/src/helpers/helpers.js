
export function isArray(obj) {
  return obj instanceof Array;
}

export function isObject(obj) {
  return typeof obj === 'object' && !isArray(obj);
}

export const cleanObject = obj => {
  if (!isObject(obj) && !isArray(obj)) {
    return obj;
  }
  if (isArray(obj)) {
    return cleanArray(obj);
  }
  return Object.keys(obj).reduce((previous, current) => {
    if (obj[current]) {
      if (typeof obj[current] === 'object') {
        if (obj[current] instanceof Array) {
          // console.log('ARRAY', obj[current]);
          previous[current] = cleanArray(obj[current]);
        } else {
          previous[current] = cleanObject(obj[current]);
        }
      } else {
        previous[current] = obj[current];
      }
    }
    return previous;
  }, {});
};

export const cleanArray = array => {
  return array.map(cleanObject);
}
