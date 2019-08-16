import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = getGameData();
    const { question } = gameData;
    const { answer } = gameData;
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!!!`);
};
