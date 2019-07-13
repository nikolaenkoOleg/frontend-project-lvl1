import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * 42));

const predicate = (number) => {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`\nQuestion: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (predicate(number) && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (!predicate(number) && userAnswer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${userName}.`);
			return;
    } else if (predicate(number) && userAnswer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
			return;
    } else if (!predicate(number) && userAnswer === 'no') {
      console.log('Correct!');
    }
  }
  console.log(`\nCongratulations, ${userName}!!!`);
};
