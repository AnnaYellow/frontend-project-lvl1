import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import roundsCount from '../constants.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const result = [];
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
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
