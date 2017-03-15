import * as workflowController from 'controllers/workflow';
import { find, insert, updateOne, deleteOne, findOne } from 'repositories';
import guid from 'node-uuid';

export function deleteTemplate(label) {
  return deleteOne('timeline-templates', {
    label,
  });
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
        insert('timeline-templates', template).then(() => {
          return resolve();
        }).catch(err => {
          reject(err);
        });
      });
  });
}

export function getTemplate(label) {
  return findOne('timeline-templates', {
    label,
  });
};

export const Instance = (templateName, definitions, id = guid.v4()) => (
  getTemplate(templateName).then(template => {
    delete template._id;
    const instance = Object.assign({}, template, { definitions: Object.assign({}, template.definitions, definitions || {}) });
    instance.id = id;
    return Promise.resolve(instance);
  })
)


export const getInstances = () => {
  return find('timeline-instances', {});
};

export const getInstance = id => {
  return findOne('workflow-instances', { 'timelines.id': id })
    .then(
      workflow => Promise.resolve(
        workflow.timelines.find(timeline => `${timeline.id}` === `${id}`)
      )
    );
};

export const Update = timeline => {
  return updateOne('timeline-instances', { _id: timeline._id }, { $set: timeline });
}
