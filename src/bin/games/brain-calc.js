/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * 42));

const calculator = (num1, num2, symbol) => {
  let value = 0;
  if (symbol === '-') {
    value = num1 - num2;
  } else if (symbol === '+') {
    value = num1 + num2;
  } else if (symbol === '*') {
    value = num1 * num2;
  }

  return value;
};

export default (userName) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    const arr = ['-', '+', '*'];
    const randomArrIndex = Math.floor(Math.random() * arr.length);
    const randomArrElement = arr[randomArrIndex];

    const correctAnswer = calculator(firstRandomNumber, secondRandomNumber, randomArrElement);

    console.log(`Question: ${firstRandomNumber} ${randomArrElement} ${secondRandomNumber}`);
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
