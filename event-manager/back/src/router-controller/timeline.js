import { getInstance } from 'repositories/timeline';
import { parse } from 'controllers/timeline';

const get = (req, res) => (
  getInstance(req.swagger.params.timelineId.value)
    .then(timeline =>{
      res.json(parse(timeline || { steps: [] }));
    })
    .catch(e => {
      return res.status(400).json({
        code: 404,
        message: e.message,
      });
    })
)

const getActiveStep = (req, res) => {
  const timelineIds = req.swagger.params.timelineId.value.split(',')
  Promise.all(timelineIds.map(id =>
    new Promise((resolve, reject) => (
      getInstance(id)
        .then(timeline => {
          const active = timeline.steps.find(step => !step.log.doneAt);
          // console.log(JSON.stringify(timeline, null, 2));
          return resolve({
            id,
            step: active ? active.label : null,
          });
        })
        .catch((e) => {
          resolve({
            id,
            step: null,
          });
        })
      ))
    ))
    .then(timelines => {
      res.json(timelines);
    })
    .catch(e => {
      return res.status(400).json({
        code: 404,
        message: e.message,
      });
    });
}

module.exports = {
  get,
  getActiveStep,
};
