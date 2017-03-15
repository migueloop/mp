import fs from 'fs'
import { sync as globSync } from 'glob'
import { sync as mkdirpSync } from 'mkdirp'

const MESSAGES_PATTERN = './_translation/**/*.json';
const LANG_DIR = './_translation/';

try {
  fs.unlinkSync(`${LANG_DIR}/translate.json`)
} catch (e) {
}


// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN, {
  ignore: 'translate.json'
})
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage, description }) => {
      if (collection.hasOwnProperty(id))
        throw new Error(`Duplicate message id: ${id}`);

      collection[id] = {message : defaultMessage, description}
    });
    return collection
  }, {});


fs.writeFileSync(`${LANG_DIR}/translate.json`, JSON.stringify(defaultMessages, null, 2));