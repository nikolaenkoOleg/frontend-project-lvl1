#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomizer = 42;
const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * randomizer));

export default (userName) => {
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const parirtyChecker = 2;

    if (number % parirtyChecker === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (number % parirtyChecker === 0 && userAnswer !== 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
      return;
    } else if (number % parirtyChecker !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (number % parirtyChecker !== 0 && userAnswer !== 'no') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!!!`);
};
