import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../constants.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const question = getRandomNumber(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    rounds.push([question, answer]);
  }
  runEngine(description, rounds);
};
export default startGame;
