
export default ({ trigger, definitions }) => {
  let valid = true;
  const [local, global] = definitions;
  if (trigger.conditions.local) {
    valid = valid && Object.keys(trigger.conditions.local).reduce((isValid, key) => isValid && !!local[key], true);
  }

  if (trigger.conditions.global) {
    valid = valid && Object.keys(trigger.conditions.global).reduce((isValid, key) => isValid && !!global[key], true);
  }
  return valid;
};
