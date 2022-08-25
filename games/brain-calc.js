import makeGame from '../src/index.js';
import getRandomNum from '../src/randomnum.js';
import getRandomArgument from '../src/randomargument.js';

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const getFirstNum = getRandomNum(10);
    const getSecondNum = getRandomNum(10);
    const getActor = getRandomArgument(['+', '-', '*']);
    const getQuestion = `${getFirstNum} ${getActor} ${getSecondNum}`;
    let getCalculation = 0;
    switch (getActor) {
      case '+':
        getCalculation = getFirstNum + getSecondNum;
        break;
      case '-':
        getCalculation = getFirstNum - getSecondNum;
        break;
      case '*':
        getCalculation = getFirstNum * getSecondNum;
        break;
      default:
        getCalculation = null;
        break;
    }
    const getWrightAnswer = String(getCalculation);
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(getWrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainCalc;
