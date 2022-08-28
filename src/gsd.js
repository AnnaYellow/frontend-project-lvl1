const getGSD = (firstNum, secondNum) => {
  const firstNumDevisorsArray = [];
  const secondNumDevisorsArray = [];
  for (let a = 1; a <= firstNum; a += 1) {
    if ((firstNum % a) === 0) {
      firstNumDevisorsArray.push(a);
    }
  }
  for (let b = 1; b <= secondNum; b += 1) {
    if ((secondNum % b) === 0) {
      secondNumDevisorsArray.push(b);
    }
  }
  let result = firstNumDevisorsArray.length - 1;
  while (!secondNumDevisorsArray.includes(firstNumDevisorsArray[result])) {
    result -= 1;
  }
  return firstNumDevisorsArray[result];
};
export default getGSD;
