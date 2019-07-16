import readlineSync from 'readline-sync';

const randomizer = 42;
const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * randomizer));

const primeChecker = (number) => {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`\nQuestion: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (primeChecker(randomNumber) && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (!primeChecker(randomNumber) && userAnswer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${userName}.`);
      return;
    } else if (primeChecker(randomNumber) && userAnswer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
      return;
    } else if (!primeChecker(randomNumber) && userAnswer === 'no') {
      console.log('Correct!');
    }
  }
  console.log(`\nCongratulations, ${userName}!!!`);
};
