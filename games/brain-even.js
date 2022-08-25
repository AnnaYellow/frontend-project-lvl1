import makeGame from '../src/index.js';
import getRandomNum from '../src/utilities.js';

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const getQuestion = getRandomNum(10);
    const isEven = (getQuestion % 2);
    const wrightAnswer = (isEven === 0) ? 'yes' : 'no';
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(wrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainEven;
