import readlineSync from 'readline-sync';

const makeGame = (gameRules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  let counter = 0;
  let i = 0;
  while (counter < 3) {
    console.log(`Question: ${getQuestionAndAnswer[i]}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer !== getQuestionAndAnswer[i + 1]) {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${getQuestionAndAnswer[i + 1]}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
      i += 2;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default makeGame;
