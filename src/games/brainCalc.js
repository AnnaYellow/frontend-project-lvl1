import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import roundsCount from '../constants.js';

const description = 'What is the result of the expression?';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown actor: '${operator}'!`);
  }
};

const generateRound = () => {
  const result = [];
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, operator, number2));
  result.push(question, answer);
  return result;
};

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  runEngine(description, rounds);
};
export default startGame;
