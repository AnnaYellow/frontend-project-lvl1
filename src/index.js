import readlineSync from 'readline-sync';
import { numberOfGameRounds } from './utils.js';

const makeGame = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i <= numberOfGameRounds; i += 1) {
    if (i === numberOfGameRounds) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    console.log(`Question: ${rounds[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rounds[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rounds[i][1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default makeGame;
