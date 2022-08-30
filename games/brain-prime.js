import makeGame from '../src/index.js';
import getRandomNum from '../src/randomnum.js';
import isPrime from '../src/primenum.js';

const brainPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestionAndAnswer = [];
  for (let i = 0; i < 6; i += 2) {
    const getQuestion = getRandomNum(100);
    const getWrightAnswer = isPrime(getQuestion) ? 'yes' : 'no';
    getQuestionAndAnswer.push(getQuestion);
    getQuestionAndAnswer.push(getWrightAnswer);
  }
  makeGame(gameRules, getQuestionAndAnswer);
};
export default brainPrime;
