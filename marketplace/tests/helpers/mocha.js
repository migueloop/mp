//  Use of MOCHA programatically
//  Source: https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically

const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');

// Instantiate a Mocha instance.
const mocha = new Mocha();
const testDir = 'tests/';

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
  // Only keep the .js files
  return file.substr(-3) === '.js';
}).forEach(function(file){
  mocha.addFile(
      path.join(testDir, file)
  );
});

// Run the tests.
mocha.reporter('list').ui('tdd').run(function(failures){
  process.on('exit', function () {
      process.exit(failures);
  });
});
