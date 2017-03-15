export default function getComponentActions(v02Actions, params = {}, query = {}, requiredActionKeys = []) {
  if (requiredActionKeys.length === 0) { return []; }
  const requiredActions = requiredActionKeys.map(actionString => {
    const parts = actionString.split('.');
    const actionCreator = parts.reduce((p, n) => {
      return p[n];
    }, v02Actions);
    return actionCreator(params, query);
  });
  return requiredActions;
}
