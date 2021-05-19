import { SCENARIO } from './constant';
import { getParameterByName } from './url';

export const getSettings = () => {
  return {
    scenario: getParameterByName('scenario') || SCENARIO.SCENARIO_1,
    time: parseFloat(getParameterByName('time')) || 1000,
  };
};
