/**
 * Created by coud on 6/10/16.
 */

export default ({ trigger, request, workflow, definitions }) => {
  return trigger.steps.reduce((fireTrigger, tr) => {
    try {
      if (tr.done) {
        return fireTrigger;
      }
      return false;
    } catch (e) {
      return false;
    }
  }, true);
};

