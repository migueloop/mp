import { Instance, getInstance, InstanceCustom } from 'repositories/workflow';
import * as workflowController from 'controllers/workflow';


function getWorkflow(req, res) {
  getInstance(req.swagger.params.workflowId.value)
    .then(packageWF => {
      if (!packageWF) {
        return res.status(400).json({
          code: 404,
          message: 'no package found',
        });
      }
      res.json(workflowController.parse(packageWF));
    })
    .catch(e => {
      return res.status(400).json({
        code: 404,
        message: e.message,
      });
    });
}

function getWorkflowLog(req, res) {
  getInstance(req.swagger.params.workflowId.value)
    .then(packageWF => {
      if (!packageWF) {
        return res.status(400).json({
          code: 404,
          message: 'no package found',
        });
      }
      res.json(workflowController.getLog(packageWF));
    })
    .catch(e => {
      return res.status(500).json({
        code: 500,
        message: e.message,
      });
    });
}

function dispatch(req, res) {
  console.log('DISPATCH ACTION', req.body);
  workflowController.step('api', {
    body: req.body,
  })
    .then(instances => {
      return res.status(200).json({
        message: 'ok',
      });
    })
    .catch(err => {
      return res.status(400).json({
        code: 404,
        message: err.message,
      });
    });
}

function create(req, res) {
  console.log(JSON.stringify({
    definitions: req.body.definitions,
    timelines: req.body.timelines,
  }, null, 2));
  Instance(req.body.label, {
    definitions: req.body.definitions,
    timelines: req.body.timelines,
  })
    .then(instance => {
      res.json(instance);
    })
    .catch(err => {
      return res.status(400).json({
        code: 404,
        message: err.message,
      });
    });
}
function createCustom(req, res) {
  console.log(JSON.stringify({
    definitions: req.body.definitions,
    timelines: req.body.timelines,
  }, null, 2));
  InstanceCustom(req.body.label, {
    label: req.body.label,
    definitions: req.body.definitions,
    timelines: req.body.timelines,
  })
    .then(instance => {
      res.json(instance);
    })
    .catch(err => {
      console.log(err);
      return res.status(400).json({
        code: 404,
        message: err.message,
      });
    });
}

module.exports = {
  getWorkflow,
  dispatch,
  create,
  createCustom,
  getWorkflowLog,
};
