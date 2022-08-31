import makeGame from '../index.js';
import { getRandomNumber, numberOfGameRounds, makeRoundsArray } from '../utils.js';

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
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const question = getRandomNumber(0, 100);
    const wrightAnswer = isPrime(question) ? 'yes' : 'no';
    makeRoundsArray(rounds, question, wrightAnswer);
  }
  makeGame(description, rounds);
};
export default startGame;
