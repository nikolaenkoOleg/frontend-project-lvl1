import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * 42));

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return Math.abs(num1);
};

export default (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    console.log(`Question: ${firstRandomNumber}, ${secondRandomNumber}`);
    const correctAnswer = findGcd(firstRandomNumber, secondRandomNumber);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}.`);
			return;
    }
  }
  console.log(`\nCongratulations, ${userName}!!!`);
};
