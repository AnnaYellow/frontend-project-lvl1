export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const makeRoundsArray = (rounds, question, wrightAnswer) => {
  const round = [];
  round.push(question);
  round.push(wrightAnswer);
  rounds.push(round);
};

export const numberOfGameRounds = 3;
