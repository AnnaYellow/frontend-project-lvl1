import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const getGreeting = `Hello, ${userName}!`;

export default getGreeting;
