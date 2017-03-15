const program = require('commander');
const mkdirp = require('mkdirp');
const _ = require('underscore');
const fs = require('fs');
const camelCased = input => input.replace(/^([a-z])/g, g => g[0].toUpperCase()).replace(/-([a-z])/g, g => g[0].toUpperCase());
const getActions = require('./templates/actions');
const getConstants = require('./templates/constants');
const getFlux = require('./templates/flux');
const getReducer = require('./templates/reducer');

program
.version('0.0.1')
.option('-n --name <name>', 'Module name')
.option('-d --dir <dir>', 'Module directory e.g back-office', /^(back-office|front-office)$/)
.option('-c --components', 'Has components')
.option('-r --redux', 'Has redux')
.parse(process.argv);

// If no name then exit
if (!program.name || !_.isString(program.name)) {
  throw new Error('Name missing. Module name is required.');
}
if (!program.dir || !_.isString(program.dir)) {
  throw new Error('Module driectory missing. Module directory is required.');
}
// if no redux and no components then exit
if (!program.redux && !program.components) {
  throw new Error('You must require either redux or components');
}
console.log(' name: %s', program.name);
console.log(' dir: %s', program.dir);
console.log(' redux: %j', program.redux);
console.log(' components: %j', program.components);
// otherwise create dir
const pathToCreate = `${__dirname}/../../src/shared/v02/modules/${program.dir}/${program.name}`;
console.log(pathToCreate);
if (fs.existsSync(pathToCreate)) {
  throw new Error(`Module directory ${pathToCreate} already exists`);
}
mkdirp.sync(pathToCreate);
const componentsPath = `${__dirname}/../../src/shared/v02/modules/${program.dir}/${program.name}/components`;
if (program.components) {
  mkdirp.sync(componentsPath);
}
const camelCasedName = camelCased(program.name.replace(/s+$/, ''));
fs.writeFileSync(`${pathToCreate}/${camelCasedName}Flux.js`, getFlux(camelCasedName));
fs.writeFileSync(`${pathToCreate}/${camelCasedName}Actions.js`, getActions(camelCasedName));
fs.writeFileSync(`${pathToCreate}/${camelCasedName}Reducer.js`, getReducer(camelCasedName));
fs.writeFileSync(`${pathToCreate}/${camelCasedName}Constants.js`, getConstants(camelCasedName));
