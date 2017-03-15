const getFlux = moduleName => {
  const template = `import reducer from './${moduleName}Reducer';
import Actions from './${moduleName}Actions';
import CONSTANTS from './${moduleName}Constants';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  all: List(),
  current: Map({}),
});

export default {
  reducer,
  Actions,
  CONSTANTS,
  INITIAL_STATE,
};
`;
  return template;
};

module.exports = getFlux;
