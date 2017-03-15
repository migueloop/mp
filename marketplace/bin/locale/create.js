var path = require('path');
var fs = require('fs');
var mkdirpSync = require('mkdirp').sync;

var language = process.argv[2];
var file = process.argv[3];

var LANG_DIR = './server/locales/default';
var outputFolder = `${LANG_DIR}/${language}`;

var fileExists = fs.existsSync || function (filePath) {
    try {
      fs.statSync(filePath);
    } catch (e) {
      if (err.code === "ENOENT") {
        return false;
      }
    }
    return true;
  };

function error(msg){
  console.log(msg);
  process.exit(0)
}

if(!language || language.length !== 2){
  error('First argument must be a language abbreviation Example: "en"')
}

if(!file){
  error('The second argument must be the path of the language file you want to use')
}

if(!fileExists(file)){
  error(`File "${file}" doesn't exist`)
}

var messages = JSON.parse(fs.readFileSync(file, 'utf8'));

var langMessages = Object.keys(messages)
  .sort()
  .reduce((prev,key) => {
    prev[key] = messages[key].message;
    return prev
  },{});

mkdirpSync(outputFolder);

fs.writeFileSync(`${outputFolder}/index.js`, 'export default '+JSON.stringify(langMessages, null, 2));
console.log(`File for language ${language} was generated in ${outputFolder}/index.js`);