import * as workflowController from 'controllers/workflow';
import { find, insert, updateOne, deleteOne, findOne } from 'repositories';
import * as TimelineRepository from 'repositories/timeline';
import { ObjectID } from 'mongodb';
import guid from 'node-uuid';

export function deleteTemplate(label) {
  return deleteOne('workflow-templates', { label });
}

export function createTemplate(template) {
  return new Promise((resolve, reject) => {
    getTemplate(template.label)
    .then(() => {
      // if template exist delete it and throw 404 error to simulate
      // template not found to continue the workflow and create the template
      return deleteTemplate(template.label)
      .then(() => {
        const err = new Error();
        err.code = 404;
        return Promise.reject(err);
      });
    })
    .catch(err => {
      if (err.code !== 404) {
        return reject(err);
      }
      insert('workflow-templates', template).then(() => resolve())
      .catch(err => reject(err));
    });
  });
}

export function getTemplate(label) {
  return find('workflow-templates', { label });
}

export const Instance = (templateName, data) => {
  return getTemplate(templateName).then(template => {
    delete template._id;
    const instance = Object.assign({}, template, { definitions: Object.assign({}, template.definitions, data.definitions || {}) });
    instance.timelines = instance.timelines.map(timeline => {
      if (data.timelines) {
        timeline = Object.assign({}, timeline, {
          definitions: Object.assign({}, timeline.definitions, data.timelines[timeline.label] || {}),
        });
      }
      return timeline;
    });
    return Promise.resolve(instance);
  })
  .then(instance => insert('workflow-instances', instance))
  .then(inserted => {
    process.nextTick(() => {
      console.log('PROSSES WORKFLOW');
      workflowController.ProcessWorkflow(inserted, 'initial').then(() => ({
        id: inserted._id,
      }));
    });
    return Promise.resolve(inserted);
  });
};

export const InstanceCustom = (templateName, workflow) => {
  return Promise.all(workflow.timelines.map(({ label, definitions, id }) =>
      TimelineRepository.Instance(label, definitions, id))
  )
  .then(timelines => {
    return insert('workflow-instances', {
      label: workflow.label || guid.v4(),
      definitions: Object.assign({}, workflow.definitions || {}),
      timelines,
    });
  })
  .then((inserted) => (
    workflowController.ProcessWorkflow(inserted, 'initial').then(() => ({
      id: inserted._id,
    }))
  ));
};

export const getInstances = () => {
  return find('workflow-instances', {});
};

export const getInstance = _id => {
  let uid = null;
  try {
    uid = ObjectID(_id);
  } catch (e) {
    return Promise.reject(e);
  }
  return findOne('workflow-instances', { _id: uid });
}

export const Update = workflow => {
  return updateOne('workflow-instances', { _id: workflow._id }, { $set: workflow });
}
