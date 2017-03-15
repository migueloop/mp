import { step } from 'controllers/workflow';

export default (action) => {
  return step('internal', action);
};
