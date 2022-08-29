import getRandomNum from './randomnum.js';

const getRandomArithmProgression = (lengthTo, lengthFrom = 5) => {
  const progressionLenth = getRandomNum(lengthTo, lengthFrom);
  const progressionDifference = getRandomNum(10);
  const progressionStart = getRandomNum(10);
  const result = [];
  let n = progressionStart;
  while (result.length <= progressionLenth) {
    result.push(n);
    n += progressionDifference;
  }
  return result;
};
export default getRandomArithmProgression;
