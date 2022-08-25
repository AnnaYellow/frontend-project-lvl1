import makeGame from '../src/index.js';
import getRandomNum from '../src/randomnum.js';

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const getQuestion = getRandomNum(10);
    const isEven = (getQuestion % 2);
    const getWrightAnswer = (isEven === 0) ? 'yes' : 'no';
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(getWrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainEven;
