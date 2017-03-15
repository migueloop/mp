/**
 * Created by coud on 6/19/16.
 */
console.log('environment', process.env.NODE_ENV);

let workflowTemplate = require('./sncf.json');
let timlineTemplates = require('./timelines-templates.json');
if (process.env.NODE_ENV !== 'production') {
  workflowTemplate = require('./sncf-dev.json');
  timlineTemplates = require('./timelines-templates-dev.json');

  require('babel-register');
}


require('repositories/workflow')
  .createTemplate(workflowTemplate)
  .then(() => Promise.all(
    timlineTemplates.timelines.map(
      require('repositories/timeline').createTemplate
    )
  ))
  .then(() => {
    console.log('FINISHH');
    process.exit(0);
  }).catch(err => {
    console.log(err);
    throw err;
  });
