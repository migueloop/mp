import config from 'config';

export function compareUsing(value1, value2, comparationMethod) {
  switch (comparationMethod) {
    case 'equal':
      return `${value1}` === `${value2}`;
    default:
      return false;
  }
}
export function lookValues(variable, ...definitions) {
  return definitions.concat([config.get('definitions') || {}]).reduce((value, definition) =>
    value || variable.split('.').reduce((prev, next) => {
      if (!prev) {
        return prev;
      }
      if (prev[next]) {
        return prev[next];
      }
      return false;
    }, definition) || variable.split('．').reduce((prev, next) => {
      if (!prev) {
        return prev;
      }
      if (prev[next]) {
        return prev[next];
      }
      return false;
    }, definition)
  , false);
}

export function replaceValues(value, ...definitions) {
  return `${value}`.replace(/@{([\w\.])*}/g, k =>
    lookValues(k.substr(2, k.length - 3), ...definitions)
  );
}


export function replaceValuesInObject(value, ...definitions) {
  return Object.keys(value).reduce((obj, key) => {
    if (typeof value[key] === 'object') {
      obj[key] = replaceValuesInObject(value[key], ...definitions);
      return obj;
    }
    obj[key] = replaceValues(value[key], ...definitions)
    return obj;
  }, {});
}
