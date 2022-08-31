import makeGame from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../numberOfGameRounds.js';

const isEven = (number) => ((number % 2) === 0);

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const round = [];
    const question = getRandomNumber(1, 100);
    const wrightAnswer = isEven(question) ? 'yes' : 'no';
    round.push(question);
    round.push(wrightAnswer);
    rounds.push(round);
  }
  makeGame(description, rounds);
};
export default startGame;
