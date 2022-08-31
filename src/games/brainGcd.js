import makeGame from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../numberOfGameRounds.js';

const getDevisorsArray = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if ((number % i) === 0) {
      result.push(i);
    }
  }
  return result;
};

const getGCD = (firstNumber, secondNumber) => {
  const firstNumberDevisorsArray = getDevisorsArray(firstNumber);
  const secondNumberDevisorsArray = getDevisorsArray(secondNumber);
  let result = firstNumberDevisorsArray.length - 1;
  while (!secondNumberDevisorsArray.includes(firstNumberDevisorsArray[result])) {
    result -= 1;
  }
  return firstNumberDevisorsArray[result];
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const secondNumber = getRandomNumber(0, 100);
    const round = [];
    const question = `${firstNumber} ${secondNumber}`;
    const wrightAnswerNumber = getGCD(firstNumber, secondNumber);
    const wrightAnswer = String(wrightAnswerNumber);
    round.push(question);
    round.push(wrightAnswer);
    rounds.push(round);
  }
  makeGame(description, rounds);
};
export default startGame;
