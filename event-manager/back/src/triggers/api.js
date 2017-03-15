import { compareUsing, replaceValues, lookValues } from 'helpers';

export default ({ trigger, request, definitions }) => {
  let valid = true;
  if (trigger.conditions.body && request.body) {
    valid = valid && Object.keys(trigger.conditions.body).reduce((match, key) => {
      const value = lookValues(key, request.body);
      return match && !!value &&
          (trigger.conditions.body[key].required || compareUsing(
            replaceValues(trigger.conditions.body[key].value, ...definitions),
            value,
            trigger.conditions.body[key].comparationType
          ));
    }, true);
  }
  if (valid) {
    console.log('valid', valid);
  }
  return valid;
};
