import makeGame from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../numberOfGameRounds.js';

const getCalculation = (firstNumber, actor, secondNumber) => {
  switch (actor) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown actor: '${actor}'!`);
  }
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  const getRandomArgument = (array) => array[getRandomNumber(0, array.length - 1)];
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 10);
    const secondNumber = getRandomNumber(0, 10);
    const round = [];
    const actor = getRandomArgument(['+', '-', '*']);
    const question = `${firstNumber} ${actor} ${secondNumber}`;
    const wrightAnswer = String(getCalculation(firstNumber, actor, secondNumber));
    round.push(question);
    round.push(wrightAnswer);
    rounds.push(round);
  }
  makeGame(description, rounds);
};
export default startGame;
