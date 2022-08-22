import readlineSync from 'readline-sync';

const brainEven = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const getGreeting = `Hello, ${userName}!`;
  console.log(getGreeting);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const getRandomNum = Math.round(Math.random() * 10);
    console.log(`Question: ${getRandomNum}`);
    const getAnswer = readlineSync.question('Your answer: ');
    const isEven = (getRandomNum % 2);
    if ((isEven === 0) && (getAnswer === 'no')) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    } else if ((isEven !== 0) && (getAnswer === 'yes')) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    } else if ((getAnswer !== 'no') && (getAnswer !== 'yes')) {
      console.log(`wrong answer ;(\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default brainEven;
