// Validate all filenames in project so that they only use lowercase and hyphens.
// This will avoid problems of case/in/sensitive/aware systems working together
import recursiveReadSync from 'recursive-readdir-sync';
let files;

try {
  files = recursiveReadSync('./client')
  .concat(recursiveReadSync('./server'))
  .concat(recursiveReadSync('./shared'));
} catch (err) {
  if (err.errno === 34) {
    console.log('Path does not exist');
  } else {
    throw err;
  }
}
const regex = /^[a-z-\.\/0-9]+$/g;
const filesNotMatching = files.filter(f => !f.match(regex));
console.log('filesNotMatching:', filesNotMatching);
