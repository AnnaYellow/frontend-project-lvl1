import makeGame from '../src/index.js';
import getRandomNum from '../src/randomnum.js';
import getGSD from '../src/gsd.js';

const brainGCD = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const firstNum = getRandomNum(100);
    const secondNum = getRandomNum(100);
    const getQuestion = `${firstNum} ${secondNum}`;
    const getWrightAnswerNum = getGSD(firstNum, secondNum);
    const getWrightAnswer = String(getWrightAnswerNum);
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(getWrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainGCD;
