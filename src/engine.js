import readlineSync from 'readline-sync';

export const showGameRules = (gameTitle) => {
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

export const getRandomNumber = (range = 10) => Math.floor(Math.random() * range);

export const boolToYesNo = (bool) => {
  const result = bool ? 'yes' : 'no';

  return result;
};

export const checkAnswer = (userName, userAnswer, correctAnswer) => {
  let incorrectAnswerCounter = 0;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}.`);
    incorrectAnswerCounter += 1;

    return incorrectAnswerCounter;
  }

  return incorrectAnswerCounter;
};

export const playRound = (question, correctAnswer, userName) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const incorrectAnswerCount = checkAnswer(userName, userAnswer, correctAnswer);

  return incorrectAnswerCount;
};

export const playGame = (gameTitle, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  showGameRules(gameTitle);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const roundsCount = 3;
  let incorrectAnswerCount = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    incorrectAnswerCount += playRound(question, correctAnswer, userName);
    if (incorrectAnswerCount === 1) {
      return;
    }
  }

  if (incorrectAnswerCount === 0) console.log(`\nCongratulations, ${userName}!!!`);
};
