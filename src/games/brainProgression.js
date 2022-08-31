import makeGame from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../numberOfGameRounds.js';

const getRandomArithmeticProgression = (lengthFrom, lengthTo) => {
  const progressionLenth = getRandomNumber(lengthFrom, lengthTo);
  const progressionDifference = getRandomNumber(0, 10);
  const progressionStart = getRandomNumber(0, 10);
  const result = [];
  let n = progressionStart;
  while (result.length <= progressionLenth) {
    result.push(n);
    n += progressionDifference;
  }
  return result;
};

const startGame = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const round = [];
    const progression = getRandomArithmeticProgression(5, 10);
    const missingNumberIndex = getRandomNumber(0, progression.length - 1);
    const wrightAnswer = String(progression[missingNumberIndex]);
    progression[missingNumberIndex] = '..';
    const question = progression.join(' ');
    round.push(question);
    round.push(wrightAnswer);
    rounds.push(round);
  }
  makeGame(description, rounds);
};
export default startGame;
