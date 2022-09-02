import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import numberOfGameRounds from '../constants.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, difference, lengthFrom, lengthTo) => {
  const progressionLenth = getRandomNumber(lengthFrom, lengthTo);
  const result = [];
  let n = start;
  while (result.length <= progressionLenth) {
    result.push(n);
    n += difference;
  }
  return result;
};

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const progressionStart = getRandomNumber(0, 10);
    const progressionDifference = getRandomNumber(0, 10);
    const progression = getProgression(progressionStart, progressionDifference, 5, 10);
    const missingNumberIndex = getRandomNumber(0, progression.length - 1);
    const answer = String(progression[missingNumberIndex]);
    progression[missingNumberIndex] = '..';
    const question = progression.join(' ');
    rounds.push([question, answer]);
  }
  runEngine(description, rounds);
};
export default startGame;
