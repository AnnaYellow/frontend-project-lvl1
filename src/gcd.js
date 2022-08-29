import getDevisorsArray from './arrayofdevisors.js';

const getGCD = (firstNum, secondNum) => {
  const firstNumDevisorsArray = getDevisorsArray(firstNum);
  const secondNumDevisorsArray = getDevisorsArray(secondNum);
  let result = firstNumDevisorsArray.length - 1;
  while (!secondNumDevisorsArray.includes(firstNumDevisorsArray[result])) {
    result -= 1;
  }
  return firstNumDevisorsArray[result];
};
export default getGCD;
