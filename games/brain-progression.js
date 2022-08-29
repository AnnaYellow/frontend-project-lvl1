import makeGame from '../src/index.js';
import getRandomNum from '../src/randomnum.js';
import getRandomArithmProgression from '../src/randomprogression.js';

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const getProgression = getRandomArithmProgression(10);
    const getMissingNumberIndex = getRandomNum(getProgression.length - 1);
    const getWrightAnswer = String(getProgression[getMissingNumberIndex]);
    const getQuestion = getProgression;
    getQuestion[getMissingNumberIndex] = '..';
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(getWrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainProgression;
