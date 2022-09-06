import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import roundsCount from '../constants.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(0, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    rounds.push([question, answer]);
  }
  runEngine(description, rounds);
};
export default startGame;
