import makeGame from '../index.js';
import { getRandomNumber, numberOfGameRounds, makeRoundsArray } from '../utils.js';

const isEven = (number) => ((number % 2) === 0);

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const wrightAnswer = isEven(question) ? 'yes' : 'no';
    makeRoundsArray(rounds, question, wrightAnswer);
  }
  makeGame(description, rounds);
};
export default startGame;
