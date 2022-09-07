import runEngine from '../index.js';
import getRandomNumber from '../utils.js';
import roundsCount from '../constants.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = start; result.length <= length; i += step) {
    result.push(i);
  }
  return result;
};

const generateRound = () => {
  const progressionStart = getRandomNumber(0, 10);
  const progressionStep = getRandomNumber(0, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  runEngine(description, rounds);
};
export default startGame;
