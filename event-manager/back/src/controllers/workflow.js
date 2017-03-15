import { lookValues } from 'helpers';
import { getInstances, Update } from 'repositories/workflow';
import * as TimelineController from 'controllers/timeline';

export const ProcessWorkflow = (Workflow, type, request) => {
  const workflow = Object.assign({}, Workflow);
  return new Promise((resolve, reject) => {
    const update = workflow.timelines.reduce((prev, timeline) => {
      let currentStep = timeline.steps[timeline.active];
      // If the current Step dont exist return;
      if (!currentStep) {
        currentStep = { triggers: [] };
      }
      // find a trigger that fill the event requirement
      let save = !!currentStep.triggers.find(trigger => {
        if (trigger.type !== type) {
          return false;
        }
        try {
          const Trigger = require(`triggers/${type}`);

          if (Trigger.default({
            trigger,
            request,
            workflow,
            definitions: [timeline.definitions, workflow.definitions],
          })) {
            if (trigger.mapper) {
              if (trigger.mapper.local) {
                timeline.definitions = Object.assign(
                  Object.keys(trigger.mapper.local).reduce((prev, key) => {
                    prev[key] = lookValues(trigger.mapper.local[key], request);
                    return prev;
                  }, {}), timeline.definitions);
              }
              if (trigger.mapper.global) {
                workflow.definitions = Object.assign(
                  Object.keys(trigger.mapper.global).reduce((prev, key) => {
                    prev[key] = lookValues(trigger.mapper.global[key], request);
                    return prev;
                  }, {}), workflow.definitions);
              }
            }
            return true;
          }
          return false;
        } catch (e) {
          console.log('trigger type not defined', e);
          return false;
        }
      });
      let actions = [];
      if (save) {
        timeline.active++;
        currentStep.log = Object.assign({}, currentStep.log || {}, {
          doneAt: new Date(),
        });
        actions = currentStep.actions.map(action => {
          try {
            const callAction = require(`actions/${action.type}`).default;
            return () => {
              return callAction(action, request, timeline.definitions, workflow.definitions);
            };
          } catch (e) {
            console.log('action type not defined', e);
            return () => {};
          }
        }).concat([
          () => {
            require('actions/internal').default({
              workflow: Workflow._id,
              type: `${timeline.label}.${currentStep.label}`,
            }, request, timeline.definitions, workflow.definitions);
          },
        ]);
      }

      timeline.steps = timeline.steps.map((step, index) => {
        if (index < currentStep) {
          return step;
        }
        step.triggers = step.triggers.map(trigger => {
          if (trigger.type !== 'step') {
            return trigger;
          }
          trigger.steps = trigger.steps.map(innerStep => {
            if (innerStep.log && innerStep.log.doneAt) {
              return innerStep;
            }
            try {
              if (require(`triggers/${innerStep.type}`).default({
                trigger: innerStep,
                request,
                workflow,
                definitions: [timeline.definitions, workflow.definitions],
              })) {
                save = true;
                return Object.assign({
                  log: {
                    doneAt: new Date(),
                  }
                }, innerStep);
              }
              return innerStep;
            } catch (e) {
              return innerStep;
            }
          });
          return trigger;
        });
        return step;
      });
      return {
        changed: save || prev.changed,
        timelines: prev.timelines.concat([timeline]),
        actions: prev.actions.concat(actions),
      };
    }, {
      changed: false,
      timelines: [],
      actions: [],
    });
    if (update.changed) {
      workflow.timelines = update.timelines;
      return Update(workflow)
          .then(() => Promise.all(update.actions.map(a => a())))
          .then(result => {
            resolve(Object.assign({ changed: true, workflow }));
          })
          .catch(e => {
            console.log('ERROR', e);
            resolve(workflow);
          });
    }
    return resolve(Workflow);
  });
};

export const parse = (packageWF) => (
  packageWF.timelines.map(TimelineController.parse)
)

export const getLog = workflow => (
  workflow.timelines.reduce((log, timeline) => (
    log.concat(timeline.steps.reduce((stepsDone, step) => {
      if (!step.log.doneAt) {
        return stepsDone;
      }
      return stepsDone.concat([{
        timeline: timeline.label,
        step: step.label,
        date: step.log.doneAt.getTime(),
        definitions: timeline.definitions,
      }]);
    }, []))
      .sort((a, b) => a.date > b.date)
  ), [])
)

export const step = (type = 'api', request) => {
  // Search for workflows that will change with this request
  return getInstances()
    .then(instances =>{
      return Promise.all(
        instances.map(workflow => ProcessWorkflow(workflow, type, request))
      )
    })
    .then(workflows =>
      Promise.all([
        workflows.filter(w => w.changed).map(w => ProcessWorkflow(w.workflow, 'step', {})),
      ])
    )
    .then(workflows => Promise.resolve(workflows))
    .catch(e => {
      console.log(e);
      console.log(e.stack);
    });
};
