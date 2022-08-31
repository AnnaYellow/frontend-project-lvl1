import makeGame from '../index.js';
import { getRandomNumber, numberOfGameRounds, makeRoundsArray } from '../utils.js';

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
    const progression = getRandomArithmeticProgression(5, 10);
    const missingNumberIndex = getRandomNumber(0, progression.length - 1);
    const wrightAnswer = String(progression[missingNumberIndex]);
    progression[missingNumberIndex] = '..';
    const question = progression.join(' ');
    makeRoundsArray(rounds, question, wrightAnswer);
  }
  makeGame(description, rounds);
};
export default startGame;
