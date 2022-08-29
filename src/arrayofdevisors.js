const getDevisorsArray = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if ((number % i) === 0) {
      result.push(i);
    }
  }
  return result;
};
export default getDevisorsArray;
