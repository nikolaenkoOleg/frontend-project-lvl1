import readlineSync from 'readline-sync';

export const youAreWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getRandomNumber = () => {
  const randomizer = 42;
  return Math.floor(Math.random() * (Math.random() * randomizer));
};

export const showCorrectMessage = () => console.log('Correct!');

export const showIncorrectMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}.`);
};

export const getCongratulations = userName => console.log(`\nCongratulations, ${userName}!!!`);

export const gameIteration = (game, userName) => {
  let answerChecker = 0;
  const answerCounter = 0;
  for (let i = 0; i < 3; i += 1) {
    answerChecker += game(answerCounter);
    if (answerChecker === 1) {
      return;
    }
  }
  if (answerChecker === 0) getCongratulations(userName);
};
