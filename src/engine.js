import readlineSync from 'readline-sync';

export const youAreWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');

  return userName;
};

export const greetingUser = (name) => {
  console.log(`Hello, ${name}\n`);
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');

  return userAnswer;
};

export const getRandomNumber = () => {
  const randomizer = 42;

  return Math.floor(Math.random() * (Math.random() * randomizer));
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const showCorrectMessage = () => console.log('Correct!');

export const showIncorrectMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}.`);
};

export const getCongratulations = userName => console.log(`\nCongratulations, ${userName}!!!`);

export const checkAnswer = (userName, userAnswer, correctAnswer, wrongAnswerAcc) => {
  let acc = wrongAnswerAcc;
  if (userAnswer === correctAnswer) {
    showCorrectMessage();
  } else if (userAnswer !== correctAnswer) {
    showIncorrectMessage(userName, userAnswer, correctAnswer);
    acc += 1;

    return acc;
  }

  return acc;
};

export const gameIteration = (game, userName) => {
  let wrongAnswerCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    wrongAnswerCount += game();
    if (wrongAnswerCount === 1) {
      return;
    }
  }

  if (wrongAnswerCount === 0) getCongratulations(userName);
};
