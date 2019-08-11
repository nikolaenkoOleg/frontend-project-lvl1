import readlineSync from 'readline-sync';

export const getRandomNumber = (range = 10) => Math.floor(Math.random() * range);

export const playGame = (gameTitle, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTitle);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const roundsCount = 3;
  let incorrectAnswerCount = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = getQuestion();
    const { question } = gameData;
    const { answer } = gameData;
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}.`);
      incorrectAnswerCount += 1;
    }
    if (incorrectAnswerCount === 1) {
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!!!`);
};
