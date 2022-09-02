import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../constants.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  if (number1 > number2) {
    return getGCD(number2, number1 - number2);
  }
  if (number1 < number2) {
    return getGCD(number1, number2 - number1);
  }
  return number1;
};

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);
    const question = `${number1} ${number2}`;
    const resultNumber = getGCD(number1, number2);
    const answer = String(resultNumber);
    rounds.push([question, answer]);
  }
  runEngine(description, rounds);
};
export default startGame;
