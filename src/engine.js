import readlineSync from 'readline-sync';

export const youAreWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');

  return userName;
};

export const showGameDescription = (gameTitle) => {
  switch (gameTitle) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      break;
  }
};

export const greetingUser = (name) => {
  console.log(`Hello, ${name}\n`);
};

export const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');

  return userAnswer;
};

export const getRandomNumber = (range = 10) => Math.floor(Math.random() * range);

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const showCorrectMessage = () => console.log('Correct!');

export const showIncorrectMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}.`);
};

export const boolToYesNo = (bool) => {
  const result = bool ? 'yes' : 'no';

  return result;
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
